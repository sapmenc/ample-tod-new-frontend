import { logo, socialMediaIcons } from "@/assets/Images";

import Image from "next/image";
import { IndustriesLink } from "@/assets/RouteLinks";
import Link from "next/link";

function LowerFooter() {
  return (
    <div className="p-4">
      {/* Mobile Design */}
      <div className="lg:hidden">
        {/* Links */}
        <div className="text-new_primary flex flex-col font-bold">
          <a href="">ABOUT US</a>
          <a href="">SERVICES</a>
          <a href="">INDUSTRIES</a>
          <a href="">CAREERS</a>
          <a href="">CONTACT US</a>
        </div>

        {/* Follow Us */}
        <div className="mt-10 flex flex-col gap-3">
          <h1 className="text-new_primary font-bold">FOLLOW US</h1>
          <div className="flex gap-5">
            {socialMediaIcons.map(({ link, icon }) => {
              return (
                <Link href={link}>
                  <div className="h-7 w-7">
                    <Image
                      width={1500}
                      height={6800}
                      object-fit="contain"
                      src={icon}
                      className="w-full h-full"
                      alt="desktop hero banner"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Ample Logo */}
        <div className="mt-8">
          <Image
            width={170}
            height={50}
            object-fit="contain"
            src={logo}
            alt="logo"
          />
        </div>

        {/* para */}
        <div className="text-center text-new_secondary font-bold mt-[30px] md:mt-[40px]">
          All company names, product names logos included here may be registered
          trademarks or service marks of their respective owners.
        </div>

        {/* copyright */}
        <div className="text-center text-new_primary font-bold mt-[30px] md:mt-[40px]">
          <span className="text-new_secondary">&#169; Copyright</span> - Ample
          Technologies - powered by Enfold WordPress Theme
        </div>
      </div>

      {/* Desktop Design */}
      <div className="hidden lg:flex basis-[40%] items-center gap-10">
        <div className="flex flex-col">
          {/* Ample Logo */}
          <div className="mt-8">
            <Image
              width={170}
              height={50}
              object-fit="contain"
              src={logo}
              alt="logo"
            />
          </div>

          {/* para */}
          <div className="text-new_secondary font-bold mt-[30px] md:mt-[40px]">
            All company names, product names logos included here may be
            registered trademarks or service marks of their respective owners.
          </div>

          {/* copyright */}
          <div className="text-new_primary font-bold mt-5">
            <span className="text-new_secondary">&#169; Copyright</span> - Ample
            Technologies - powered by Enfold WordPress Theme
          </div>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-3 basis-[30%]">
          <h1 className="text-new_primary font-bold">FOLLOW US</h1>
          <div className="flex gap-5">
            {socialMediaIcons.map(({ link, icon }) => {
              return (
                <Link href={link}>
                  <div className="h-7 w-7">
                    <Image
                      width={1500}
                      height={6800}
                      object-fit="contain"
                      src={icon}
                      className="w-full h-full"
                      alt="desktop hero banner"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Links */}
        <div className="text-new_primary flex flex-col font-bold basis-[30%]">
          <a href="">ABOUT US</a>
          <a href="">SERVICES</a>
          <a href="">INDUSTRIES</a>
          <a href="">CAREERS</a>
          <a href="">CONTACT US</a>
        </div>
      </div>
    </div>
  );
}

export default LowerFooter;
