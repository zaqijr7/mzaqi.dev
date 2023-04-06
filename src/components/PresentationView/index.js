import { Navbar } from "@components/index";
import React from "react";

const PresentationView = (props) => {
  return (
    <>
      <Navbar />
      <div className="xl:w-screen xl:h-screen xl:flex xl:pt-0 md:pt-14 pt-16">
        {props.children}
      </div>
    </>
  );
};

export default PresentationView;
