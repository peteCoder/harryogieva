import type { Metadata } from "next";
import { Spinnaker } from "next/font/google";
import "./globals.css";
import LiveChatAndWhatsapp from "@/components/main/LiveChatAndWhatsapp";

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

        <LiveChatAndWhatsapp />
      </body>
    </html>
  );
}
