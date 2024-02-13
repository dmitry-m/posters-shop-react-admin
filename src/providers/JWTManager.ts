import { jwtDecode } from "jwt-decode";

export default class TokenManager {
  private inMemoryJWT: string | null = null;
  private logoutEventName: string;
  private refreshEndpoint: string;
  private logoutEndpoint: string;
  private logOutEvent: boolean = false;
  private refreshInterval: number | undefined = undefined;

  constructor(
    refreshEndpoint: string = "token",
    logoutEndpoint: string = "logout",
    logoutEventName: string = "ra-logout"
  ) {
    this.logoutEventName = logoutEventName;
    this.refreshEndpoint = refreshEndpoint;
    this.logoutEndpoint = logoutEndpoint;

    window.addEventListener("storage", (event: StorageEvent) => {
      if (event.key === this.logoutEventName) {
        console.log("storage listener");
        window.clearInterval(this.refreshInterval);
        this.logOutEvent = true;
        this.inMemoryJWT = null;
      }
    });
  }

  public getToken(): string | null {
    return this.inMemoryJWT;
  }

  public setLogoutEventName(name: string): void {
    this.logoutEventName = name;
  }

  public setRefreshTokenEndpoint(endpoint: string): void {
    this.refreshEndpoint = endpoint;
  }

  private refreshToken(delay: number): void {
    console.log({ delay });
    if (this.refreshInterval) {
      window.clearInterval(this.refreshInterval);
    }
    console.log("timer init");
    this.refreshInterval = window.setInterval(
      this.getRefreshedToken.bind(this),
      (delay - 5) * 1000
    ); // Validity period of the token in seconds, minus 5 seconds
  }

  public async getRefreshedToken(): Promise<string | null> {
    console.log("refresh tokens");
    console.log({ url: this.refreshEndpoint });
    if (this.logOutEvent) {
      console.log("reject logout event");
      return this.getToken();
    }

    try {
      const response = await fetch(this.refreshEndpoint, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      // принимать только accessToken
      if (response.ok) {
        const { accessToken }: { accessToken: string } = await response.json();

        if (accessToken) {
          return this.setToken(accessToken);
        }
      }

      console.log("Token renewal failure");
      return this.eraseTokens();
    } catch (error) {
      console.error(error);
      this.eraseTokens();
      if (error instanceof Error) return error.message;
    }

    return this.getToken();
  }

  public setToken(token: string): string {
    this.inMemoryJWT = token;
    const { exp, iat } = jwtDecode(token);

    if (exp && iat) {
      this.refreshToken(exp - iat);
    }

    return this.inMemoryJWT;
  }

  public async eraseTokens(): Promise<null> {
    await fetch(this.logoutEndpoint);
    window.clearInterval(this.refreshInterval);
    window.localStorage.setItem(this.logoutEventName, Date.now().toString());
    return (this.inMemoryJWT = null);
  }
}
