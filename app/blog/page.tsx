import type { Metadata, Viewport } from "next";
import React from "react";
import BlogListClient from "./_components/BlogListClient";


export const metadata: Metadata = {
  title: "Real Estate Blog & Insights | Harry Ogieva",
  description:
    "Stay informed with expert real estate insights, property market trends, and investment tips from Harry Ogieva — your trusted real estate advisor in Nigeria.",
  keywords: [
    "real estate blog",
    "property investment Nigeria",
    "luxury homes insights",
    "Harry Ogieva blog",
    "real estate trends",
  ],
  openGraph: {
    title: "Real Estate Blog & Insights | Harry Ogieva",
    description:
      "Read expert insights, property news, and investment advice from Harry Ogieva.",
    url: "https://www.harryogieva.com/blog",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Blog & Insights | Harry Ogieva",
    description:
      "Discover valuable property and investment insights from Harry Ogieva.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#b19a55",
};


const BlogListingsPage = () => {
  return <BlogListClient />;
};

export default BlogListingsPage;
