import Image from "next/image";
import React from "react";

const ArticleCard = () => {
  return (
    <>
      <div className="rounded-xl bg-gray-50 shadow-md hover:shadow-xl border hover:cursor-pointer">
        <div className="relative w-full h-60">
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            fill={true}
            className="object-cover rounded-t-xl"
          />
        </div>
        <div className="p-3">
          <h1 className="font-semibold mb-3 text-lg">
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
