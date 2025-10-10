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
import { blogPosts } from "@/lib/constants";

const RecentBlogPosts = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
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
            {blogPosts.slice(0, 3).map((post, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="block bg-white overflow-hidden cursor-pointer group border transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative">
                    <div className="w-full h-[250px] overflow-hidden">
                      <Image
                        src={post.image}
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
  );
};

export default RecentBlogPosts;
