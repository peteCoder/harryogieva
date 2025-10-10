"use client";

import Image from "next/image";
import Link from "next/link";

interface HouseCardProps {
  id: string;
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  size: string;
}

const HouseCard = ({
  id,
  image,
  price,
  address,
  beds,
  baths,
  size,
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
            alt={address}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
          />
        </div>

        <span className="absolute top-4 right-4 bg-[#b19a55] text-white text-xs font-semibold px-3 py-1 uppercase">
          For Sale
        </span>
      </div>

      <div className="p-5 text-left">
        <p className="text-2xl font-semibold text-[#3a2e25] mb-1">{price}</p>
        <p className="text-[#3a2e25] font-medium text-sm mb-3">{address}</p>
        {beds && baths && size && (
          <div className="flex gap-3 text-[#5c4f3a] text-xs uppercase">
            <span>{beds} Beds</span>
            <span>|</span>
            <span>{baths} Baths</span>
            <span>|</span>
            <span>{size}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default HouseCard;
