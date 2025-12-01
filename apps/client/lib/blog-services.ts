import { strapi } from "./strapi";
import { STRAPI_URL } from "./strapi";

export async function getBlogs() {
  const res = await strapi.get("/blogs", {
    params: {
      populate: ["coverImage", "category"],
    },
  });

  return res.data;
}


export async function getBlogBySlug(slug: string) {
  const res = await strapi.get("/blogs", {
    params: {
      filters: { slug: { $eq: slug } },
      populate: ["coverImage", "category"],
    },
  });

  return res.data.data?.[0];
}



export async function getRelatedBlogs(categoryId: number, blogId: number) {
  const res = await strapi.get("/blogs", {
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


export function imageURL(image: any) {
  const url = image?.data?.attributes?.url;
  if (!url) return "";

  return url.startsWith("/")
    ? `${STRAPI_URL}${url}`
    : url;
}
