import {
  AcademicCapIcon,
  Bars3Icon,
  BuildingOffice2Icon,
  HomeIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  CareersLink,
  ContactLink,
  HomeLink,
  IndustriesLink,
} from "@/assets/RouteLinks";

import DesktopMenuOptions from "./DesktopMenuOptions";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { logo } from "@/assets/Images";

function Navbar({ open, setOpen }) {
  return (
    <nav className="no-hightlight fixed h-20 top-0 left-0 right-0 bg-white z-10 drop-shadow-md lg:px-4">
      <div className="w-full p-2.5 flex justify-between items-center  ">
        {/* nav left */}
        <div className="w-50 grow ">
          {/* logo conatainer div */}
          <a
            className="flex h-[3.5rem] w-full cursor-pointer"
            href="https://www.ample.be/"
          >
            <Image
              width={170}
              height={50}
              object-fit="contain"
              src={logo}
              alt="logo"
            />
          </a>
        </div>
        {/* nav right */}
        <div className=" hidden sm:flex grow justify-end items-center gap-2 text-sm ">
          <DesktopMenuOptions Icon={HomeIcon} Title="HOME" Link={HomeLink} />
          <DesktopMenuOptions
            Icon={BuildingOffice2Icon}
            Title="INDUSTRIES"
            Link={IndustriesLink}
          />
          <DesktopMenuOptions
            Icon={AcademicCapIcon}
            Title="CAREERS"
            Link={CareersLink}
          />
          <DesktopMenuOptions
            Icon={PhoneIcon}
            Title="CONTACT"
            Link={ContactLink}
          />
        </div>
        {!open && (
          <Bars3Icon
            className="sm:hidden h-11 cursor-pointer hover:bg-red-50 active:bg-red-100 rounded-full p-2 shadow-xl  duration-200 ease-in-out"
            onClick={() => {
              setOpen(true);
            }}
          />
        )}
        {open && (
          <XMarkIcon
            className="sm:hidden h-11 cursor-pointer bg-red-100 hover:bg-red-200 active:bg-red-300 rounded-full p-2 shadow-xl  duration-200 ease-in-out"
            onClick={() => {
              setOpen(false);
            }}
          />
        )}
      </div>
      {open && <MobileMenu />}
    </nav>
  );
}

export default Navbar;
