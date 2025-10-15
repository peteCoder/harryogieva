"use client";

import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { TestimonialType } from "@/lib/types";
import Image from "next/image";

// Define the skeleton loader
const SkeletonLoader = () => (
  <div className="flex flex-col items-center justify-center space-y-6 px-2 sm:px-6 animate-pulse">
    <div className="bg-gray-300 w-full h-10 mb-4 rounded-md"></div>{" "}
    {/* Text skeleton */}
    <div className="bg-gray-300 w-2/3 h-6 rounded-md"></div>{" "}
    {/* Name skeleton */}
    <div className="bg-gray-300 w-16 h-16 rounded-full mt-4"></div>{" "}
    {/* Image skeleton */}
  </div>
);

const Clients = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch the first 5 testimonials on component mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/testimonial"); // Fetching first 5 testimonials
        const data = await response.json();
        setTestimonials(data.testimonials); // Set fetched testimonials
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="relative min-h-[60vh] bg-[url('/images/img1.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 md:px-10 py-20 text-center text-white">
        <h4 className="text-[#ccb091] tracking-wide font-medium text-sm sm:text-base mb-2">
          GET IN TOUCH
        </h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
          WHAT MY CLIENTS SAY
        </h1>

        {/* Carousel */}
        <div className="relative w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {loading ? (
                // Show skeletal loader while loading testimonials
                <>
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <CarouselItem key={index}>
                        <SkeletonLoader />
                      </CarouselItem>
                    ))}
                </>
              ) : (
                // Show actual testimonials after loading
                testimonials.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col items-center justify-center space-y-6 px-2 sm:px-6">
                      <p className="text-base sm:text-lg md:text-xl italic leading-relaxed max-w-2xl">
                        {item.testimonial}
                      </p>
                      <h3 className="text-[#ccb091] font-medium text-sm sm:text-base">
                        — {item.name}
                      </h3>
                      {/* Optional Profile Image */}
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 rounded-full"
                        />
                      )}
                    </div>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>

            {/* Bottom-left arrows */}
            <div className="mt-10 lg:mt-20 flex items-center justify-between flex-col md:flex-row gap-5">
              <div className="space-x-5">
                <CarouselPrevious className="static bg-[#ccb091] text-white hover:bg-[#b19a55] w-9 h-9 sm:w-10 sm:h-10 rounded-full" />
                <CarouselNext className="static bg-[#ccb091] text-white hover:bg-[#b19a55] w-9 h-9 sm:w-10 sm:h-10 rounded-full" />
              </div>
              <Link
                href="/testimonials"
                className="uppercase bg-[#ccb091] text-white hover:bg-[#b19a55] px-8 py-3"
              >
                View All
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Clients;
