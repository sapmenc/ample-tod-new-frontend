import React from "react";

function DesktopMenuOptions({ Icon, Title, Link }) {
  return (
    <a
      className="group ds-menu-option cursor-pointer p-2 flex h-14 rounded-lg justify-center items-center gap-2 group hover:text-primary"
      href={Link}
    >
      <Icon className="h-6 group-hover:animate-bounce" />
      <span className="ds-menu-title capitalize relative tracking-[3px] text-sm sm:hidden md:inline">
        {Title}
      </span>
    </a>
  );
}

export default DesktopMenuOptions;
