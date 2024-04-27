import { Mutex, MutexInterface } from "async-mutex";
import { jwtDecode } from "jwt-decode";
import { fetchUtils } from "react-admin";

import { User } from "../types";

const mutex: MutexInterface = new Mutex();

interface AuthInterface extends User {
  accessToken: string;
}

export default class TokenManager {
  private inMemoryJWT: string | null = null;

  private refreshEndpoint: string;

  private refreshInterval: number | undefined = undefined;

  constructor(refreshEndpoint = "token") {
    this.refreshEndpoint = refreshEndpoint;
  }

  private setRefreshTokenInterval(delay: number): void {
    console.log({ delay });
    if (this.refreshInterval) {
      console.log("timer clear");
      window.clearInterval(this.refreshInterval);
    }
    console.log("timer init");
    this.refreshInterval = window.setInterval(
      () => {
        void (async () => {
          const auth = await this.fetchAuth.bind(this)();
          if (auth) this.setToken.bind(this)(auth.accessToken);
          else this.eraseToken.bind(this)();
        })();
      },

      (delay - 5) * 1000,
    ); // Validity period of the token in seconds, minus 5 seconds
  }

  public async fetchAuth(): Promise<AuthInterface | null> {
    console.log("fetch token");
    console.log({ url: this.refreshEndpoint });

    return fetchUtils
      .fetchJson(this.refreshEndpoint, {
        method: "GET",
        credentials: "include",
      })
      .then(({ json }: { json: AuthInterface }) => {
        console.log("token was received");
        return json;
      })
      .catch(() => {
        return null;
      });
  }

  public async getFreshToken(): Promise<string | null> {
    console.log("get token");

    if (this.inMemoryJWT) {
      return this.inMemoryJWT;
    }

    await mutex.waitForUnlock();
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const auth = await this.fetchAuth();
        if (auth) return this.setToken(auth.accessToken);
        return this.eraseToken();
      } catch (error) {
        console.error(error);
        this.eraseToken();
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
    console.log("set tokens");
    this.inMemoryJWT = token;
    const { exp, iat } = jwtDecode(token);

    if (exp && iat) {
      this.setRefreshTokenInterval(exp - iat);
    }

    return this.inMemoryJWT;
  }

  public eraseToken(): null {
    this.inMemoryJWT = null;
    window.clearInterval(this.refreshInterval);

    return this.inMemoryJWT;
  }
}
