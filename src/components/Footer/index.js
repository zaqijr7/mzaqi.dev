import React from "react";

function Footer() {
  return (
    <div className="font-thin text-sm text-center bg-slate-800 text-white block xl:hidden py-5">
      © {new Date().getFullYear()} Muhmmad Zaqi Al Quraisyi
    </div>
  );
}

export default Footer;
