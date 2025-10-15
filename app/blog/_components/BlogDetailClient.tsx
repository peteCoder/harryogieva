"use client";

import BlockContentRenderer from "@/components/main/BlockContentRenderer";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import RecentBlogPosts from "@/components/main/RecentBlogPosts";
import { Facebook, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogDetailClient = ({ id }: { id: string }) => {
  const [blogPost, setBlogPost] = useState<any>(null); // State for blog post data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`/api/blog/${id}`);
        const data = await response.json();

        if (data) {
          setBlogPost(data); // Set fetched blog post data
        } else {
          setError("Blog post not found"); // Handle no post found
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setError("Error fetching blog post"); // Handle error
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchBlogPost();
  }, [id]);

  // Show loading skeleton loader
  if (loading) {
    return (
      <div className="bg-[#f7f3f0] min-h-screen flex flex-col">
        <Navbar />
        <section className="pt-20 px-2 md:px-5">
          <div className="relative h-[70vh] md:h-screen w-full overflow-hidden">
            <div className="bg-gray-300 animate-pulse w-full h-full" />
          </div>
          <div className="mt-20 mb-3 space-y-5 md:mt-30 text-center flex-col flex items-center">
            <div className="h-6 bg-gray-300 animate-pulse rounded w-1/4 mb-2" />
            <div className="h-8 bg-gray-300 animate-pulse rounded w-1/2 mb-2" />
            <div className="flex justify-center items-center gap-3 text-[#5c4f3a] text-xs sm:text-sm md:text-base uppercase">
              <div className="h-4 bg-gray-300 animate-pulse rounded w-1/3 mb-2" />
            </div>
            <div className="h-10 bg-gray-300 animate-pulse rounded w-32 mb-4" />
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Show error message if blog post is not found
  if (error) {
    return (
      <main className="bg-[#f7f3f0] min-h-screen flex flex-col justify-center items-center">
        <Navbar />
        <section className="flex flex-col items-center justify-center pt-20 px-5 text-center">
          <div className="max-w-xl text-center">
            <h2 className="text-4xl font-semibold text-[#3a3225] mb-6">
              Oops! Blog Post Not Found
            </h2>
            <p className="text-lg text-[#4a4336] mb-6">
              We&apos;re sorry, but we couldn&apos;t find the blog post you&apos;re looking
              for. It may have been removed, or the link may be outdated.
            </p>
            <Link
              href="/blog"
              className="bg-[#b19a55] text-white py-3 px-8 rounded-lg text-lg uppercase hover:bg-transparent hover:text-[#b19a55] border border-[#b19a55] transition-all duration-300"
            >
              Back to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // Render blog post details
  const url = window.location.href; // The current URL of the blog post page
  const title = blogPost?.title; // Blog post title

  return (
    <main className="bg-[#fff]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
        <Image
          src={blogPost.mainImage} // Dynamic image path from API
          alt={blogPost.title}
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-5">
          <h1 className="text-3xl md:text-5xl font-semibold uppercase mb-2">
            {blogPost.title}
          </h1>
          <p className="text-sm md:text-base">
            {blogPost.author} |{" "}
            {new Date(blogPost.publishedAt).toLocaleDateString()}
          </p>

          {/* Share Icons */}
          <div className="flex items-center gap-3 mt-6">
            <span className="uppercase text-xs tracking-[2px]">Share</span>
            <div className="flex gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  url
                )}`}
                target="_blank"
                className="p-2 rounded-full bg-white/10 hover:bg-[#b19a55] transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  title
                )}&url=${encodeURIComponent(url)}`}
                target="_blank"
                className="p-2 rounded-full bg-white/10 hover:bg-[#b19a55] transition"
              >
                <Twitter size={16} />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  title
                )}%20${encodeURIComponent(url)}`}
                target="_blank"
                className="p-2 rounded-full bg-white/10 hover:bg-[#b19a55] transition"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-5xl mx-auto py-16 px-6 md:px-2 text-[#3a2e25]">
        <div className="text-sm md:text-base xl:text-lg leading-relaxed mb-8">
          {/* {blogPost.content} */}
          <BlockContentRenderer blocks={blogPost.content} />
        </div>
      </section>

      <RecentBlogPosts id={id} />

      <Footer />
    </main>
  );
};

export default BlogDetailClient;
