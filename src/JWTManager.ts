import { jwtDecode } from "jwt-decode";

export default class TokenManager {
  private inMemoryJWT: string | null = null;
  private logoutEventName: string = "ra-logout";
  private refreshEndpoint: string = "/refresh-token";
  private refreshTimeOutId: number | undefined = undefined;

  constructor(logoutEventName: string, refreshEndpoint: string) {
    this.logoutEventName = logoutEventName;
    this.refreshEndpoint = refreshEndpoint;

    window.addEventListener("storage", (event: StorageEvent) => {
      if (event.key === this.logoutEventName) {
        this.inMemoryJWT = null;
      }
    });
  }

  public setLogoutEventName(name: string): void {
    this.logoutEventName = name;
  }

  public setRefreshTokenEndpoint(endpoint: string): void {
    this.refreshEndpoint = endpoint;
  }

  private refreshToken(delay: number): void {
    console.log({ delay });
    if (this.refreshTimeOutId) {
      window.clearInterval(this.refreshTimeOutId);
    }
    this.refreshTimeOutId = window.setInterval(
      this.getRefreshedTokens,
      (delay - 5) * 1000
    ); // Validity period of the token in seconds, minus 5 seconds
  }

  public async getRefreshedTokens(): Promise<string | null> {
    try {
      const response = await fetch(this.refreshEndpoint, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.status !== 200) {
        console.log("Token renewal failure");
        return this.eraseTokens();
      }

      const { accessToken }: { accessToken: string } = await response.json();

      if (accessToken) {
        const { exp, iat } = jwtDecode(accessToken);

        if (exp && iat) {
          this.refreshToken(exp - iat);
          this.setToken(accessToken);
        }
        return this.getToken();
      }

      return this.eraseTokens();
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) return error.message;
    }
    return this.getToken();
  }

  public getToken(): string | null {
    return this.inMemoryJWT;
  }

  public setToken(token: string): string | null {
    return (this.inMemoryJWT = token);
  }

  public eraseTokens(): string | null {
    window.clearTimeout(this.refreshTimeOutId);
    window.localStorage.setItem(this.logoutEventName, Date.now().toString());
    return (this.inMemoryJWT = null);
  }
}
