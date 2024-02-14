import { jwtDecode } from "jwt-decode";
import { Mutex, MutexInterface } from "async-mutex";

const mutex: MutexInterface = new Mutex();

export default class TokenManager {
  private inMemoryJWT: string | null = null;
  private logoutEventName: string;
  private refreshEndpoint: string;
  private logoutEndpoint: string;
  private logoutEvent: boolean = false;
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
        this.eraseTokens();
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
      console.log("timer clear");
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
    // if (this.inMemoryJWT) return this.inMemoryJWT;
    await mutex.waitForUnlock();

    if (!mutex.isLocked() && !this.logoutEvent) {
      const release = await mutex.acquire();
      try {
        const response = await fetch(this.refreshEndpoint, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (response.ok) {
          const { accessToken } = await response.json();
          console.log("token was received");
          this.setToken(accessToken);

          return this.inMemoryJWT;
        } else return this.eraseTokens();
      } catch (error) {
        console.error(error);
        this.eraseTokens();
        if (error instanceof Error) return error.message;
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      return this.inMemoryJWT;
    }

    return this.inMemoryJWT;
  }

  public setToken(token: string): string {
    this.inMemoryJWT = token;
    const { exp, iat } = jwtDecode(token);

    if (exp && iat) {
      this.refreshToken(exp - iat);
    }
    this.logoutEvent = false;

    return this.inMemoryJWT;
  }

  public async eraseTokens(): Promise<null> {
    if (!this.logoutEvent) {
      await fetch(this.logoutEndpoint);
      window.localStorage.setItem(this.logoutEventName, Date.now().toString());
      this.logoutEvent = true;
    }
    window.clearInterval(this.refreshInterval);

    return (this.inMemoryJWT = null);
  }
}
