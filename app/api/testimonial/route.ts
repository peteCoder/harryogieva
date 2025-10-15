// app/api/testimonial/route.ts
import { client } from "@/lib/client"; // Import your custom Sanity client
import { NextResponse } from "next/server"; // Import NextResponse to send responses

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Define the GET request handler for fetching testimonials
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10); // Get the page number, default to 1
  const limit = 5; // Number of testimonials per page
  // const skip = (page - 1) * limit; // Calculate skip based on the current page

  try {
    // For homepage, fetch first 5 testimonials (no pagination here)
    const query = `
      *[_type == "testimonial"] | order(createdAt desc) [0...5] {
        _id,
        name,
        testimonial,
        "image": image.asset->url,
        createdAt
      }`;

    // Fetch the testimonial data using your custom client
    const testimonials = await client.fetch(query);

    // Fetch the total number of testimonials to calculate the total pages (for pagination)
    const totalCountQuery = `count(*[_type == "testimonial"])`;
    const totalCount = await client.fetch(totalCountQuery);

    const totalPages = Math.ceil(totalCount / limit); // Calculate total pages

    // Return the testimonials and pagination info as a JSON response
    return NextResponse.json({
      testimonials,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.error(); // Return an error response in case of failure
  }
}
