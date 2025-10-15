import { client } from "@/lib/client"; // Import custom Sanity client
import { NextResponse } from "next/server"; // Import NextResponse to send responses

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Define the GET request handler for fetching a single blog post by ID
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params; // Get the ID from URL parameters

    // RAW string query to fetch a single blog post by ID
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
      }[0]`; // Take the first result, assuming IDs are unique

    // Fetch the single blog post data using the ID parameter
    const post = await client.fetch(query, { id });

    // If the post is not found, return a 404 response
    if (!post) {
      return NextResponse.json(
        { message: "Blog post not found" },
        { status: 404 }
      );
    }

    // Return the blog post data as JSON
    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching the blog post:", error);
    return NextResponse.error(); // Return an error response in case of failure
  }
}
