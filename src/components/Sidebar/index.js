import Image from "next/image";
import React from "react";
import { ButtonMenu } from "@components/index";
import { useRouter } from "next/router";
import {
  UilEstate,
  UilUser,
  UilMedal,
  UilDocumentLayoutLeft,
} from "@iconscout/react-unicons";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();
  return (
    <>
      <div className="xl:flex hidden w-2/12 border-r-2 border-gray-200 flex-col z-50 bg-white">
        <div className="flex justify-center items-start py-10 px-5 2xl:px-10">
          <Image src="/MYLOGO2.svg" width={160} height={160} alt="logo" />
        </div>
        <div className="py-10 px-5 2xl:px-10 flex flex-1 flex-col">
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
            <Link
              href="https://www.linkedin.com/in/muhammad-zaqi/"
              target="_blank"
            >
              <Image
                className="mx-2"
                src={"https://cdn-icons-png.flaticon.com/512/3536/3536569.png"}
                width={25}
                height={25}
                alt="social media"
              />
            </Link>
            <Link href="https://github.com/zaqijr7" target="_blank">
              <Image
                className="mx-2"
                src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
                width={25}
                height={25}
                alt="social media"
              />
            </Link>
            <Link href="https://medium.com/@zaqijr7" target="_blank">
              <Image
                className="mx-2"
                src={"https://cdn-icons-png.flaticon.com/512/5968/5968854.png"}
                width={25}
                height={25}
                alt="social media"
              />
            </Link>
            <Link href="mailto:zaqijr7@gmail.com">
              <Image
                className="mx-2"
                src={"https://cdn-icons-png.flaticon.com/512/732/732026.png"}
                width={25}
                height={25}
                alt="social media"
              />
            </Link>
          </div>
          <div className="font-thin text-sm text-center">
            © {new Date().getFullYear()} Muhmmad Zaqi Al Quraisyi
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
