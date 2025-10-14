// BlockContentRenderer.tsx
"use client";

import React from "react";
import blockContentToReact from "@sanity/block-content-to-react"; // Sanity block content to React
import Image from "next/image";

// Define custom serializers for specific block types like images, headings, and lists

const serializers = {
  types: {
    // Image block type
    image: ({ node }: { node: any }) => (
      <div className="my-6">
        <Image
          src={node.asset.url}
          alt={node.alt || "Property Image"}
          className="object-cover w-full h-72 md:h-96 rounded-lg"
        />
      </div>
    ),
    // Heading block type (for H1, H2, H3, H4)
    block: ({ node }: { node: any }) => {
      switch (node.style) {
        case "h1":
          return (
            <h1 className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-[#3a3225]">
              {node.children[0].text}
            </h1>
          );
        case "h2":
          return (
            <h2 className="text-2xl md:text-3xl font-semibold mt-6 mb-4 text-[#3a3225]">
              {node.children[0].text}
            </h2>
          );
        case "h3":
          return (
            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-4 text-[#3a3225]">
              {node.children[0].text}
            </h3>
          );
        case "h4":
          return (
            <h4 className="text-lg font-semibold mt-6 mb-4 text-[#3a3225]">
              {node.children[0].text}
            </h4>
          );
        default:
          return (
            <p className="text-sm md:text-base leading-relaxed mb-5 text-[#4a4336]">
              {node.children[0].text}
            </p>
          );
      }
    },
    // Handle list items (ordered/unordered)
    listItem: ({ node }: { node: any }) => (
      <li className="text-sm md:text-base text-[#4a4336] mb-2">
        {node.children[0].text}
      </li>
    ),
    // Handle unordered list
    ul: ({ node }: { node: any }) => (
      <ul className="list-disc pl-5 text-[#4a4336] text-sm md:text-base">
        {node.children.map((child: any) =>
          serializers.types.listItem({ node: child })
        )}
      </ul>
    ),
    // Handle ordered list
    ol: ({ node }: { node: any }) => (
      <ol className="list-decimal pl-5 text-[#4a4336] text-sm md:text-base">
        {node.children.map((child: any) =>
          serializers.types.listItem({ node: child })
        )}
      </ol>
    ),
  },
};

interface BlockContentRendererProps {
  blocks: any[]; // Block content array from Sanity
}

const BlockContentRenderer: React.FC<BlockContentRendererProps> = ({
  blocks,
}) => {
  return (
    <div className="space-y-6">
      {blockContentToReact({ blocks, serializers })}
    </div>
  );
};

export default BlockContentRenderer;
