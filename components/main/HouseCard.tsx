"use client";

import Image from "next/image";
import Link from "next/link";

interface HouseCardProps {
  id: string;
  name: string;
  image: string;
  excerpt: string;
  location: string;
  propertyType: string;
  forSale: boolean;
}

// Helper function to truncate long excerpts
const truncateText = (text: string, maxLength: number): string => {
  if (!text) return "";
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + "..."
    : text;
};

const HouseCard = ({
  id,
  image,
  name,
  excerpt,
  location,
  propertyType,
  forSale,
}: HouseCardProps) => {
  return (
    <Link
      href={`/properties/${id}`}
      className="bg-transparent block overflow-hidden border group cursor-pointer transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative">
        <div className="w-full h-[250px] overflow-hidden">
          <Image
            src={image}
            alt={location}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
          />
        </div>

        <span className="absolute top-4 right-4 bg-[#b19a55] text-white text-xs font-semibold px-3 py-1 uppercase">
          {forSale ? "For Sale" : "Not For Sale"}
        </span>
      </div>

      <div className="p-5 text-left">
        <p className="font-medium text-xs mb-3 uppercase inline-block p-2 px-3 rounded-full text-white bg-[#b19a55]">
          {propertyType}
        </p>

        <p className="text-lg font-semibold text-[#3a2e25] mb-1 uppercase">
          {name}
        </p>

        {/* Excerpt now automatically truncates after 150 characters */}
        <p className="text-[#3a2e25] text-xs mb-3">
          {truncateText(excerpt, 150)}
        </p>
      </div>
    </Link>
  );
};

export default HouseCard;
