/// <reference types="vite/client" />
interface ImportMetaEnv extends Readonly<Record<string, string>> {
  VITE_API_PREFIX: string;
  VITE_LOGIN_URL: string;
  VITE_SIGNUP_URL: string;
  VITE_LOGOUT_URL: string;
  VITE_TOKEN_URL: string;
  VITE_MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
