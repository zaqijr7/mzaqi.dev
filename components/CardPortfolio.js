import React from "react";
import Image from "next/image";
import Link from "next/link";
const CardPortfolio = () => {
  return (
    <>
      <div className="bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-lg border">
        <div className="w-full h-60 relative rounded-xl">
          <Image
            src={
              "https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?t=st=1671003276~exp=1671003876~hmac=6a077f6d4b7c2ba3706f446b646047e48af94997f42d2c0fdba933b73d4df93b"
            }
            fill={true}
            style={{
              objectFit: "cover",
            }}
            className="rounded-lg"
          />
        </div>
        <div className="text-xl font-semibold my-3">POS (Point of Sales)</div>
        <div className="w-full h-14 bg-transparent resize-none focus:outline-none scrollbar-hide my-3">
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
            frameborder="0"
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
    </>
  );
};

export default CardPortfolio;
