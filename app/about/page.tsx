"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import PageHero from "../properties/_components/PageHero";

import { ownerDetails } from "@/lib/constants";

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
            src="/images/owner.jpg"
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
              <p>{ownerDetails.phone}</p>
            </div>

            <div>
              <h4 className="font-semibold uppercase text-xs text-[#b19a55] mb-1">
                Email
              </h4>
              <Link
                href={`mailto:${ownerDetails.email}`}
                className="hover:underline"
              >
                {ownerDetails.email}
              </Link>
            </div>

            <div>
              <h4 className="font-semibold uppercase text-xs text-[#b19a55] mb-1">
                Address
              </h4>
              <div className="hover:underline">{ownerDetails.address}</div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <Link
              href={ownerDetails.facebook}
              className="w-9 h-9 flex items-center justify-center border border-[#b19a55] rounded-full hover:bg-[#b19a55] hover:text-white transition-all"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              href={ownerDetails.linkedin}
              className="w-9 h-9 flex items-center justify-center border border-[#b19a55] rounded-full hover:bg-[#b19a55] hover:text-white transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href={`mailto:${ownerDetails.email}`}
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
          Serving Lagos, Abuja, Benin City, and Beyond
        </h3>

        <div className="space-y-5 text-[#4a4336] text-sm md:text-base leading-relaxed">
          <p>
            I take immense pride in helping individuals and families find their
            ideal homes in the vibrant cities of Lagos, Abuja, Benin City, and
            the surrounding regions. These areas offer a unique blend of
            culture, opportunity, and comfort, and I am honored to be part of
            this community.
          </p>
          <p>
            My journey into real estate began with my passion for connecting
            people with the right properties. After obtaining my license, I
            quickly grew to be a trusted advisor in the industry. With years of
            experience in both residential and commercial real estate, I&apos;ve
            earned a reputation for my attention to detail and commitment to
            delivering results.
          </p>
          <p>
            Over the years, I&apos;ve worked tirelessly to stay ahead of market
            trends, which has allowed me to guide clients through the
            complexities of real estate transactions with ease. I&apos;m proud
            to have achieved significant milestones in my career, including
            multiple awards for excellence and consistent top producer rankings.
          </p>
          <p>
            With an extensive network and an unwavering dedication to my
            clients, I offer a comprehensive approach to buying, selling, and
            investing in real estate. I pride myself on providing personalized
            services, leveraging the latest tools and technologies, and making
            each transaction smooth and seamless.
          </p>
          <p>
            I&apos;m excited to now be part of the prestigious team at eXp
            Realty, where I continue to expand my reach and offer unmatched
            services in the luxury real estate market. Through this partnership,
            I provide my clients access to a vast array of resources, from
            cutting-edge marketing tools to global connections.
          </p>
          <p>
            My licenses are active in Lagos, Abuja, and Benin City, and I am
            constantly working to improve my knowledge and skills to better
            serve my clients. I work diligently to ensure that every transaction
            is not only successful but also a positive experience for everyone
            involved.
          </p>
          <p>
            Outside of real estate, I am deeply involved in local charity work,
            supporting educational programs and community-building initiatives.
            I am passionate about contributing to the region&apos;s growth and
            helping others achieve their dreams, both in life and in property
            ownership.
          </p>
          <p>
            Additionally, I have served on various industry boards, including
            the Real Estate Board of Nigeria, where I&apos;ve contributed to
            shaping industry standards and fostering growth.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
