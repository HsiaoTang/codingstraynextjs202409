declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_LOCALES: string;
    readonly NEXT_PUBLIC_DEFAULT_LOCALE: string;
    readonly NEXT_PUBLIC_KEYCLOAK_URL: string;
    readonly NEXT_PUBLIC_KEYCLOAK_REALM: string;
    readonly NEXT_PUBLIC_KEYCLOAK_CLIENT_ID: string;
    readonly NEXT_PUBLIC_API_BASE_URL: string; 
  }
}