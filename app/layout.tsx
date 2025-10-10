import type { Metadata } from "next";
import { Spinnaker } from "next/font/google";
import "./globals.css";

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
      </body>
    </html>
  );
}
