import Link from "next/link";
import React from "react";

const ButtonMenu = ({
  children,
  isActive = false,
  href = "/",
  onClick = undefined,
}) => {
  return (
    <>
      <Link
        href={href}
        className={`flex items-center my-3 xl:py-3 py-2 px-3 xl:text-base text-sm hover:bg-black hover:bg-opacity-5 rounded-full cursor-pointer ${
          isActive ? "bg-black bg-opacity-5" : "text-black text-opacity-50"
        }`}
        onClick={onClick}
      >
        {children}
      </Link>
    </>
  );
};

export default ButtonMenu;
