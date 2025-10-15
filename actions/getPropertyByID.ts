"use server";
import { client } from "@/lib/client";

export const getPropertyByID = async (id: string) => {
  const query = `
    *[_type == "property" && _id == $id] {
      _id,
      name,
      forSale,
      propertyType,
      location,
      excerpt,
      "images": images[].asset->url,
      isFeatured,
      createdAt,
      propertyDescription,
      youTubeIframe,
      googleMapIframe,
    }[0]`;

  const result = await client.fetch(query, { id });
  return result;
};
