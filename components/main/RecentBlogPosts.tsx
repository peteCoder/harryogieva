"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import { BlogPostType } from "@/lib/types";

const RecentBlogPosts = ({ id }: { id: string }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]); // Store all blog posts
  const [filteredBlogPosts, setFilteredBlogPosts] = useState<BlogPostType[]>(
    []
  ); // Store filtered blog posts (excluding current post)
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();
        setBlogPosts(data); // Store all fetched blog posts
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchBlogPosts(); // Fetch the blog posts when component mounts
  }, []);

  useEffect(() => {
    // Filter out the blog post with the current `id` (exclude it from the recent posts list)
    const filteredPosts = blogPosts.filter((post) => post._id !== id);
    setFilteredBlogPosts(filteredPosts); // Update the state with the filtered blog posts
  }, [blogPosts, id]); // Run whenever `blogPosts` or `id` changes

  if (loading) {
    return (
      <div className="bg-[#f7f3f0] min-h-screen flex flex-col">
        {/* Loading skeleton or placeholder content */}
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
      </div>
    );
  }

  if (filteredBlogPosts.length === 0) {
    return null;
  }

  return (
    <>
      <section className="bg-[#fdf7ef] py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold uppercase text-[#3a2e25] mb-2">
            Recent Blog Posts
          </h2>
          <p className="text-[#5c4f3a] mb-10">
            Stay up to date on the latest real estate trends.
          </p>

          {/* Carousel */}
          <Carousel
            plugins={[plugin.current]}
            className="relative"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="flex gap-5">
              {filteredBlogPosts.slice(0, 3).map((post, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <Link
                    href={`/blog/${post._id}`}
                    className="block bg-white overflow-hidden cursor-pointer group border transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative">
                      <div className="w-full h-[250px] overflow-hidden">
                        <Image
                          src={post.mainImage}
                          alt={post.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    <div className="p-5 text-left">
                      <p className="text-lg font-semibold text-[#3a2e25] mb-2 line-clamp-2 uppercase">
                        {post.title}
                      </p>
                      <p className="text-[#5c4f3a] text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation + View All Button */}
            <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex gap-4">
                <CarouselPrevious className="static bg-transparent border border-[#ccb091] text-[#b19a55] hover:bg-[#b19a55] hover:text-white w-9 h-9 rounded-full" />
                <CarouselNext className="static bg-transparent border border-[#ccb091] text-[#b19a55] hover:bg-[#b19a55] hover:text-white w-9 h-9 rounded-full" />
              </div>

              <Link
                href="/blog"
                className="uppercase bg-transparent border border-[#ccb091] text-[#b19a55] hover:bg-[#ccb091] hover:text-white transition px-10 py-3"
              >
                View All
              </Link>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default RecentBlogPosts;
