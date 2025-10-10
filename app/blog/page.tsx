import React from "react";

import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { blogPosts } from "@/lib/constants";
import BlogCard from "@/components/main/BlogCard";
import PageHero from "@/app/properties/_components/PageHero";

const BlogListings = () => {
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
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogListings;
