"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import HouseCard from "@/components/main/HouseCard";
import { PropertyType } from "@/lib/types";
import PageHero from "./PageHero";

const PropertyListingClient = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/api/properties", {
          cache: "no-store",
        }); // Assuming your API endpoint for properties
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
    <main className="bg-[#f7f3f0]">
      <Navbar />
      <PageHero
        pageTitle=" Exclusive Properties"
        pageHeroBGImage="/images/hero_image.jpg"
      />
      <section className="py-10 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase text-[#b19a55] mb-2">
            Explore my
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold uppercase tracking-[2px] text-[#3a2e25] mb-10">
            Active Listings
          </h2>

          <div className="grid gap-3 lg:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {loading
              ? // Show Skeleton Loaders
                Array(3)
                  .fill(0)
                  .map((_, index) => <SkeletonLoader key={index} />)
              : properties.map((listing) => (
                  <HouseCard
                    key={listing._id}
                    id={listing._id}
                    forSale={listing.forSale}
                    name={listing.name}
                    propertyType={listing.propertyType}
                    image={listing.images[0] || ""} // Assuming you want to display the first image
                    excerpt={listing.excerpt} // Using excerpt for price as per the schema
                    location={listing.location} // Using location for address
                  />
                ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PropertyListingClient;
