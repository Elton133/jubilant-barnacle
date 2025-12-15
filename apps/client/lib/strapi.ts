import axios from "axios";

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://fearless-dawn-bbc3e2cf20.strapiapp.com";

export const strapi = axios.create({
  baseURL: `${STRAPI_URL}/api`,
});
