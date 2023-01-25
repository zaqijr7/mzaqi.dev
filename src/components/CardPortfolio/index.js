import React from "react";
import Image from "next/image";
import Link from "next/link";
const CardPortfolio = () => {
  return (
    <>
      <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg border">
        <div className="w-full h-60 relative">
          <Image
            src={
              "https://images.unsplash.com/photo-1538503529202-7a0e79cbb6f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            fill={true}
            style={{
              objectFit: "cover",
            }}
            alt="thumbnail portfolio"
            className=" rounded-t-xl"
          />
        </div>
        <div className="p-3">
          <div className="text-xl font-semibold my-3">POS (Point of Sales)</div>
          <div className="w-full my-3">
            Irure esse dolore labore sunt irure excepteur aliqua esse elit duis
            nulla ex enim. Reprehenderit adipisicing velitas...
          </div>
          <div className="flex justify-between">
            <div className="text-sm">
              <Link href={"#"} className="text-blue-400">
                View Code
              </Link>{" "}
              |{" "}
              <Link href={"#"} className="text-blue-400">
                Demo
              </Link>
            </div>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true"
              frameBorder="0"
              width="114.5"
              height="20"
              title="GitHub"
              className="px-0 mx-0"
            ></iframe>
          </div>
          <div className="flex mt-3 flex-wrap justify-around">
            <div className="py-1 px-3 font-light text-sm rounded-full border border-gray-300 text-gray-500 mt-2 mr-2">
              Node Js
            </div>
            <div className="py-1 px-3 font-light text-sm rounded-full border border-gray-300 text-gray-500 mt-2 mx-2">
              React
            </div>
            <div className="py-1 px-3 font-light text-sm rounded-full border border-gray-300 text-gray-500 mt-2 mx-2">
              Tailwind
            </div>
            <div className="py-1 px-3 font-light text-sm rounded-full border border-gray-300 text-gray-500 mt-2 mx-2">
              SCSS
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPortfolio;
