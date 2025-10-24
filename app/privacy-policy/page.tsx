import React from "react";
import PrivacyPolicyClient from "./_components/PrivacyPolicyClient";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Harry Ogieva Real Estate",
  description:
    "Learn how Harry Ogieva Real Estate collects, uses, and protects your personal information in compliance with privacy standards.",
  keywords: [
    "privacy policy",
    "data protection Nigeria",
    "real estate privacy",
    "Harry Ogieva privacy policy",
  ],
  openGraph: {
    title: "Privacy Policy | Harry Ogieva Real Estate",
    description:
      "Understand our commitment to protecting your data and maintaining your trust.",
    url: "https://www.harryogieva.com/privacy-policy",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Harry Ogieva Real Estate",
    description:
      "Your privacy matters — read how Harry Ogieva Real Estate safeguards your information.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#b19a55",
};

const PrivacyPolicy = () => {
  return <PrivacyPolicyClient />;
};

export default PrivacyPolicy;
