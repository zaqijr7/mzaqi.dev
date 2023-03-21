import React from "react";
import Image from "next/image";
import Router from "next/router";
import { UilHeart, UilBookmarkFull } from "@iconscout/react-unicons";

const ArticleCard = ({ link, date, thumbnail, title, teaser }) => {
  const pushToArticle = () =>
    Router.push({
      pathname: `/blog/${link}`,
    });
  return (
    <>
      <div className="rounded-xl bg-gray-50 shadow-md hover:shadow-xl border relative">
        <div className="absolute z-30 left-3 top-3 flex">
          <div className="bg-white  py-2 px-4 rounded-full bg-opacity-30 backdrop-filter backdrop-blur text-white flex items-center">
            {date}
          </div>
          <div className="bg-white p-2 rounded-full bg-opacity-30 backdrop-filter backdrop-blur text-white flex items-center mx-2">
            <UilHeart />
          </div>
          <div className="bg-white p-2 rounded-full bg-opacity-30 backdrop-filter backdrop-blur text-white flex items-center">
            <UilBookmarkFull />
          </div>
        </div>
        <div className="relative w-full h-60">
          <Image
            src={thumbnail}
            fill={true}
            alt="thumbnail article"
            className="object-cover rounded-t-xl box-content"
          />
        </div>
        <div className="p-3">
          <h1
            className="font-semibold mb-3 text-lg cursor-pointer"
            onClick={() => pushToArticle()}
          >
            {title}
          </h1>
          <p className="text-justify">{teaser}</p>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
