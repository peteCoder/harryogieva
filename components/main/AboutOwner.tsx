import Image from "next/image";
import Link from "next/link";

const AboutOwner = () => {
  return (
    <section className="bg-[#f7f3f0] text-gray-800 py-10 ">
      <div className=" px-4 md:px-0 flex flex-col md:flex-row items-start gap-10 container xl:mx-auto">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/images/owner.webp"
            width={2048}
            height={3069}
            alt="owner image"
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
              Harry has joined eXp Realty, the fastest-growing global real
              estate brokerage in the world.
            </p>
            <p>
              As part of this select group, Harry serves as a trusted adviser
              who brings local market expertise and valuable global connections
              to his clients. He is excited to be part of eXp&apos;s exclusive
              eXp Luxury real estate program, which provides access to advanced
              tools, training, and technology.
            </p>
            <p>
              Harry is an associate broker, certified residential specialist,
              and graduate of the Realtor Institute. His licenses are active in
              Idaho and Washington.
            </p>
            <p>
              Over his career, Harry has earned numerous awards including
              multiple Top Producer honors. His leadership and experience in the
              industry continue to make him one of the most respected agents in
              his region.
            </p>
            <p>
              Outside of real estate, Harry enjoys supporting local charities,
              traveling, spending time with family, and pursuing outdoor
              activities such as biking, hiking, and sailing.
            </p>

            <div className="flex gap-3 item-center flex-col sm:flex-row">
              <Link
                href={"/"}
                className="border border-[#b19a55] px-4 py-4 text-[#b19a55] hover:bg-[#b19a55] hover:text-white sm:w-1/2 flex items-center justify-center uppercase"
              >
                Let&apos;s Connect
              </Link>
              <Link
                href={"/"}
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
