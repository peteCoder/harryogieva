import type { Metadata } from "next";
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
  title: "",
  description: "",
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

        {/* 🎨 Customized Sonner Toaster */}
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
