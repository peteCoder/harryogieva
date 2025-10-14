// app/api/blog/route.ts
import { client } from "@/lib/client"; // Import your custom Sanity client
import { NextResponse } from "next/server"; // Import NextResponse to send responses


export const dynamic = "force-dynamic";
export const revalidate = 0;

// Define the GET request handler for fetching all blog posts
export async function GET() {
  try {
    // RAW string query to fetch all blog posts with relevant fields
    const query = `
      *[_type == "blog"]{
        _id,
        title,
        slug,
        author,
        publishedAt,
        excerpt,
        "mainImage": mainImage.asset->url, // Get the image URL
      }`;

    // Fetch the blog posts using your custom client
    const posts = await client.fetch(query);

    // Return the posts as a JSON response
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.error(); // Return an error response in case of failure
  }
}
