import type { Metadata, Viewport } from "next";
import React from "react";
import PropertyListingClient from "./_components/PropertyListingClient";

export const metadata: Metadata = {
  title: "Luxury Properties & Estates | Harry Ogieva Real Estate",
  description:
    "Browse exclusive properties and luxury homes for sale in Nigeria. Discover your dream estate with Harry Ogieva Real Estate.",
  keywords: [
    "luxury properties Nigeria",
    "real estate listings",
    "buy home Lagos",
    "properties for sale Abuja",
    "Harry Ogieva properties",
  ],
  openGraph: {
    title: "Luxury Properties & Estates | Harry Ogieva Real Estate",
    description:
      "Explore active listings of premium estates and investment properties across Nigeria.",
    url: "https://www.harryogieva.com/properties",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Properties & Estates | Harry Ogieva Real Estate",
    description:
      "Find exclusive homes and investment opportunities with Harry Ogieva Real Estate.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#b19a55",
};

const PropertyListings = () => {
  return <PropertyListingClient />;
};

export default PropertyListings;
