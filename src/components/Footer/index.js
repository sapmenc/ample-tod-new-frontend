import LowerFooter from "./LowerFooter";
import React from "react";
import UpperFooter from "./UpperFooter";

function Footer() {
  return (
    <div className="px-8 md:px-16">
      <UpperFooter />
      <LowerFooter />
    </div>
  );
}

export default Footer;
