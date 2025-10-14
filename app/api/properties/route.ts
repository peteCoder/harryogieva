// app/api/property/route.ts
import { client } from "@/lib/client"; // Import your custom Sanity client
import { NextResponse } from "next/server"; // Import NextResponse for response handling


export const dynamic = "force-dynamic";
export const revalidate = 0;


// Define the GET request handler for fetching all properties
export async function GET() {
  try {
    // Query to fetch all properties with the relevant fields (including image URLs and block content)
    const query = `*[_type == "property"]{
      _id,
      name,
      propertyType,
      location,
      excerpt,
      "images": images[].asset->url, // Fetch image URLs for images field
      isFeatured,
      forSale,
      createdAt
    }`;

    const properties = await client.fetch(query);

    return NextResponse.json(properties);
  } catch (error) {
    // Log and handle the error gracefully
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching properties" },
      { status: 500 } // Return 500 Internal Server Error in case of failure
    );
  }
}
