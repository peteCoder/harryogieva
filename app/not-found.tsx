"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const NotFoundPage = () => {
  return (
    <main className="bg-[#f7f3f0] min-h-screen text-[#3a2e25] flex flex-col">
      <Navbar isDefaultBg />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6 pt-20">
        <div className="space-y-6">
          <h1 className="text-[100px] md:text-[140px] font-bold leading-none text-[#b19a55]">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Oops! Page Not Found
          </h2>
          <p className="text-[#4a4336] max-w-md mx-auto text-sm md:text-base">
            It seems the page you're looking for doesn&apos;t exist or has been
            moved. Let&apos;s help you find your way back home.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-block bg-[#b19a55] text-white px-6 py-3 rounded-full hover:text-[#b19a55] border border-[#a08b4b] font-medium hover:bg-white transition-colors duration-300"
            >
              Back to Homepage
            </Link>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-2 mb-10 opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 mx-auto text-[#b19a55]"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12H3m0 0l6 6m-6-6l6-6"
            />
          </svg>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NotFoundPage;
