"use client";

import React from "react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { ownerDetails } from "@/lib/constants";
import ScrollReveal from "@/components/main/ScrollReveal";

const PrivacyPolicy = () => {
  return (
    <main className="bg-[#f7f3f0] min-h-screen text-[#3a2e25]">
      <Navbar isDefaultBg />

      {/* HERO SECTION */}
      <section className="relative w-full h-[300px] flex items-center justify-center bg-[#eae4dc] text-center">
        <ScrollReveal>
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold uppercase tracking-wide">
              Privacy Policy
            </h1>
            <p className="mt-3 text-[#5c4f3a] text-sm md:text-base">
              Your trust is our priority. Learn how we collect, use, and protect
              your information.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* POLICY SECTION */}
      <section className="max-w-4xl mx-auto py-20 px-6 space-y-10">
        <ScrollReveal>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#3a2e25]">
              1. Introduction
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#4a4336]">
              Welcome to <strong>Harry's Real Estate Listings</strong>. We value
              your privacy and are committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, and
              safeguard your data when you visit our website, make inquiries, or
              engage our real estate services.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#3a2e25]">
              2. Information We Collect
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#4a4336]">
              We may collect personal information such as your name, email
              address, phone number, and property preferences when you fill out
              forms, subscribe to our updates, or contact us. We may also
              collect non-personal data such as your browser type, IP address,
              and device information for analytics and site improvement.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#3a2e25]">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-sm md:text-base leading-relaxed text-[#4a4336] space-y-2">
              <li>
                To respond to your inquiries and provide requested services.
              </li>
              <li>
                To send updates, property listings, or promotional materials.
              </li>
              <li>
                To enhance your browsing experience and improve our services.
              </li>
              <li>To comply with legal and regulatory requirements.</li>
            </ul>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#3a2e25]">
              4. Sharing of Information
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#4a4336]">
              We do not sell, rent, or trade your personal information. We may
              share data only with trusted partners or service providers who
              help us deliver our services, under strict confidentiality
              agreements. We may also disclose information when required by law
              or to protect our legal rights.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#3a2e25]">
              5. Data Security
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#4a4336]">
              We employ appropriate security measures to safeguard your personal
              data against unauthorized access, alteration, or destruction.
              While we strive to protect your information, no online system is
              100% secure, and we encourage you to take precautions when sharing
              data online.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#3a2e25]">
              6. Your Rights
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#4a4336]">
              You have the right to access, correct, or request deletion of your
              personal data. You can also opt out of receiving promotional
              emails at any time by clicking “Unsubscribe” in our communications
              or contacting us directly.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#3a2e25]">
              7. Cookies & Analytics
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#4a4336]">
              Our website uses cookies to personalize your experience and
              analyze site traffic. You can disable cookies in your browser
              settings, but doing so may affect certain website functionalities.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#3a2e25]">
              8. Updates to This Policy
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#4a4336]">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or for legal reasons. Any revisions will be
              posted on this page with an updated effective date.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#3a2e25]">
              9. Contact Us
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#4a4336]">
              If you have questions about this Privacy Policy or wish to
              exercise your data rights, please contact us at:
            </p>

            <div className="text-sm md:text-base text-[#4a4336]">
              <div className="text-2xl font-bold ">Email:</div>{" "}
              {ownerDetails.email} <br />
              <div className="text-2xl font-bold">Phone:</div>{" "}
              {ownerDetails.phone.map((p, i) => {
                return <p key={i}>{p}</p>;
              })}
              <div className="text-2xl font-bold">Office:</div>{" "}
              {ownerDetails.address}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
