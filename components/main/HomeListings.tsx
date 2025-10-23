// components/HomeListings.tsx
"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import HouseCard from "./HouseCard";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PropertyType } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";

const HomeListings = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [loading, setLoading] = useState(true);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  // Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/api/properties"); // Assuming your API endpoint for properties
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Skeleton loader for loading state
  const SkeletonLoader = () => (
    <div className="bg-gray-300 w-full h-[250px] rounded-lg"></div>
  );

  return (
    <section className="bg-[#f7f3f0] py-16 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase text-[#b19a55] mb-2">
            Current Listings
          </h3>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold uppercase tracking-[2px] text-[#3a2e25] mb-10">
            Exclusive Properties
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <Carousel
            plugins={[plugin.current]}
            className="relative"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="flex gap-3">
              {loading
                ? // Show Skeleton Loaders
                  Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-full sm:basis-1/2 md:basis-1/3"
                      >
                        <SkeletonLoader />
                      </CarouselItem>
                    ))
                : // Show actual properties
                  properties.map((listing, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full sm:basis-1/2 md:basis-1/3"
                    >
                      <HouseCard
                        id={listing._id}
                        forSale={listing.forSale}
                        name={listing.name}
                        propertyType={listing.propertyType}
                        image={listing.images[0]} // Assuming you want to display the first image
                        excerpt={listing.excerpt} // Using excerpt for price as per the schema
                        location={listing.location} // Using location for address
                      />
                    </CarouselItem>
                  ))}
            </CarouselContent>

            {/* Bottom-left arrows */}
            <div className="mt-10 lg:mt-20 flex items-center justify-between flex-col md:flex-row gap-5">
              <div className="space-x-5">
                <CarouselPrevious className="static bg-[#ccb091] text-white hover:bg-[#b19a55] w-9 h-9 sm:w-10 sm:h-10 rounded-full" />
                <CarouselNext className="static bg-[#ccb091] text-white hover:bg-[#b19a55] w-9 h-9 sm:w-10 sm:h-10 rounded-full" />
              </div>
              <Link
                href="/properties"
                className="uppercase bg-[#ccb091] text-white hover:bg-transparent border border-[#ccb091] hover:border-[#b19a55] hover:text-[#b19a55] px-8 py-3"
              >
                View All
              </Link>
            </div>
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HomeListings;
