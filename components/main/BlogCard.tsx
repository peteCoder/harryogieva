"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  image: string;
  title: string;
  author: string;
  date: string;
}

const BlogCard = ({ id, image, title, author, date }: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${id}`}
      className="bg-transparent block overflow-hidden border group cursor-pointer transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative">
        <div className="w-full h-[250px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="p-5 text-left">
        <p className="text-xl lg:text-2xl font-semibold text-[#3a2e25] mb-4">
          {title}
        </p>
        <p className="text-[#5c4f3a] text-sm mb-1">
          {author} | {date}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
