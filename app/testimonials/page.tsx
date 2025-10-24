import type { Metadata, Viewport } from "next";
import TestimonialsClient from "./_components/TestimonialsClient";

export const metadata: Metadata = {
  title: "Client Testimonials | Harry Ogieva Real Estate",
  description:
    "Hear from clients who trusted Harry Ogieva Real Estate — read authentic testimonials and experiences from satisfied property owners and investors.",
  keywords: [
    "Harry Ogieva testimonials",
    "real estate reviews Nigeria",
    "client feedback Harry Ogieva",
    "property investor experiences",
  ],
  openGraph: {
    title: "Client Testimonials | Harry Ogieva Real Estate",
    description:
      "Discover what clients say about their real estate experience with Harry Ogieva.",
    url: "https://www.harryogieva.com/testimonials",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | Harry Ogieva Real Estate",
    description:
      "See what happy clients say about working with Harry Ogieva Real Estate.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#b19a55",
};

const Testimonials = () => {
  return <TestimonialsClient />;
};

export default Testimonials;
