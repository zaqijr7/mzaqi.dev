import React from "react";

const PresentationView = (props) => {
  return (
    <>
      <div className="xl:w-screen xl:h-screen xl:flex">{props.children}</div>
    </>
  );
};

export default PresentationView;
