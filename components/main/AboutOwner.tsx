import Image from "next/image";
import Link from "next/link";

const AboutOwner = () => {
  return (
    <section className="bg-[#f7f3f0] text-gray-800 py-10">
      <div className="px-4 md:px-0 flex flex-col md:flex-row items-start gap-10 container xl:mx-auto">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/images/owner.jpg"
            width={2048}
            height={3069}
            alt="Harry Ogieva"
            className="w-full h-auto object-cover rounded-lg md:rounded-none shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full space-y-2">
          <h3 className="text-[#ccb091] font-semibold tracking-wide text-basis sm:text-lg uppercase">
            Get To Know
          </h3>
          <h2 className="text-3xl sm:text-6xl text-gray-900 uppercase">
            Harry Ogieva
          </h2>

          <div className="space-y-6 mt-5 leading-relaxed text-gray-700">
            <p>
              With years of experience and an unmatched passion for real estate,
              Harry Ogieva has built a reputation as one of the most trusted and
              knowledgeable real estate professionals in Nigeria. Currently, he
              is affiliated with eXp Realty, the world&apos;s fastest-growing global
              real estate brokerage.
            </p>
            <p>
              Harry&apos;s expertise spans multiple regions, including Lagos, Abuja,
              and Benin City. His local market insight, paired with valuable
              international connections, empowers his clients to make
              well-informed decisions in an ever-evolving real estate market. As
              a dedicated and driven associate broker, he is part of the
              exclusive eXp Luxury program, which offers advanced tools,
              technology, and training to elevate his clients&apos; experiences.
            </p>
            <p>
              A Certified Residential Specialist (CRS) and a Graduate of the
              Realtor Institute, Harry&apos;s licenses are active across multiple
              regions, including Lagos and Abuja. His professionalism, coupled
              with his vast knowledge of the industry, has earned him multiple
              Top Producer awards and a long list of satisfied clients.
            </p>
            <p>
              In addition to his accolades in real estate, Harry remains
              grounded and involved in the community, frequently supporting
              local charities, schools, and community events. When he&apos;s not
              helping clients find their dream homes, you can find him enjoying
              outdoor activities such as biking, hiking, and sailing. His love
              for adventure, combined with a deep commitment to his clients&apos;
              success, makes him a standout in the real estate field.
            </p>
            <p>
              Whether you&apos;re buying your first home, investing in a luxury
              property, or seeking expert advice on real estate markets, Harry
              Ogieva is here to guide you every step of the way.
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
        </div>
      </div>
    </section>
  );
};

export default AboutOwner;
