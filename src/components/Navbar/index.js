import React, { useState } from "react";
import Image from "next/image";
import { ButtonMenu } from "..";
import {
  UilEstate,
  UilUser,
  UilMedal,
  UilDocumentLayoutLeft,
} from "@iconscout/react-unicons";
import { useRouter } from "next/router";

function Navbar() {
  const [isExpand, setIsExpand] = useState("hidden");
  const handleCloseNavbar = () => {
    setIsExpand("navbar-inactive");
  };
  const router = useRouter();

  return (
    <div className="xl:hidden p-5 shadow-md fixed w-full backdrop-blur-md z-50 bg-white">
      <div className="flex items-center justify-between">
        <div className="">
          <Image src="/mobile-logo.svg" width={100} height={100} alt="logo" />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            if (isExpand === "hidden") {
              setIsExpand("navbar-active");
            } else if (isExpand === "navbar-active") {
              setIsExpand("navbar-inactive");
            } else if (isExpand === "navbar-inactive") {
              setIsExpand("navbar-active");
            }
          }}
          aria-expanded={true}
        >
          <div
            className={`w-[20px] py-[1.2px] bg-black my-1 ${
              isExpand === "navbar-active"
                ? "rotate-45 translate-y-[10px]"
                : "rotate-0 translate-y-0"
            } transition-all duration-300`}
          ></div>
          <div
            className={`w-[20px] py-[1.2px] bg-black my-1 ${
              isExpand === "navbar-active"
                ? "translate-x-10 opacity-0"
                : "translate-x-0 opacity-100"
            } transition-all duration-300`}
          ></div>
          <div
            className={`w-[20px] py-[1.2px] bg-black my-1 ${
              isExpand === "navbar-active"
                ? "-rotate-45 -translate-y-[2.5px]"
                : "rotate-0 translate-y-0"
            } transition-all duration-300`}
          ></div>
        </div>
      </div>
      <div className={`${isExpand} overflow-hidden`}>
        <ButtonMenu
          isActive={router.pathname === "/"}
          href="/"
          onClick={handleCloseNavbar}
        >
          <UilEstate className="mr-2" />
          Home
        </ButtonMenu>
        <ButtonMenu
          isActive={router.pathname === "/about"}
          href="/about"
          onClick={handleCloseNavbar}
        >
          <UilUser className="mr-2" />
          About
        </ButtonMenu>
        <ButtonMenu
          isActive={router.pathname === "/portfolio"}
          href="/portfolio"
          onClick={handleCloseNavbar}
        >
          <UilMedal className="mr-2" />
          Portfolio
        </ButtonMenu>
        <ButtonMenu
          isActive={router.pathname === "/blog"}
          href="/blog"
          onClick={handleCloseNavbar}
        >
          <UilDocumentLayoutLeft className="mr-2" />
          Blog
        </ButtonMenu>
      </div>
    </div>
  );
}

export default Navbar;
