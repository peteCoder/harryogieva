import type { Metadata, Viewport } from "next";
import { Spinnaker } from "next/font/google";
import "./globals.css";
import LiveChatAndWhatsapp from "@/components/main/LiveChatAndWhatsapp";
import { Toaster } from "@/components/ui/sonner";

const spinnaker = Spinnaker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-spinnaker",
});

export const metadata: Metadata = {
  title: {
    default: "Harry Ogieva | Luxury Real Estate in Nigeria",
    template: "%s | Harry Ogieva Real Estate",
  },
  description:
    "Discover premium properties and investment opportunities across Nigeria with Harry Ogieva — your trusted real estate expert offering personalized property guidance, sales, and management.",
  keywords: [
    "Harry Ogieva",
    "real estate Nigeria",
    "luxury homes Lagos",
    "property agent Abuja",
    "buy house in Nigeria",
    "real estate investment",
    "property management",
    "Bond Real Estate Group",
    "land for sale Nigeria",
    "estate consultant",
  ],
  authors: [{ name: "Harry Ogieva" }],
  creator: "Harry Ogieva",
  publisher: "Harry Ogieva Real Estate",
  metadataBase: new URL("https://www.harryogieva.com"),
  openGraph: {
    title: "Harry Ogieva | Luxury Real Estate in Nigeria",
    description:
      "Connecting you to luxury homes, investment properties, and prime estates across Nigeria. Trusted real estate expertise from Harry Ogieva.",
    url: "https://www.harryogieva.com",
    siteName: "Harry Ogieva Real Estate",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.harryogieva.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harry Ogieva Real Estate - Luxury Homes and Properties in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harry Ogieva | Luxury Real Estate in Nigeria",
    description:
      "Find premium homes, estates, and property investments in Nigeria with Harry Ogieva.",
    images: ["https://www.harryogieva.com/og-image.jpg"],
    creator: "@HarryOgieva",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// themeColor moved to viewport
export const viewport: Viewport = {
  themeColor: "#b19a55",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spinnaker.variable} font-spinnaker antialiased`}>
        {children}

        {/* Customized Sonner Toaster */}
        <Toaster
          richColors
          position="top-center"
          toastOptions={{
            style: {
              backgroundColor: "#b19a55",
              color: "#ffffff",
              borderRadius: "8px",
              padding: "12px 16px",
              fontSize: "0.95rem",
              fontWeight: 500,
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            },
            className:
              "border-none text-white bg-[#b19a55] shadow-md font-medium",
          }}
        />

        <LiveChatAndWhatsapp />
      </body>
    </html>
  );
}
