"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import PageHero from "../properties/_components/PageHero";

const AboutPage = () => {
  return (
    <main className="bg-[#f7f3f0] text-[#3a3225]">
      <Navbar isDefaultBg />
      <div className="mt-20"></div>
      <PageHero
        pageTitle="Meet Harry"
        pageHeroBGImage="/images/hero_image.jpg"
      />
      {/* Top Section - Image + Info */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/owner.webp"
            alt="Harry Ogieva"
            width={500}
            height={600}
            className="object-cover shadow-lg"
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest">
            Harry Ogieva
          </h1>

          <div className="space-y-3 text-sm md:text-base">
            <div>
              <h4 className="font-semibold uppercase text-xs text-[#b19a55] mb-1">
                Primary Phone
              </h4>
              <p>(208) 255-8360</p>
            </div>

            <div>
              <h4 className="font-semibold uppercase text-xs text-[#b19a55] mb-1">
                Email
              </h4>
              <Link
                href="mailto:cindy.bond12@gmail.com"
                className="hover:underline"
              >
                harry.houses@gmail.com
              </Link>
            </div>

            <div>
              <h4 className="font-semibold uppercase text-xs text-[#b19a55] mb-1">
                Address
              </h4>
              <Link
                href="https://maps.google.com?q=414+Church+St.,+Suite+%23201,+Sandpoint,+ID+83864"
                target="_blank"
                className="hover:underline"
              >
                414 Church St., Suite #201, Sandpoint, ID 83864
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-[#b19a55] rounded-full hover:bg-[#b19a55] hover:text-white transition-all"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-[#b19a55] rounded-full hover:bg-[#b19a55] hover:text-white transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href="mailto:cindy.bond12@gmail.com"
              className="w-9 h-9 flex items-center justify-center border border-[#b19a55] rounded-full hover:bg-[#b19a55] hover:text-white transition-all"
            >
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Text Section */}
      <section className="max-w-5xl mx-auto px-5 md:px-10 pb-20">
        <h2 className="text-2xl md:text-3xl uppercase font-semibold tracking-widest mb-2">
          Get to Know Me
        </h2>
        <hr className="border-[#b19a55] mb-6 w-20" />
        <h3 className="uppercase text-[#b19a55] tracking-widest font-medium mb-6">
          Serving North Idaho and Eastern Washington
        </h3>

        <div className="space-y-5 text-[#4a4336] text-sm md:text-base leading-relaxed">
          <p>
            I take pride in introducing our beautiful, scenic area of the Inland
            Northwest, which encompasses North Idaho and the greater Spokane
            region, an area affording endless outdoor recreational opportunities
            on numerous lakes and rivers, significant access to national
            forests, world-class skiing, and more!
          </p>
          <p>
            Upon entering the real estate industry, I was co-owner of a
            residential building company (1983-2002). I received my real estate
            license in 1996, hit the ground running, and was awarded Rookie of
            the Year in 1996 at Prudential NW Realty in the Seattle area.
          </p>
          <p>
            I have been affiliated with Tomlinson Sotheby’s International Realty
            since 2000 as a Co-Owner (2004 - 2019) and Associate Broker (2000 -
            2023). During that time, I earned the achievement of #1 Top Producer
            during 2007 - 2012, and 2014 - 2022, and I led the market regionally
            in the sale of luxury properties.
          </p>
          <p>
            I am excited to be part of a new partnership with eXp Luxury,
            heading up the Bond Real Estate Group! The innovative luxury
            marketing utilizing the latest technology in our changing real
            estate environment through eXp Luxury is unsurpassed.
          </p>
          <p>
            I am confident about the systems and tools I put into practice to
            provide the marketing and sales advantage my clients deserve. I work
            diligently to provide exceptional, competent, and professional
            services as we work together through the sale and/or selection and
            acquisition of desired properties.
          </p>
          <p>
            My real estate licenses are active in both Idaho and Washington. I
            bring a wealth of experience and strong negotiating skills to every
            transaction, and I am confident you will be pleased with your choice
            to work with me.
          </p>
          <p>
            I am involved within the local community by supporting multiple
            charities and educational endeavors which are instrumental in
            supporting and enhancing the dynamic living experience we enjoy
            within this region.
          </p>
          <p>
            I have been involved within the local Real Estate community serving
            on the Multiple Listing Service Board of Directors (2007-2023).
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
