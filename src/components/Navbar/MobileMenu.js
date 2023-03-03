import React from "react";
import MobileMenuOption from "./MobileMenuOption";
import {
  HomeIcon,
  PhoneIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import {
  HomeLink,
  IndustriesLink,
  CareersLink,
  ContactLink,
} from "@/assets/RouteLinks";

function MobileMenu() {
  return (
    <div className="sm:hidden bg-white p-2 flex flex-col gap-2 select-none">
      <MobileMenuOption Icon={HomeIcon} Title="HOME" Link={HomeLink} />
      <MobileMenuOption
        Icon={BuildingOffice2Icon}
        Title="INDUSTRIES"
        Link={IndustriesLink}
      />
      <MobileMenuOption
        Icon={AcademicCapIcon}
        Title="CAREERS"
        Link={CareersLink}
      />
      <MobileMenuOption Icon={PhoneIcon} Title="CONTACT" Link={ContactLink} />
    </div>
  );
}

export default MobileMenu;
