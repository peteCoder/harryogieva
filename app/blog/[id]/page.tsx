import React from "react";
import Image from "next/image";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Facebook, Twitter, X, Mail } from "lucide-react";
import RecentBlogPosts from "@/components/main/RecentBlogPosts";

const BlogDetails = () => {
  return (
    <main className="bg-[#fff]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
        <Image
          src="/images/hero-image-1.jpg" // Replace with your image path
          alt="Best ROI Home Improvements"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-5">
          <h1 className="text-3xl md:text-5xl font-semibold uppercase mb-2">
            Best ROI Home Improvements For Your Home
          </h1>
          <p className="text-sm md:text-base">Cindy Bond | June 13, 2024</p>

          {/* Share Icons */}
          <div className="flex items-center gap-3 mt-6">
            <span className="uppercase text-xs tracking-[2px]">Share</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[#b19a55] transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[#b19a55] transition"
              >
                <X size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[#b19a55] transition"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-5xl mx-auto py-16 px-6 md:px-2 text-[#3a2e25]">
        <p className="text-sm md:text-base xl:text-lg leading-relaxed mb-8">
          For homeowners looking to enhance their living space or increase the
          market value of their property,{" "}
          <a className="underline hover:text-[#ccb091]" href="/">
            selecting the right home improvements
          </a>{" "}
          is crucial. While many projects can make a house more comfortable or
          aesthetically pleasing, not all contribute equally to its resale
          value. Understanding which renovations yield the best return on
          investment (ROI) can help homeowners make informed decisions that
          balance personal enjoyment with financial prudence. This guide delves
          into the home improvements that offer the best ROI, providing
          practical insights for those planning to remodel their homes.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase mb-4">
          Minor Kitchen Remodel
        </h2>
        <p className="text-sm md:text-base xl:text-lg mb-10 leading-relaxed">
          A kitchen remodel consistently ranks high in terms of ROI. However,
          it's the scale of the remodel that often determines the return. Minor
          kitchen renovations, such as updating cabinets with modern hardware,
          replacing old appliances with energy-efficient models, resurfacing
          countertops, and installing new flooring or backsplashes, can
          rejuvenate the space without a massive outlay. These updates can
          return more than 80% of your investment, according to national
          remodeling statistics, making them a wise choice for those seeking a
          balance between impact and expense.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase mb-4">
          Bathroom Renovation
        </h2>
        <p className="text-sm md:text-base xl:text-lg mb-10 leading-relaxed">
          Bathrooms are another critical area where renovations can
          significantly impact a home's value. Updating an outdated bathroom
          with modern fixtures, efficient toilets, and contemporary tiling can
          transform the space and appeal to contemporary buyers. Well-executed
          bathroom renovations can recoup around 70% of their costs at resale.
          More extensive renovations, such as expanding the space or adding
          double sinks, can also increase a home's marketability and usability.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase mb-4">
          Energy Efficiency Enhancements
        </h2>
        <p className="text-sm md:text-base xl:text-lg mb-10 leading-relaxed">
          As energy costs rise and environmental concerns grow, energy-efficient
          home improvements have become increasingly desirable. Replacing old
          windows with energy-efficient alternatives not only reduces heating
          and cooling costs but also improves comfort and the home's overall
          aesthetic. Similarly, upgrading insulation and HVAC systems to more
          efficient versions can offer significant returns, both in terms of
          energy savings and increased home value.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase mb-4">
          Adding Deck or Patio Space
        </h2>
        <p className="text-sm md:text-base xl:text-lg mb-10 leading-relaxed">
          Outdoor living areas have become particularly valuable in today's real
          estate market. Adding a deck or patio can extend the livable space of
          a home and provide an attractive feature for potential buyers. The ROI
          for deck additions can vary but often hovers around 65–75%, depending
          on the materials used and the integration of the design with the rest
          of the property.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase mb-4">
          Entry Door and Garage Door Replacement
        </h2>
        <p className="text-sm md:text-base xl:text-lg mb-10 leading-relaxed">
          First impressions matter in real estate. Replacing the front entry
          door with a high-quality, attractive option can instantly boost curb
          appeal and security. Similarly, updating or replacing a garage door
          with a more durable and aesthetically pleasing model can transform the
          look of a home’s exterior. These improvements are not only
          cost-effective but also among the top for ROI, often recouping nearly
          their entire cost.
        </p>
      </section>

      <RecentBlogPosts />

      <Footer />
      {/*  */}
    </main>
  );
};

export default BlogDetails;
