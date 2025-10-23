// app/api/property/[id]/route.ts
import { client } from "@/lib/client"; // Import your custom Sanity client
import { NextResponse } from "next/server"; // Import NextResponse for response handling

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Define the GET request handler for fetching a single property by ID or slug
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Get the ID or slug from the URL parameters
    const { id } = await params;

    // Query to fetch a single property by ID or slug
    // Only return the first result
    const query = `
      *[_type == "property" && (slug.current == $id || _id == $id)]{
        _id,
        name,
        forSale,
        propertyType,
        location,
        excerpt,
        "images": images[].asset->url, // Fetch image URLs for images field
        isFeatured,
        createdAt,
        propertyDescription, // Block content for description (including images in block)
        facebookIframeURL,
        googleMapIframe,
      }[0]`;

    // Fetch the property data using your custom client
    const property = await client.fetch(query, { id });

    // If the property is not found, return a 404 response
    if (!property) {
      return NextResponse.json(
        { message: "Property not found" },
        { status: 404 }
      );
    }

    // Return the property data as JSON
    return NextResponse.json(property);
  } catch (error) {
    // Log and handle the error gracefully
    console.error("Error fetching the property:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching the property" },
      { status: 500 } // Return 500 Internal Server Error in case of failure
    );
  }
}
