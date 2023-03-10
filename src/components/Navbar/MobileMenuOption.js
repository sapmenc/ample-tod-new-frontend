import React from "react";

function MobileMenuOption({ Icon, Title, Link }) {
  return (
    <a
      className="no-hightlight select-none bg-zinc-100 p-2 flex h-14 rounded-lg justify-center items-center gap-2 cursor-pointer group hover:text-new_secondary hover:bg-primary"
      href={Link}
    >
      <Icon className="h-6" />
      <p className="capitalize tracking-[3px] group-hover:tracking-[10px] group-hover:text-lg ease-in-out duration-200">
        {Title}
      </p>
    </a>
  );
}

export default MobileMenuOption;
