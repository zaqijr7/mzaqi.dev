import Link from "next/link";
import React from "react";

const ButtonMenu = ({ children, isActive = false, href = "/" }) => {
  return (
    <>
      <Link
        href={href}
        className={`flex items-center my-3 py-3 px-5 hover:bg-black hover:bg-opacity-5 rounded-full cursor-pointer ${
          isActive ? "bg-black bg-opacity-5" : "text-black text-opacity-50"
        }`}
      >
        {children}
      </Link>
    </>
  );
};

export default ButtonMenu;
