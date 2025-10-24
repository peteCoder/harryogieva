"use client";

import Image from "next/image";
import Link from "next/link";

interface HouseCardProps {
  id: string;
  name: string;
  image: string; // Assuming image is the first image in the images array
  excerpt: string; // Using excerpt as price in your case
  location: string; // Location
  propertyType: string;
  forSale: boolean;
}

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

        {forSale ? (
          <span className="absolute top-4 right-4 bg-[#b19a55] text-white text-xs font-semibold px-3 py-1 uppercase">
            For Sale
          </span>
        ) : (
          <span className="absolute top-4 right-4 bg-[#b19a55] text-white text-xs font-semibold px-3 py-1 uppercase">
            Not For Sale
          </span>
        )}
      </div>

      <div className="p-5 text-left">
        <p className="text-2xl font-semibold text-[#3a2e25] mb-1 uppercase">
          {name}
        </p>
        <p className="text-[#3a2e25] font-medium text-sm mb-3 uppercase">
          {excerpt}
        </p>
        <p className="font-medium text-xs mb-3 uppercase inline-block p-2 px-3 rounded-full text-white bg-[#b19a55]">
          {propertyType}
        </p>
      </div>
    </Link>
  );
};

export default HouseCard;
