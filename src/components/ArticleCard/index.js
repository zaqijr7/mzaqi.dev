import React from "react";
import Image from "next/image";
import Router from "next/router";
import moment from "moment";

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
            {moment(date).format("DD MMM YYYY")}
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
        <div onClick={() => pushToArticle()} className="p-3 cursor-pointer">
          <h1 className="font-semibold mb-3 text-lg">{title}</h1>
          <p className="text-justify">
            {teaser.length >= 110 ? teaser.slice(0, 110 - 1) + "..." : teaser}
          </p>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
