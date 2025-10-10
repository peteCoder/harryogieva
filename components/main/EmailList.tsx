"use client";

import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  consent: boolean;
}

const EmailList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <section className="bg-[#fdf9f3] py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* HEADINGS */}
        <h3 className="text-lg sm:text-xl md:text-2xl uppercase font-light tracking-[4px] text-[#b19a55] mb-2">
          Get Exclusive Updates
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold uppercase tracking-[3px] text-[#3a2e25] mb-6">
          Receive Listings in Your Inbox
        </h2>

        <p className="text-[#5c4f3a] max-w-3xl mx-auto leading-relaxed text-[15px] mb-10">
          Are you interested in buying a home? Look no further than working with
          a real estate expert.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:flex-row items-start justify-center gap-4 max-w-3xl mx-auto"
        >
          {/* NAME INPUT */}
          <div className="w-full md:w-1/3 flex flex-col text-left">
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Name"
              className={`border ${
                errors.name ? "border-red-500" : "border-[#b19a55]"
              } px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-[#b19a55] placeholder:text-gray-500`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* EMAIL INPUT */}
          <div className="w-full md:w-1/3 flex flex-col text-left">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
              type="email"
              placeholder="Email"
              className={`border ${
                errors.email ? "border-red-500" : "border-[#b19a55]"
              } px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-[#b19a55] placeholder:text-gray-500`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <div className="w-full md:w-auto mt-2 md:mt-0">
            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-[#b19a55] text-[#3a2e25] bg-transparent hover:bg-[#b19a55] hover:text-white uppercase px-8 py-3 w-full md:w-auto transition-all duration-300"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {/* CONSENT CHECKBOX */}
        <div className="mt-6 flex items-start justify-center text-left">
          <input
            type="checkbox"
            {...register("consent", { required: true })}
            className="mr-2 mt-1"
          />
          <p className="text-xs text-[#3a2e25] max-w-2xl leading-relaxed">
            By providing your contact information, you acknowledge and agree to
            our{" "}
            <a
              href="/privacy-policy"
              className="underline text-[#b19a55] hover:text-[#3a2e25]"
            >
              Privacy Policy
            </a>{" "}
            and consent to receiving marketing communications, including through
            automated calls, texts, and emails, some of which may use artificial
            or prerecorded voices. You may opt out at any time. Message and data
            rates may apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailList;
