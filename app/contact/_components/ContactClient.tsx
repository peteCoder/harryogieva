"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FaTelegramPlane,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

import { toast } from "sonner";
import { ownerDetails } from "@/lib/constants";
import ScrollReveal from "@/components/main/ScrollReveal";
import PageHero from "@/app/properties/_components/PageHero";

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>(); // Specify the type for the form data

  // Define the onSubmit function with the correct type
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form submitted:", data);

    try {
      toast.loading("Sending message...");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: "HarryOgieva.com Website Contact Form",
          message: data.message,
          phone: data.phone,
        }),
      });

      const result = await res.json();

      toast.dismiss();

      if (!res.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.dismiss();
      // Safely narrow the error type
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <main>
      <Navbar isDefaultBg />
      <div className=" mt-20"></div>
      <PageHero
        pageTitle="Contact Us"
        pageHeroBGImage="/images/hero_image.jpg"
      />
      <div className="bg-[#f9f4ed] min-h-screen flex flex-col">
        {/* ===== Map Section ===== */}

        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.54024258906!2d5.538651943359384!3d6.282045500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d7b046cb74eb%3A0x487d1527e77aa5bd!2sEgba%20community!5e0!3m2!1sen!2sng!4v1761295438622!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* ===== Contact Section ===== */}
        <section className="flex flex-col md:flex-row justify-center items-start gap-10 px-2 md:px-20 py-10 md:py-20">
          {/* Left Form */}
          <div className="bg-[#3b312b] text-white p-5 md:p-10 w-full md:w-1/2 max-w-lg shadow-lg">
            <ScrollReveal>
              <h2 className="text-center text-lg font-medium mb-6 tracking-wide">
                GET IN TOUCH
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full p-2 md:p-3 bg-transparent placeholder:text-sm placeholder:md:text-base border border-gray-500 focus:outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email",
                      },
                    })}
                    className="w-full p-2 md:p-3 bg-transparent placeholder:text-sm placeholder:md:text-base border border-gray-500 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="w-full p-2 md:p-3 bg-transparent placeholder:text-sm placeholder:md:text-base border border-gray-500 focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full p-2 md:p-3 bg-transparent placeholder:text-sm placeholder:md:text-base border border-gray-500 h-32 focus:outline-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <input type="checkbox" className="mt-1" />
                  <p>
                    By providing your contact information, you acknowledge and
                    agree to our{" "}
                    <a
                      href={"/privacy-policy"}
                      className="text-[#ccb091] underline cursor-pointer"
                    >
                      Privacy Policy
                    </a>{" "}
                    and consent to receive communications.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 border border-[#ccb091] text-[#ccb091] py-3 hover:bg-[#ccb091] hover:text-[#3b312b] transition"
                >
                  SUBMIT
                </button>
              </form>
            </ScrollReveal>
          </div>

          {/* Right Contact Details */}
          <div className="text-[#3b312b] w-full md:w-1/2 max-w-md">
            <ScrollReveal>
              <h3 className="text-lg font-medium mb-2 tracking-wide">
                CONTACT DETAILS
              </h3>
            </ScrollReveal>

            <hr className="border-gray-300 mb-6" />
            <ScrollReveal>
              <p className="font-semibold text-[#3b312b] mb-1">Harry Ogieva</p>
              <div className="mb-2">
                {ownerDetails.phone.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="mb-2 text-[#b79b6c] underline cursor-pointer">
                {ownerDetails.email}
              </p>
              <p className="mb-6">{ownerDetails.address}</p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex space-x-4">
                {ownerDetails.facebook && (
                  <a
                    href={ownerDetails.facebook}
                    className="w-9 h-9 border border-[#ccb091] rounded-full flex items-center justify-center hover:bg-[#ccb091] hover:text-[#3b312b]"
                    target="_blank"
                  >
                    <FaFacebook size={16} />
                  </a>
                )}
                {ownerDetails.linkedin && (
                  <a
                    href={ownerDetails.linkedin}
                    className="w-9 h-9 border border-[#ccb091] rounded-full flex items-center justify-center hover:bg-[#ccb091] hover:text-[#3b312b]"
                    target="_blank"
                  >
                    <FaLinkedin size={16} />
                  </a>
                )}

                {ownerDetails.instagram && (
                  <a
                    href={ownerDetails.instagram}
                    className="w-9 h-9 border border-[#ccb091] rounded-full flex items-center justify-center hover:bg-[#ccb091] hover:text-[#3b312b]"
                    target="_blank"
                  >
                    <FaInstagram size={16} />
                  </a>
                )}
                {ownerDetails.whatsapp && (
                  <a
                    href={ownerDetails.whatsapp}
                    className="w-9 h-9 border border-[#ccb091] rounded-full flex items-center justify-center hover:bg-[#ccb091] hover:text-[#3b312b]"
                    target="_blank"
                  >
                    <FaWhatsapp size={16} />
                  </a>
                )}
                {ownerDetails.telegram && (
                  <a
                    href={ownerDetails.telegram}
                    className="w-9 h-9 border border-[#ccb091] rounded-full flex items-center justify-center hover:bg-[#ccb091] hover:text-[#3b312b]"
                    target="_blank"
                  >
                    <FaTelegramPlane size={16} />
                  </a>
                )}
                {ownerDetails.twitter && (
                  <a
                    href={ownerDetails.twitter}
                    className="w-9 h-9 border border-[#ccb091] rounded-full flex items-center justify-center hover:bg-[#ccb091] hover:text-[#3b312b]"
                    target="_blank"
                  >
                    <FaTwitter size={16} />
                  </a>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ContactClient;
