"use server";
import { client } from "@/lib/client";

export const getBlogByID = async (id: string) => {
  const query = `
      *[_type == "blog" && _id == $id]{
        _id,
        title,
        slug,
        author,
        publishedAt,
        excerpt,
        "mainImage": mainImage.asset->url, // Get image URL
        content
      }[0]`; // We expect only a single blog post, hence [0]

  const result = await client.fetch(query, { id });

  return result; // This will return a single blog post object, or null if not found
};
