"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "EXCLUSIVE PROPERTIES",
    img: "/images/hero_image.jpg",
  },
  {
    title: "SUCCESS STORIES",
    img: "/images/hero_image.jpg",
  },
  {
    title: "PROPERTY VALUATION",
    img: "/images/hero_image.jpg",
  },
];

const KnowledgeSection = () => {
  return (
    <section className="bg-white py-10 px-6 text-center">
      <div className="max-w-8xl mx-auto">
        <motion.h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase text-[#b19a55] mb-2">
          Harry Ogieva's
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-[2px] text-[#3a2e25] mb-4"
        >
          EXCEPTIONAL INDUSTRY KNOWLEDGE
        </motion.h2>

        <p className="text-[#5c4f3a] max-w-4xl mx-auto leading-relaxed text-[15px]">
          I am confident about the systems and tools I put into practice to
          provide the marketing and sales advantage you deserve. While working
          with me, you will receive exceptional, competent, and professional
          services as we work through the sale and/or selection and acquisition
          of your property.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative overflow-hidden group shadow-md cursor-pointer"
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

              {/* Text */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white transition-all duration-500">
                <motion.h3
                  initial={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  className="text-xl md:text-2xl tracking-widest font-semibold"
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
