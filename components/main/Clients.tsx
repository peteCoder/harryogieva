"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Olu Thompson",
    text: `"We chose Harry as our agent because He showed us a house a few years ago and we liked her. He was never too busy to get back to us and sold our home the first weekend!"`,
  },
  {
    name: "Chidera Johnson",
    text: `"Harry was an absolute pleasure to work with. He guided us through the buying process with patience and professionalism. Highly recommend!"`,
  },
  {
    name: "Michael Osifo",
    text: `"Professional, caring, and always available. Harry went above and beyond to help us sell quickly and smoothly."`,
  },
  {
    name: "Maria Johnson",
    text: `"Devoted, caring, and always reliable. Harry went above and beyond to help us sell quickly and smoothly."`,
  },
];

const Clients = () => {
  return (
    <section className="relative min-h-[60vh] bg-[url('/images/hero_image.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center">
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
              {testimonials.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center justify-center space-y-6 px-2 sm:px-6">
                    <p className="text-base sm:text-lg md:text-xl italic leading-relaxed max-w-2xl">
                      {item.text}
                    </p>
                    <h3 className="text-[#ccb091] font-medium text-sm sm:text-base">
                      — {item.name}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Bottom-left arrows */}
            <div className="mt-10 lg:mt-20 flex items-center justify-between flex-col md:flex-row gap-5">
              <div className="space-x-5">
                <CarouselPrevious className=" static bg-[#ccb091] text-white hover:bg-[#b19a55] w-9 h-9 sm:w-10 sm:h-10 rounded-full" />
                <CarouselNext className=" static bg-[#ccb091] text-white hover:bg-[#b19a55] w-9 h-9 sm:w-10 sm:h-10 rounded-full" />
              </div>
              <a
                href="/"
                className="uppercase bg-[#ccb091] text-white hover:bg-[#b19a55] px-8 py-3"
              >
                View All
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Clients;
