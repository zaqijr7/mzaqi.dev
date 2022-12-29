import Image from "next/image";
import React from "react";
import { ButtonMenu } from "./index";
import { useRouter } from "next/router";
import {
  UilEstate,
  UilUser,
  UilMedal,
  UilDocumentLayoutLeft,
} from "@iconscout/react-unicons";

const Sidebar = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-2/12 border-r-2 border-gray-200 flex flex-col z-50 bg-white">
        <div className="flex justify-center items-start p-10">
          <Image src="/MYLOGO2.svg" width={170} height={170} alt="logo" />
        </div>
        <div className="p-10 flex flex-1 flex-col">
          <ButtonMenu isActive={router.pathname === "/"} href="/">
            <UilEstate className="mr-2" />
            Home
          </ButtonMenu>
          <ButtonMenu isActive={router.pathname === "/about"} href="/about">
            <UilUser className="mr-2" />
            About
          </ButtonMenu>
          <ButtonMenu
            isActive={router.pathname === "/portfolio"}
            href="/portfolio"
          >
            <UilMedal className="mr-2" />
            Portfolio
          </ButtonMenu>
          <ButtonMenu isActive={router.pathname === "/blog"} href="/blog">
            <UilDocumentLayoutLeft className="mr-2" />
            Blog
          </ButtonMenu>
        </div>
        <div className="py-3">
          <div className="flex justify-center items-center py-5">
            <Image
              className="mx-2"
              src={"https://cdn-icons-png.flaticon.com/512/3536/3536569.png"}
              width={25}
              height={25}
              alt="social media"
            />
            <Image
              className="mx-2"
              src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
              width={25}
              height={25}
              alt="social media"
            />
            <Image
              className="mx-2"
              src={"https://cdn-icons-png.flaticon.com/512/5968/5968854.png"}
              width={25}
              height={25}
              alt="social media"
            />
            <Image
              className="mx-2"
              src={"https://cdn-icons-png.flaticon.com/512/732/732026.png"}
              width={25}
              height={25}
              alt="social media"
            />
          </div>
          <div className="font-thin text-sm text-center">
            © 2022 Muhmmad Zaqi Al Quraisyi
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
