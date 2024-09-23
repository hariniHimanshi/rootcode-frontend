// API
export const API_BASE_URL_PRODUCTION = "http://rootcode.projects.uom.lk:8080";
export const API_BASE_URL_DEVELOPMENT = "http://localhost:8080";
export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? API_BASE_URL_DEVELOPMENT
    : API_BASE_URL_PRODUCTION;