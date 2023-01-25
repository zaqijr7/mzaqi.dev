import { BtnPrimary } from "@components/index";
import React from "react";

export default function CmsLogin() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-white w-4/12 py-3 px-5 rounded-xl shadow-xl border">
        <div className="text-center font-extralight text-2xl border-b py-3 mb-4">
          LOGIN
        </div>
        <input
          type="text"
          placeholder="Email or username..."
          className="w-full py-3 px-5 my-3 focus:outline-none border rounded-full"
        />
        <input
          type="password"
          placeholder="Password..."
          className="w-full py-3 px-5 my-3 focus:outline-none border rounded-full"
        />
        <BtnPrimary className="w-full p-3 rounded-full my-3">LOGIN</BtnPrimary>
      </div>
    </div>
  );
}
