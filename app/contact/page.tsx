import type { Metadata, Viewport } from "next";
import React from "react";
import ContactClient from "./_components/ContactClient";

export const metadata: Metadata = {
  title: "Contact | Harry Ogieva Real Estate",
  description:
    "Get in touch with Harry Ogieva Real Estate for expert advice on buying, selling, or investing in properties across Nigeria.",
  keywords: [
    "contact Harry Ogieva",
    "real estate contact",
    "property consultant Nigeria",
    "estate agent Lagos",
  ],
  openGraph: {
    title: "Contact | Harry Ogieva Real Estate",
    description:
      "Reach out to Harry Ogieva for personalized property and investment guidance.",
    url: "https://www.harryogieva.com/contact",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Harry Ogieva Real Estate",
    description:
      "Contact Harry Ogieva Real Estate for expert property consultation in Nigeria.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#b19a55",
};

const ContactPage = () => {
  return <ContactClient />;
};

export default ContactPage;
