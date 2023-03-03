import { HeroImageDesktop, HeroImageMobile } from "@/assets/Images";

import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <div className="md:hidden mt-20 overflow-hidden">
        <Image
          width={800}
          height={800}
          object-fit="contain"
          src={HeroImageMobile}
          className="3xl:w-full"
          alt="desktop hero banner"
        />
      </div>
      <div className="hidden md:block mt-20 overflow-hidden">
        <Image
          width={1920}
          height={1080}
          object-fit="contain"
          src={HeroImageDesktop}
          className="3xl:w-full"
          alt="desktop hero banner"
        />
      </div>
    </>
  );
}

export default Hero;
