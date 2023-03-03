import { HeroImageDesktop, HeroImageMobile } from "@/assets/Images";

import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <div className="md:hidden mt-20 overflow-hidden relative">
        <Image
          width={800}
          height={800}
          object-fit="contain"
          src={HeroImageMobile}
          className="3xl:w-full"
          alt="desktop hero banner"
        />
        <div className="absolute w-screen flex flex-col items-center top-[20vw] px-8 text-center text-white gap-[4vw]">
          <h1 className="font-bold text-[10vw] leading-[10vw]">
            TALENT <br /> ON-DEMAND
          </h1>
          <p className="text-[5vw] tracking-wider leading-[5vw]">
            The need of the <br /> Business Today
          </p>
        </div>
      </div>
      <div className="hidden md:block mt-20 overflow-hidden relative">
        <Image
          width={1920}
          height={1080}
          object-fit="contain"
          src={HeroImageDesktop}
          className="3xl:w-full"
          alt="desktop hero banner"
        />
        <div className="absolute h-full w-screen flex flex-col items-start top-[15vw] md:px-14 xl:px-20 text-start text-white gap-[2vw]">
          <div className="h-full w-[55%]">
            <h1 className="font-bold text-[4vw] leading-[10vw] tracking-wide">
              TALENT ON-DEMAND
            </h1>
            <p className="text-[3vw] tracking-wider leading-[3vw]">
              The need of the Business Today
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
