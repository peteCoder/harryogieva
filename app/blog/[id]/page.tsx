import { Metadata } from "next";
import BlogDetailClient from "../_components/BlogDetailClient";
import { getBlogByID } from "@/actions/getBlogByID";
import { notFound } from "next/navigation";

type tParams = Promise<{ id: string }>;

// Adjusted to handle the result directly as a single object
export async function generateMetadata(props: {
  params: tParams;
}): Promise<Metadata | undefined> {
  const { id } = await props.params;
  const blog = await getBlogByID(id); // Get a single blog post directly

  if (!blog) {
    return notFound(); // Return 404 if blog is not found
  }

  const blogBannerImage = blog.mainImage;

  return {
    title: blog.title,
    description: blog.excerpt || `One of our best blogs is the ${blog.title}.`,
    openGraph: {
      title: blog.title,
      description:
        blog.excerpt || `One of our best blogs is the ${blog.title}.`,
      type: "website",
      locale: "en_US",
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${blog._id}/`,
      siteName: "Harry Ogieva",
      images: [
        {
          url: blogBannerImage || "",
          width: 1000,
          height: 1000,
        },
      ],
    },
  };
}

// Adjusted to handle the result as a single object
const BlogDetails = async (props: { params: tParams }) => {
  const { id } = await props.params;
  const blog = await getBlogByID(id); // Get the single blog post directly

  if (!blog) {
    return notFound(); // Return 404 if the blog is not found
  }

  return <BlogDetailClient id={id} />; // Pass the id to BlogDetailClient component
};

export default BlogDetails;
