import React from "react";

const PageHero = ({
  pageTitle,
  pageHeroBGImage,
}: {
  pageTitle: string;
  pageHeroBGImage: string;
}) => {
  return (
    <section
      style={{ backgroundImage: `url(${pageHeroBGImage})` }}
      className={`bg-fixed bg-cover bg-center w-full min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh] relative`}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 z-10 w-full h-full flex justify-center items-center bottom-0">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-white/90 font-bold mb-4 uppercase text-center">
          {pageTitle}
        </h1>
      </div>
    </section>
  );
};

export default PageHero;
