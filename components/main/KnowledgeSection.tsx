"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "EXCLUSIVE PROPERTIES",
    img: "/images/img1.jpg",
  },
  {
    title: "SUCCESS STORIES",
    img: "/images/img4.jpg",
  },
  {
    title: "PROPERTY VALUATION",
    img: "/images/img3.jpg",
  },
];

const KnowledgeSection = () => {
  return (
    <section className="bg-white py-10 px-6 text-center">
      <div className="max-w-8xl mx-auto">
        <motion.h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase text-[#b19a55] mb-2">
          Discover with Harry Ogieva
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-[2px] text-[#3a2e25] mb-4"
        >
          UNMATCHED EXPERTISE IN REAL ESTATE
        </motion.h2>

        <p className="text-[#5c4f3a] max-w-4xl mx-auto leading-relaxed text-[15px]">
          Looking to buy or sell? With my deep understanding of the real estate
          landscape across Lagos, Abuja, Benin City, and beyond, I offer you
          access to properties that align with your goals. Together, we will
          navigate the market with confidence, ensuring you make informed,
          strategic decisions that lead to success.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative overflow-hidden group shadow-md"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={500}
                height={500}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#b19a55]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-[#000]/60 opacity-100 transition-opacity duration-500"></div>

              {/* Text */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white transition-all duration-500">
                <motion.h3
                  initial={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  className="text-xl md:text-2xl tracking-widest font-semibold  text-shadow-accent-foreground"
                >
                  {card.title}
                </motion.h3>

                <span className="mt-2 text-5xl font-light tracking-widest text-[#ccb091] opacity-0 group-hover:opacity-100">
                  HARRY OGIEVA
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
