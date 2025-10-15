import Link from "next/link";
import React from "react";
import { Facebook, Linkedin, Mail } from "lucide-react";
import { ownerDetails } from "@/lib/constants";

const Footer = ({ showFirstPart }: { showFirstPart?: boolean }) => {
  return (
    <footer>
      {showFirstPart && (
        <>
          {/* Top Section */}
          <div className="relative min-h-[40vh] bg-[url('/images/hero_image.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 md:px-10 py-20 text-center text-white">
              <h4 className="text-[#ccb091] tracking-wide font-medium text-sm sm:text-base mb-2">
                GET IN TOUCH
              </h4>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
                WORK WITH HARRY
              </h1>

              <p className="max-w-xl mx-auto">
                With the passion, dedication, and resources to help his clients
                reach their buying and selling goals. With you every step of the
                way.
              </p>

              <div>
                <Link
                  href="/contact"
                  className="border border-[#b19a55] mt-5 px-7 py-4 text-white bg-[#b19a55] hover:bg-transparent hover:text-[#b19a55] inline-block uppercase"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Base Footer */}
      <div className="bg-[#352c28] text-white py-20 px-6 sm:px-10 md:px-20 min-h-screen">
        <div className="container px-4 md:px-8 mx-auto">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-700 pb-10">
            {/* Logo + Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#ccb091] font-semibold text-3xl">
                <span>HARRY</span> <span className="text-white">OGIEVA</span>
              </div>
            </div>

            {/* Contact Info */}

            {ownerDetails.phone ||
              (ownerDetails.email && (
                <div>
                  <h3 className="font-semibold text-[#ccb091] uppercase mb-3 text-sm">
                    CONTACT
                  </h3>

                  {ownerDetails.phone && (
                    <p className="text-sm">{ownerDetails.phone}</p>
                  )}
                  {ownerDetails.email && (
                    <p className="text-sm underline">{ownerDetails.email}</p>
                  )}
                </div>
              ))}

            {/* Address */}
            {ownerDetails.address && (
              <div>
                <h3 className="font-semibold text-[#ccb091] uppercase mb-3 text-sm">
                  Address
                </h3>
                <p className="text-sm">{ownerDetails.address}</p>
              </div>
            )}
          </div>

          {/* Middle Row - Navigation + Social */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6">
            {/* Nav Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 text-sm uppercase tracking-wide">
              <Link href="/" className="hover:text-[#ccb091]">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#ccb091]">
                Meet Harry
              </Link>
              <Link href="/properties" className="hover:text-[#ccb091]">
                Properties
              </Link>
              <Link href="/testimonials" className="hover:text-[#ccb091]">
                Testimonials
              </Link>
              <Link href="/contact" className="hover:text-[#ccb091]">
                Contact
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="border border-[#ccb091] p-2 rounded-full hover:bg-[#ccb091] hover:text-[#352c28] transition"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="border border-[#ccb091] p-2 rounded-full hover:bg-[#ccb091] hover:text-[#352c28] transition"
              >
                <Mail className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="border border-[#ccb091] p-2 rounded-full hover:bg-[#ccb091] hover:text-[#352c28] transition"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bottom Disclaimer + Copyright */}
          <div className="mt-12 text-white space-y-4 text-center md:text-left text-basis">
            <p>
              All information is deemed reliable but not guaranteed and should
              be independently reviewed and verified.
            </p>

            <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex  flex-col gap-2 text-[#ccb091] text-basis">
                <span className="font-semibold">CleverCode Technologies</span>
                <span className="text-white">
                  Website designed and developed by{" "}
                  <Link href="/" className="underline hover:text-purple-500">
                    CleverCode Technologies
                  </Link>
                </span>
              </div>

              <p className="text-base">
                Copyright © {new Date().getFullYear()} |{" "}
                <Link href="/" className="underline hover:text-[#ccb091]">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
