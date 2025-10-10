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
import { listings } from "@/lib/constants";
import Link from "next/link";



const HomeListings = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="bg-[#f7f3f0] py-16 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase text-[#b19a55] mb-2">
          Current Listings
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold uppercase tracking-[2px] text-[#3a2e25] mb-10">
          Exclusive Properties
        </h2>

        <Carousel
          plugins={[plugin.current]}
          className="relative"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="flex gap-3">
            {listings.map((listing, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <HouseCard {...listing} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Bottom-left arrows */}
          <div className="mt-10 lg:mt-20 flex items-center justify-between flex-col md:flex-row gap-5">
            <div className="space-x-5">
              <CarouselPrevious className=" static bg-[#ccb091] text-white hover:bg-[#b19a55] w-9 h-9 sm:w-10 sm:h-10 rounded-full" />
              <CarouselNext className=" static bg-[#ccb091] text-white hover:bg-[#b19a55] w-9 h-9 sm:w-10 sm:h-10 rounded-full" />
            </div>
            <Link
              href="/"
              className="uppercase bg-[#ccb091] text-white hover:bg-transparent border border-[#ccb091] hover:border-[#b19a55] hover:text-[#b19a55] px-8 py-3"
            >
              View All
            </Link>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HomeListings;
