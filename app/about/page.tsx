"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import {
  FaTelegramPlane,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaMailBulk,
} from "react-icons/fa";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import PageHero from "../properties/_components/PageHero";

import { ownerDetails } from "@/lib/constants";
import ScrollReveal from "@/components/main/ScrollReveal";

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
          <ScrollReveal>
            <Image
              src="/images/owner.jpg"
              alt="Harry Ogieva"
              width={500}
              height={600}
              className="object-cover shadow-lg"
            />
          </ScrollReveal>
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest">
              Harry Ogieva
            </h1>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-3 text-sm md:text-base">
              <div>
                <h4 className="font-semibold uppercase text-lg text-[#b19a55] mb-1">
                  Primary Phone
                </h4>
                <p className="flex flex-col">
                  {ownerDetails.phone.map((p, i) => (
                    <span key={i}>{p}</span>
                  ))}
                </p>
              </div>

              <div>
                <h4 className="font-semibold uppercase text-lg text-[#b19a55] mb-1">
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
                <h4 className="font-semibold uppercase text-lg text-[#b19a55] mb-1">
                  Address
                </h4>
                <div className="hover:underline">{ownerDetails.address}</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Socials */}
          <ScrollReveal>
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              {ownerDetails.facebook && (
                <Link
                  href={ownerDetails.facebook}
                  className="w-9 h-9 flex items-center justify-center border border-[#b19a55] rounded-full hover:bg-[#b19a55] hover:text-white transition-all"
                >
                  <FaFacebook className="w-4 h-4" />
                </Link>
              )}

              {ownerDetails.linkedin && (
                <Link
                  href={ownerDetails.linkedin}
                  className="w-9 h-9 flex items-center justify-center border border-[#b19a55] rounded-full hover:bg-[#b19a55] hover:text-white transition-all"
                >
                  <FaLinkedin className="w-4 h-4" />
                </Link>
              )}

              {ownerDetails.instagram && (
                <Link
                  href={`${ownerDetails.instagram}`}
                  className="w-9 h-9 flex items-center justify-center border border-[#b19a55] rounded-full hover:bg-[#b19a55] hover:text-white transition-all"
                >
                  <FaInstagram className="w-4 h-4" />
                </Link>
              )}
              {ownerDetails.email && (
                <Link
                  href={`mailto:${ownerDetails.email}`}
                  className="w-9 h-9 flex items-center justify-center border border-[#b19a55] rounded-full hover:bg-[#b19a55] hover:text-white transition-all"
                >
                  <FaMailBulk className="w-4 h-4" />
                </Link>
              )}
              {ownerDetails.telegram && (
                <Link
                  href={`${ownerDetails.telegram}`}
                  className="w-9 h-9 flex items-center justify-center border border-[#b19a55] rounded-full hover:bg-[#b19a55] hover:text-white transition-all"
                >
                  <FaTelegramPlane className="w-4 h-4" />
                </Link>
              )}
              {ownerDetails.twitter && (
                <Link
                  href={`${ownerDetails.twitter}`}
                  className="w-9 h-9 flex items-center justify-center border border-[#b19a55] rounded-full hover:bg-[#b19a55] hover:text-white transition-all"
                >
                  <FaTwitter className="w-4 h-4" />
                </Link>
              )}
              {ownerDetails.whatsapp && (
                <Link
                  href={`${ownerDetails.whatsapp}`}
                  className="w-9 h-9 flex items-center justify-center border border-[#b19a55] rounded-full hover:bg-[#b19a55] hover:text-white transition-all"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </Link>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Text Section */}
      <section className="max-w-5xl mx-auto px-5 md:px-10 pb-20">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl uppercase font-semibold tracking-widest mb-2">
            Get to Know Me
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <hr className="border-[#b19a55] mb-6 w-20" />
          <h3 className="uppercase text-[#b19a55] tracking-widest font-medium mb-6">
            Serving Lagos, Abuja, Benin City, and Beyond
          </h3>
        </ScrollReveal>

        <div className="space-y-5 text-[#4a4336] text-sm md:text-base leading-relaxed">
          <ScrollReveal>
            <p>
              I am delighted to help individuals and families find their
              sought-after homes in the vibrant cities of Lagos, Abuja, Benin
              City, and the surrounding areas. These areas offer a distinctive
              mix of belief, opportunity, and leisure, and I hold great respect
              for being a part of this community.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              My experience in real estate began with my enthusiasm for
              connecting people with the right properties. After receiving my
              permit, I quickly became a trusted consultant in the industry.
              With years of experience in both residential and commercial real
              estate, I have earned a reputation for my attention to detail and
              commitment to delivering results.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              Over the years, I have worked tirelessly to stay ahead of market
              trends, allowing me to guide clients smoothly through the
              complexities of real estate transactions. I am proud of the
              remarkable achievements I have accomplished in my career.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              With a substantial network and unwavering dedication to my
              clients, I offer a comprehensive approach to buying, selling, and
              investing in real estate. I pride myself on providing
              individualized services, utilizing the latest tools and
              technologies, and ensuring each transaction is smooth and
              seamless.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              I am excited to now be part of the esteemed team at Tenprocon and
              Gosa Property Limited, where I continue to expand my reach and
              provide unparalleled services to the luxury real estate market.
              Through this partnership, I offer my clients access to a wide
              range of resources—from cutting-edge marketing tools to global
              connections.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              My permits are active in Lagos, Abuja, and Benin City, and I am
              continuously working to improve my knowledge and skills to better
              serve my clients. I work diligently to ensure that each
              transaction is not only successful but also a positive experience
              for everyone involved.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              In addition to real estate, I am deeply involved in local
              educational programs and community-building initiatives. I am
              passionate about contributing to the development of the region and
              helping others achieve their dreams—both in life and in property
              ownership.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              When I am not helping clients find their ideal home, you can find
              me enjoying outdoor activities such as walking, jogging, and
              boating. My love for adventure, combined with a deep commitment to
              my clients&apos; success, has made me a leader in the real estate
              field.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              Whether you are buying your first home, investing in luxury
              property, or seeking expert advice on the real estate market, I am
              here to guide you every step of the way.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
