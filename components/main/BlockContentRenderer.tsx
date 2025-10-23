"use client";

import React from "react";
import blockContentToReact from "@sanity/block-content-to-react";
import Image from "next/image";
import Link from "next/link";

interface MarkDef {
  _type: string;
  _key: string;
  [key: string]: unknown;
}

interface LinkMark extends MarkDef {
  _type: "link";
  href: string;
}

interface BlockContentChild {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
}

interface BlockContent {
  _key: string;
  _type: string;
  children: BlockContentChild[];
  markDefs: MarkDef[];
  style: string;
  level?: number;
  listItem?: string;
}

export type BlogPostType = {
  _id: string;
  title: string;
  author: string;
  content: BlockContent[];
  excerpt: string;
  mainImage: string;
  publishedAt: string;
  slug: { _type: string; current: string };
};

// Helper function to check if a mark is a link mark
const isLinkMark = (mark: MarkDef): mark is LinkMark => {
  return mark._type === "link" && "href" in mark;
};

// Helper: render spans with marks (including links)
const renderChildrenWithMarks = (node: BlockContent) => {
  return node.children.map((child) => {
    let textElement: React.ReactNode = child.text;

    if (child.marks && child.marks.length > 0) {
      child.marks.forEach((markKey) => {
        const mark = node.markDefs.find((def) => def._key === markKey);
        if (mark && isLinkMark(mark)) {
          textElement = (
            <Link
              key={markKey}
              href={mark.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b88b4a] hover:underline"
            >
              {textElement}
            </Link>
          );
        }
      });
    }

    return <React.Fragment key={child._key}>{textElement}</React.Fragment>;
  });
};

const serializers = {
  types: {
    image: ({ node }: { node: { asset: { url: string }; alt?: string } }) => (
      <div className="my-6">
        <Image
          src={node.asset.url}
          alt={node.alt || "Property Image"}
          className="object-cover w-full h-72 md:h-96 rounded-lg"
          width={800}
          height={600}
        />
      </div>
    ),

    block: ({ node }: { node: BlockContent }) => {
      const content = renderChildrenWithMarks(node);
      switch (node.style) {
        case "h1":
          return (
            <h1 className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-[#3a3225]">
              {content}
            </h1>
          );
        case "h2":
          return (
            <h2 className="text-2xl md:text-3xl font-semibold mt-6 mb-4 text-[#3a3225]">
              {content}
            </h2>
          );
        case "h3":
          return (
            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-4 text-[#3a3225]">
              {content}
            </h3>
          );
        case "h4":
          return (
            <h4 className="text-lg font-semibold mt-6 mb-4 text-[#3a3225]">
              {content}
            </h4>
          );
        default:
          return (
            <p className="text-sm md:text-base leading-relaxed mb-5 text-[#4a4336]">
              {content}
            </p>
          );
      }
    },

    listItem: ({ node }: { node: BlockContent }) => (
      <li className="text-sm md:text-base text-[#4a4336] mb-2">
        {renderChildrenWithMarks(node)}
      </li>
    ),

    ul: ({ node }: { node: BlockContent }) => (
      <ul className="list-disc pl-5 text-[#4a4336] text-sm md:text-base space-y-1">
        {node.children.map((child) => {
          const fullChild: BlockContent = {
            ...child,
            markDefs: [],
            style: "normal",
            children: [child],
          };
          return serializers.types.listItem({ node: fullChild });
        })}
      </ul>
    ),

    ol: ({ node }: { node: BlockContent }) => (
      <ol className="list-decimal pl-5 text-[#4a4336] text-sm md:text-base space-y-1">
        {node.children.map((child) => {
          const fullChild: BlockContent = {
            ...child,
            markDefs: [],
            style: "normal",
            children: [child],
          };
          return serializers.types.listItem({ node: fullChild });
        })}
      </ol>
    ),
  },
};

interface BlockContentRendererProps {
  blocks: BlockContent[];
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
