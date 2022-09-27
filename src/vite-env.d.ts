/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE__BASE_API_URL: string;
  readonly VITE__API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
