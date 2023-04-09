import { Navbar } from "@components/index";
import React from "react";

const PresentationView = (props) => {
  return (
    <>
      <Navbar />
      <div className="xl:w-screen xl:h-screen xl:flex xl:pt-0 md:pt-16 pt-[4.3rem]">
        {props.children}
      </div>
    </>
  );
};

export default PresentationView;
