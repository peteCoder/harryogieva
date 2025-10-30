"use server";
import { client } from "@/lib/client";

export const getAllBlogs = async () => {
  const query = `
      *[_type == "blog"]{
        _id,
        title,
        slug,
        author,
        publishedAt,
        excerpt,
        "mainImage": mainImage.asset->url, // Get image URL
        content
      }`;

  const result = await client.fetch(query);

  return { data: result, length: result.length };
};
