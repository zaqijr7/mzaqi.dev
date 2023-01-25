import React from "react";
import Image from "next/image";
import Router from "next/router";
import { UilHeart, UilBookmarkFull } from "@iconscout/react-unicons";

const ArticleCard = ({ link }) => {
  const pushToArticle = () =>
    Router.push({
      pathname: `/blog/${link}`,
    });
  return (
    <>
      <div className="rounded-xl bg-gray-50 shadow-md hover:shadow-xl border relative">
        <div className="absolute z-30 left-3 top-3 flex">
          <div className="bg-white  py-2 px-4 rounded-full bg-opacity-30 backdrop-filter backdrop-blur text-white flex items-center">
            20 Oct 2022
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
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
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
            Framework JS terbaik untuk frontend
          </h1>
          <p className="text-justify">
            Sebagai frontend developer, tentunya kita harus memikirkan kualitas
            frontend yang kita buat, salah satu aspek terpeting dalam mengcode
            frontend adalah pemilihan framework yang tepat, berikut adalah
            framework terbaik menurut mzaqi.dev...
          </p>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
