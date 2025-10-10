"use client";

import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import Autoplay from "embla-carousel-autoplay";
import {
  Facebook,
  Mail,
  Twitter,
  Home,
  Ruler,
  Building,
  Banknote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PropertyDetails = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const bannerImages = [
    "/images/hero_image.jpg",
    "/images/hero-image-1.jpg",
    "/images/hero-image-2.jpg",
  ];

  return (
    <main className="bg-[#f7f3f0]">
      <Navbar isDefaultBg />
      {/* 🔹 Banner Carousel Section */}
      <section className="pt-20 px-2 md:px-5">
        <div className="relative h-[70vh] md:h-screen w-full overflow-hidden">
          <Carousel
            plugins={[plugin.current]}
            opts={{ align: "start", loop: true }}
            className="relative w-full h-full"
          >
            <CarouselContent>
              {bannerImages.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="relative h-[70vh] md:h-screen w-full"
                >
                  <Image
                    src={src}
                    alt={`property-banner-${index}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Bottom-left controls */}
            <div className="absolute bottom-8 left-8 flex space-x-4 z-10">
              <CarouselPrevious className="static bg-[#ccb091] text-white hover:bg-[#b19a55] w-10 h-10 rounded-full" />
              <CarouselNext className="static bg-[#ccb091] text-white hover:bg-[#b19a55] w-10 h-10 rounded-full" />
            </div>
          </Carousel>
        </div>

        {/* Title Section Below Carousel */}
        <div className="mt-20 mb-3 space-y-5 md:mt-30 text-center flex-col flex items-center">
          <h3 className="text-xl md:text-2xl lg:text-4xl">NGN2,695,000</h3>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl uppercase">
            294 Rincon Dr
          </h2>
          <div className="flex justify-center items-center gap-3 text-[#5c4f3a] text-xs sm:text-sm md:text-base uppercase">
            <span>3 Beds</span>
            <span>|</span>
            <span>4 Baths</span>
            <span>|</span>
            <span>2,700 Sq.Ft.</span>
          </div>

          <Link
            href={"/"}
            className="border border-[#b19a55] uppercase px-7 py-4 text-white bg-[#b19a55] hover:bg-transparent hover:text-[#b19a55] sm:w-fit flex items-center justify-center"
          >
            Inquire Now
          </Link>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-32 py-16 bg-[#f7f3f0] text-[#3a3225]">
        {/* Description */}
        <div className="border-t border-[#d9cbb5] pt-10">
          <h3 className="text-lg md:text-xl font-semibold tracking-widest uppercase text-[#3a3225] mb-4">
            Description
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-[#4a4336] max-w-5xl">
            Meticulously constructed and artfully nestled into the foothills
            below Schweitzer Mountain, this exceptional property offers a rare
            blend of luxury, comfort, and natural beauty. With sweeping views of
            the surrounding mountains and the sparkling lake beyond, this home
            is a true haven for those seeking serenity, space, and inspired
            design. Bathed in abundant sunshine and softened by gentle mountain
            breezes, the home welcomes each day with stunning sunrises and a
            chorus of native wildlife. This 7.93-acre property is dotted with
            huckleberry bushes and thoughtfully landscaped with deer-resistant
            shrubs and perennials, providing a low-maintenance yet vibrant
            outdoor living experience.
            <br />
            <br />
            Inside, an open floorplan showcases exquisite craftsmanship, from
            exposed cedar beams, soaring tongue-and-groove ceiling to wide
            plank, wood grain tile flooring. Floor-to-ceiling windows frame
            breathtaking views and flood the home with natural light, while
            radiant in-floor heating keeps every space warm and inviting. The
            full masonry gas fireplace, clad in real stone veneer, anchors the
            great room with timeless mountain elegance. The gourmet kitchen is a
            chef’s dream, featuring ivory quartz countertops, a contemporary
            stone backsplash, high-end appliances and ample storage.
            <br />
            <br />
            The primary suite is a true retreat, with private access to two
            outdoor spaces, including a secluded deck with hot tub overlooking
            tranquil Schweitzer Creek. The en-suite bath is filled with natural
            light and finished with quartz countertops and heated travertine
            floors. Additional living spaces include a beautifully appointed 700
            SF guest studio above the garage with a separate entrance, full
            kitchen, and bath — perfect for multi-generational living or guest
            accommodations. Two detached 320 SF custom studio spaces expand the
            property’s versatility. One features a kitchenette and bathroom,
            ideal for a home office, art studio, or guest quarters. The other is
            an off-grid escape overlooking the peaceful Selle Valley, offering
            unmatched privacy and inspiration.
            <br />
            <br />
            Whether you’re taking in the views or enjoying a peaceful stroll
            down to Schweitzer Creek, this one-of-a-kind mountain sanctuary
            offers not only a place to live but a way of life.
          </p>
        </div>

        {/* Share Property */}
        <div className="border-t border-[#d9cbb5] mt-14 pt-8">
          <h3 className="text-lg md:text-xl font-semibold tracking-widest uppercase mb-6">
            Share Property
          </h3>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-[#b19a55] flex items-center justify-center hover:bg-[#b19a55] hover:text-white transition-all"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-[#b19a55] flex items-center justify-center hover:bg-[#b19a55] hover:text-white transition-all"
            >
              <Twitter className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-[#b19a55] flex items-center justify-center hover:bg-[#b19a55] hover:text-white transition-all"
            >
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Location */}
        <div className="border-t border-[#d9cbb5] mt-14 pt-8">
          <h3 className="text-lg md:text-xl font-semibold tracking-widest uppercase mb-4">
            Location
          </h3>
          <p className="text-[#4a4336] text-base md:text-lg">
            294 Rincon Dr, Sandpoint, ID 83864
          </p>
        </div>

        {/* Status */}
        <div className="border-t border-[#d9cbb5] mt-14 pt-8">
          <h3 className="text-lg md:text-xl font-semibold tracking-widest uppercase mb-4">
            Status
          </h3>
          <p className="text-[#4a4336] text-base">For Sale</p>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-32 py-16 bg-[#f7f3f0] text-[#3a3225]">
        {/* Property Amenities Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-widest uppercase">
            Property Amenities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-sm md:text-base">
          {/* INTERIOR */}
          <div>
            <h3 className="uppercase tracking-widest font-semibold mb-3 border-b border-[#d9cbb5] pb-1">
              Interior
            </h3>
            <ul className="space-y-3 mt-3">
              <li>
                <span className="font-semibold">Fireplace:</span> Gas
              </li>
              <li>
                <span className="font-semibold">Appliances:</span> Gas Range,
                Gas Oven, Water Softener, Washer, Refrigerator, Microwave,
                Dryer, Disposal, Dishwasher
              </li>
              <li>
                <span className="font-semibold">Flooring:</span> Tile, Carpet
              </li>
              <li>
                <span className="font-semibold">Total Bedrooms:</span> 3
              </li>
              <li>
                <span className="font-semibold">Other Interior Features:</span>{" "}
                Smart Thermostat
              </li>
            </ul>
          </div>

          {/* AREA & LOT */}
          <div>
            <h3 className="uppercase tracking-widest font-semibold mb-3 border-b border-[#d9cbb5] pb-1">
              Area & Lot
            </h3>
            <ul className="space-y-3 mt-3">
              <li>
                <span className="font-semibold">Lot Area:</span> 7.93 Acres
              </li>
              <li>
                <span className="font-semibold">Living Area:</span> 2,700 Sq.Ft.
              </li>
              <li>
                <span className="font-semibold">MLS® ID:</span> 25-5367
              </li>
              <li>
                <span className="font-semibold">Year Built:</span> 2016
              </li>
              <li>
                <span className="font-semibold">School District:</span> Lk Pend
                Oreille - 84
              </li>
              <li>
                <span className="font-semibold">View Description:</span>{" "}
                Mountain(s), Territorial, Lake
              </li>
              <li>
                <span className="font-semibold">Type:</span> Residential
              </li>
              <li>
                <span className="font-semibold">Status:</span> For Sale
              </li>
            </ul>
          </div>

          {/* EXTERIOR */}
          <div>
            <h3 className="uppercase tracking-widest font-semibold mb-3 border-b border-[#d9cbb5] pb-1">
              Exterior
            </h3>
            <ul className="space-y-3 mt-3">
              <li>
                <span className="font-semibold">Heat Type:</span> Floor Furnace,
                Electric, Natural Gas, Propane, Forced Air
              </li>
              <li>
                <span className="font-semibold">Water Source:</span> Private,
                Well
              </li>
              <li>
                <span className="font-semibold">Sewer:</span> Septic Tank
              </li>
              <li>
                <span className="font-semibold">Other Exterior Features:</span>{" "}
                Fire Pit
              </li>
            </ul>
          </div>

          {/* FINANCE (spanning full width on small screens) */}
          <div className="lg:col-span-3 mt-10">
            <h3 className="uppercase tracking-widest font-semibold mb-3 border-b border-[#d9cbb5] pb-1">
              Finance
            </h3>
            <ul className="space-y-3 mt-3">
              <li>
                <span className="font-semibold">Sales Price:</span> $2,695,000
              </li>
              <li>
                <span className="font-semibold">Real Estate Tax:</span> $4,450
                yearly
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-32 py-16 bg-[#f7f3f0] text-[#3a3225]">
        {/* Map Location Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-widest uppercase">
            Map Location
          </h2>
        </div>
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.528960787077!2d-116.55063632342727!3d48.2765782712441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5361f2a55dc07e8d%3A0x7a5b06d13f17b90!2s414%20Church%20St%20%23201%2C%20Sandpoint%2C%20ID%2083864%2C%20USA!5e0!3m2!1sen!2sus!4v1696962429336!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="bg-[#3a3225] text-white py-16 px-5 md:px-10 lg:px-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
          {/* Agent Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/owner.webp" // <-- replace with your agent image path
              alt="Cindy Bond"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>

          {/* Agent Info */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide mb-6">
              Harry Bond
            </h2>

            <div className="grid sm:grid-cols-3 gap-6  pb-6">
              <div>
                <h4 className="text-[#b19a55] uppercase text-xs font-semibold mb-1 tracking-widest">
                  Title
                </h4>
                <p className="text-sm md:text-base">
                  Associate Broker | CRS | GRI
                </p>
              </div>

              <div>
                <h4 className="text-[#b19a55] uppercase text-xs font-semibold mb-1 tracking-widest">
                  Phone
                </h4>
                <p className="text-sm md:text-base border-b border-[#7a6f62] w-fit">
                  (208) 255-8360
                </p>
              </div>

              <div>
                <h4 className="text-[#b19a55] uppercase text-xs font-semibold mb-1 tracking-widest">
                  Email
                </h4>
                <p className="text-sm md:text-base border-b border-[#7a6f62] w-fit">
                  cindy.bond12@gmail.com
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="#"
                className="border border-[#b19a55] text-[#b19a55] hover:bg-[#b19a55] hover:text-[#3a3225] px-8 py-3 uppercase text-sm tracking-widest transition-all duration-300"
              >
                Contact Agent
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PropertyDetails;
