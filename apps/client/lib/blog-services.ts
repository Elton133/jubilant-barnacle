import { strapi, STRAPI_URL } from "./strapi";
import type { StrapiBlog, StrapiListResponse, StrapiImage } from "./types";

export async function getBlogs(): Promise<StrapiListResponse<StrapiBlog>> {
  const res = await strapi.get<StrapiListResponse<StrapiBlog>>("/blogs", {
    params: {
      populate: ["coverImage", "category"],
    },
  });

  return res.data;
}

export async function getBlogBySlug(slug: string): Promise<StrapiBlog | undefined> {
  const res = await strapi.get<StrapiListResponse<StrapiBlog>>("/blogs", {
    params: {
      filters: { slug: { $eq: slug } },
      populate: ["coverImage", "category"],
    },
  });

  return res.data.data?.[0];
}

export async function getRelatedBlogs(categoryId: number, blogId: number): Promise<StrapiBlog[]> {
  const res = await strapi.get<StrapiListResponse<StrapiBlog>>("/blogs", {
    params: {
      filters: {
        category: { id: { $eq: categoryId } },
        id: { $ne: blogId },
      },
      populate: ["coverImage", "category"],
      pagination: { limit: 3 },
    },
  });

  return res.data.data;
}

/**
 * Get full image URL from Strapi image object.
 * Handles both Strapi v4 (nested data.attributes) and v5 (flat) formats.
 */
export function imageURL(image: StrapiImage | null | undefined): string {
  if (!image) return "";

  // Strapi v5 flat format - url is directly on the image object
  const url = image.url;
  if (!url) return "";

  // If URL is relative, prepend Strapi URL
  return url.startsWith("/") ? `${STRAPI_URL}${url}` : url;
}
