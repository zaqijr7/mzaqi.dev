import React from "react";

const PresentationView = ({ children }) => (
  <>
    <div className="xl:w-screen xl:h-screen xl:flex">{children}</div>
  </>
);

export default PresentationView;
