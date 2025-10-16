"use client";

import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import Autoplay from "embla-carousel-autoplay";
import { Facebook, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlockContentRenderer from "@/components/main/BlockContentRenderer";
import { PropertyType } from "@/lib/types";

const PropertyDetailClient = ({ propertyId }: { propertyId: string }) => {
  const [property, setProperty] = useState<PropertyType | null>(null); // Property data state
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  // Fetch property details
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/api/properties/${propertyId}`, {
          cache: "no-store",
        });
        const data = await response.json();

        if (data) {
          setProperty(data); // Set property data if found
        } else {
          setError("Property not found"); // If no property found, show error
        }
      } catch (error) {
        console.error("Error fetching property:", error);
        setError("Error fetching property"); // Error during fetching
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchProperty();
  }, [propertyId]);

  // Show loading skeleton loader
  if (loading) {
    return (
      <div className="bg-[#f7f3f0] min-h-screen flex flex-col">
        <Navbar isDefaultBg />
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

  // If there&apos;s an error (property not found)
  if (error) {
    return (
      <main className="bg-[#f7f3f0] min-h-screen flex flex-col justify-center items-center">
        <Navbar isDefaultBg />
        {/* Property Not Found Section */}
        <section className="flex flex-col items-center justify-center pt-20 px-5 text-center">
          <div className="max-w-xl text-center">
            <h2 className="text-4xl font-semibold text-[#3a3225] mb-6">
              Oops! Property Not Found
            </h2>
            <p className="text-lg text-[#4a4336] mb-6">
              We&apos;re sorry, but we couldn&apos;t find the property
              you&apos;re looking for. It may have been removed, or the link may
              be outdated.
            </p>
            <Link
              href="/properties"
              className="bg-[#b19a55] text-white py-3 px-8 rounded-lg text-lg uppercase hover:bg-transparent hover:text-[#b19a55] border border-[#b19a55] transition-all duration-300"
            >
              Back to Properties
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // Main property detail section
  const url = window.location.href; // The current URL of the property page
  const title = property?.name; // Property name as the title

  return (
    <main className="bg-[#f7f3f0]">
      <Navbar isDefaultBg />
      {/* Banner Carousel Section */}
      <section className="pt-20 px-2 md:px-5">
        <div className="relative h-[70vh] md:h-screen w-full overflow-hidden">
          <Carousel
            plugins={[plugin.current]}
            opts={{ align: "start", loop: true }}
            className="relative w-full h-full"
          >
            <CarouselContent>
              {property?.images?.map((src: string, index: number) => (
                <CarouselItem
                  key={index}
                  className="relative h-[70vh] md:h-screen w-full"
                >
                  <Image
                    src={src}
                    alt={`property-banner-${index}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Bottom-left controls */}
            <div className="absolute bottom-8 left-8 flex space-x-4 z-10">
              <CarouselPrevious className="static bg-[#ccb091] text-white hover:bg-[#b19a55] w-10 h-10 rounded-full" />
              <CarouselNext className="static bg-[#ccb091] text-white hover:bg-[#b19a55] w-10 h-10 rounded-full" />
            </div>
          </Carousel>
        </div>

        {/* Title Section Below Carousel */}
        <div className="mt-20 mb-3 space-y-5 md:mt-30 text-center flex-col flex items-center">
          <p className="font-medium text-xs mb-3 uppercase inline-block p-2 px-3 rounded-full text-white bg-[#b19a55]">
            {property?.propertyType}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl uppercase">
            {property?.name}
          </h2>
          <div className="flex justify-center items-center gap-3 text-[#5c4f3a] text-xs sm:text-sm md:text-base uppercase">
            <span>{property?.excerpt}</span>
          </div>

          <Link
            href={"/contact"}
            className="border border-[#b19a55] uppercase px-7 py-4 text-white bg-[#b19a55] hover:bg-transparent hover:text-[#b19a55] sm:w-fit flex items-center justify-center"
          >
            Inquire Now
          </Link>
        </div>
      </section>

      {/* Social Share Section */}
      <section className="px-5 md:px-10 lg:px-32 py-8 bg-[#f7f3f0] text-[#3a3225]">
        <div className="flex items-center gap-4">
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
                title || ""
              )}&url=${encodeURIComponent(url)}`}
              target="_blank"
              className="p-2 rounded-full bg-white/10 hover:bg-[#b19a55] transition"
            >
              <Twitter size={16} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                title || ""
              )}%20${encodeURIComponent(url)}`}
              target="_blank"
              className="p-2 rounded-full bg-white/10 hover:bg-[#b19a55] transition"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </section>

      {property?.propertyDescription && (
        <section className="px-5 md:px-10 lg:px-32 py-16 bg-[#f7f3f0] text-[#3a3225]">
          <h3 className="text-xl md:text-3xl font-semibold tracking-widest uppercase text-[#3a3225] mb-4">
            Description
          </h3>
          <BlockContentRenderer blocks={property.propertyDescription} />
        </section>
      )}

      {/* YouTube Video Section */}
      {property?.youTubeIframe && (
        <section className="px-5 md:px-10 lg:px-32 py-16 bg-[#f7f3f0] text-[#3a3225]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-widest uppercase">
              Video
            </h2>
          </div>
          <div className="w-full h-[400px]">
            <iframe
              width="560"
              height="315"
              src={property.youTubeIframe}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {/* Map Location Section */}
      {property?.googleMapIframe && (
        <section className="px-5 md:px-10 lg:px-32 py-16 bg-[#f7f3f0] text-[#3a3225]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-widest uppercase">
              Map Location
            </h2>
          </div>
          <div className="w-full h-[400px]">
            <iframe
              src={property.googleMapIframe}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default PropertyDetailClient;
