"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import BlogCard from "@/components/main/BlogCard";
import PageHero from "@/app/properties/_components/PageHero";

const BlogListings = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogPosts = async () => { 
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();
        setBlogPosts(data); // Store fetched blog posts in state
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchBlogPosts(); // Fetch the blog posts when component mounts
  }, []);

  if (loading) {
    return (
      <main className="bg-[#f7f3f0]">
        <Navbar />
        <PageHero
          pageTitle="Latest Blog Posts"
          pageHeroBGImage="/images/hero_image.jpg"
        />
        <section className="py-10 px-5">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase text-[#b19a55] mb-2">
              Explore my
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold uppercase tracking-[2px] text-[#3a2e25] mb-10">
              Blog Posts
            </h2>

            {/* Skeleton Loader Grid */}
            <div className="grid gap-3 lg:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {/* Skeleton Loader for Blog Cards */}
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 animate-pulse rounded-lg shadow-md overflow-hidden"
                >
                  <div className="w-full h-[250px] bg-gray-400"></div>
                  <div className="p-5">
                    <div className="h-6 bg-gray-300 mb-3 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 mb-2 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-300 mb-2 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <main className="bg-[#f7f3f0]">
        <Navbar />
        <PageHero
          pageTitle="Latest Blog Posts"
          pageHeroBGImage="/images/hero_image.jpg"
        />
        <section className="py-10 px-5">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase text-[#b19a55] mb-2">
              Explore my
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold uppercase tracking-[2px] text-[#3a2e25] mb-10">
              Blog Posts
            </h2>

            {/* No Blog Posts Message */}
            <div className="py-8 px-5 bg-white rounded-md shadow-md">
              <p className="text-lg text-gray-600">
                No blog posts available at the moment. Please check back later!
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-[#f7f3f0]">
      <Navbar />
      <PageHero
        pageTitle="Latest Blog Posts"
        pageHeroBGImage="/images/hero_image.jpg"
      />
      <section className="py-10 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase text-[#b19a55] mb-2">
            Explore my
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold uppercase tracking-[2px] text-[#3a2e25] mb-10">
            Blog Posts
          </h2>

          <div className="grid gap-3 lg:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard
                key={post._id}
                id={post._id}
                image={post.mainImage}
                title={post.title}
                author={post.author}
                date={new Date(post.publishedAt).toLocaleDateString()}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogListings;
