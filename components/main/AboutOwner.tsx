import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const AboutOwner = () => {
  return (
    <section className="bg-[#f7f3f0] text-gray-800 py-10">
      <div className="px-4 md:px-0 flex flex-col md:flex-row items-start gap-10 container xl:mx-auto">
        {/* Image */}

        <div className="md:w-1/2 w-full">
          <ScrollReveal>
            <Image
              src="/images/owner.jpg"
              width={2048}
              height={3069}
              alt="Harry Ogieva"
              className="w-full h-auto object-cover rounded-lg md:rounded-none shadow-lg"
            />
          </ScrollReveal>
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full space-y-2">
          <ScrollReveal direction="up" duration={0.5}>
            <h3 className="text-[#ccb091] font-semibold tracking-wide text-basis sm:text-lg uppercase">
              Get To Know
            </h3>
          </ScrollReveal>
          <ScrollReveal direction="up" duration={0.5}>
            <h2 className="text-3xl sm:text-6xl text-gray-900 uppercase">
              Harry Ogieva
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" duration={0.5}>
            <div className="space-y-6 mt-5 leading-relaxed text-gray-700">
              <p>
                I am passionate about helping individuals and families find
                their dream homes across Lagos, Abuja, Benin City, and beyond.
                These vibrant cities offer a unique blend of culture,
                opportunity, and lifestyle, and I&apos;m proud to be part of
                these thriving communities.
              </p>

              <p>
                My journey in real estate began with a passion for connecting
                people to the right properties. Over the years, I&apos;ve built
                a strong reputation for attention to detail, professionalism,
                and delivering results across both residential and commercial
                markets.
              </p>

              <p>
                With a wide network and commitment to excellence, I provide a
                seamless experience in buying, selling, and investing in real
                estate. I combine personalized service with modern tools and
                strategies to ensure every transaction is smooth and successful.
              </p>

              <p>
                As part of the esteemed Tenprocon and Gosa Property Limited
                team, I offer clients access to exclusive resources, global
                connections, and luxury market expertise. My permits cover
                Lagos, Abuja, and Benin City, and I continue to refine my skills
                to better serve my clients.
              </p>

              <p>
                Beyond real estate, I&apos;m actively involved in community and
                educational initiatives, contributing to regional growth and
                helping others achieve their dreams. When I&apos;m not assisting
                clients, I enjoy outdoor activities such as walking, jogging,
                and boating.
              </p>

              <p>
                Whether you&apos;re buying your first home or investing in
                luxury property, I&apos;m here to guide you every step of the
                way.
              </p>

              <div className="flex gap-3 item-center flex-col sm:flex-row">
                <Link
                  href="/contact"
                  className="border border-[#b19a55] px-4 py-4 text-[#b19a55] hover:bg-[#b19a55] hover:text-white sm:w-1/2 flex items-center justify-center uppercase"
                >
                  Let&apos;s Connect
                </Link>
                <Link
                  href="/about"
                  className="border border-[#b19a55] px-7 py-4 text-white bg-[#b19a55] hover:bg-transparent hover:text-[#b19a55] sm:w-1/2 flex items-center justify-center uppercase"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutOwner;
