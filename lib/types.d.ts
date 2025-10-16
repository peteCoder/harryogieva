interface MarkDef {
  _type: string;
  _key: string;
  [key: string]: unknown;
}

export type PropertyType = {
  _id: string;
  createdAt: string;
  excerpt: string;
  forSale: boolean;
  googleMapIframe: string;
  images: string[];
  isFeatured: boolean;
  location: string;
  name: string;
  propertyDescription: {
    _key: string;
    _type: string;
    children: Array<{
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }>;
    markDefs: MarkDef[];
    style: string;
    level?: number;
    listItem?: string;
  }[];
  propertyType: string;
  youTubeIframe: string;
};

export type BlogPostType = {
  _id: string;
  title: string;
  author: string;
  content: Array<{
    _key: string;
    _type: string;
    children: Array<{
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }>;
    markDefs: MarkDef[];
    style: string;
    level?: number;
    listItem?: string;
  }>;
  excerpt: string;
  mainImage: string;
  publishedAt: string;
  slug: { _type: string; current: string };
};

export type TestimonialType = {
  _id: string;
  createdAt: string;
  image: string | null;
  name: string;
  testimonial: string;
};
