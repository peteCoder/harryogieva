"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero_image.jpg"
        alt="Luxury Real Estate View"
        fill
        priority
        className="object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[#b19a55] tracking-widest text-2xl md:text-3xl lg:text-4xl font-semibold uppercase mb-3"
        >
          I am
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 uppercase"
        >
          Harry Ogieva
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-[900px] mx-auto"
        >
          And if you are looking to buy or sell real estate in Lagos, Abuja,
          Benin City and surrounding areas, I can help you.
        </motion.p>

        <motion.a
          href="/properties"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#b19a55] rounded-full text-white px-8 py-3 text-sm md:text-base font-semibold hover:bg-white hover:text-[#a68d4e] transition-all"
        >
          View Properties
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
