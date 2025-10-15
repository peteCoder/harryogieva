"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialType } from "@/lib/types";

// Skeleton loader component
const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    <div className="w-32 h-6 bg-gray-300 rounded"></div> {/* Author skeleton */}
    <div className="w-full h-10 bg-gray-300 rounded"></div>{" "}
    {/* Testimonial content skeleton */}
    <div className="flex items-center gap-2">
      <div className="w-24 h-6 bg-gray-300 rounded"></div>{" "}
      {/* Button skeleton */}
    </div>
  </div>
);

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch testimonials with pagination
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`/api/testimonial?page=${currentPage}`); // Pass the current page
        const data = await response.json();
        setTestimonials(data.testimonials); // Set fetched testimonials
        setTotalPages(data.totalPages); // Set total pages
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchTestimonials();
  }, [currentPage]); // Fetch when the page changes

  const toggleReadMore = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Handle pagination
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setLoading(true); // Start loading when page is changing
    }
  };

  return (
    <main className="bg-[#f7f3f0] min-h-screen text-[#3a2e25]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[300px] flex items-center justify-center bg-[#eae4dc] text-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold uppercase tracking-wide">
            Client Testimonials
          </h1>
          <p className="mt-3 text-[#5c4f3a] text-sm md:text-base">
            Hear from our valued clients about their experience with Bond Real
            Estate Group
          </p>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="max-w-4xl mx-auto py-20 px-6 space-y-20">
        {loading ? (
          // Show skeletal loader while loading testimonials
          <>
            {[1, 2, 3].map((index) => (
              <div key={index} className="text-center">
                <SkeletonLoader />
              </div>
            ))}
          </>
        ) : (
          // Show actual testimonials after loading
          testimonials.map((t) => (
            <div key={t._id} className="text-center">
              {/* Testimonial Image */}
              {t.image && (
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full"
                />
              )}

              {/* Content */}
              <p className="text-sm md:text-base xl:text-lg leading-relaxed italic mb-5">
                {t.testimonial}
              </p>

              {/* Author */}
              <p className="mt-4 text-[#5c4f3a] text-sm font-medium uppercase">
                — {t.name}
              </p>
            </div>
          ))
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 pt-10 text-[#3a2e25]">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="p-2 rounded-full hover:bg-[#e0d7ca] transition"
            disabled={currentPage === 1}
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-3 text-sm">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`w-7 h-7 flex items-center justify-center rounded-full ${
                  currentPage === index + 1
                    ? "bg-[#b19a55] text-white"
                    : "hover:bg-[#e0d7ca] transition"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="p-2 rounded-full hover:bg-[#e0d7ca] transition"
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Testimonials;
