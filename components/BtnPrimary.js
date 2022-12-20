import React from "react";

const BtnPrimary = ({ children, className }) => {
  return (
    <>
      <div
        className={`flex p-2 bg-gradient-to-tr from-cyan-500 to-blue-500 text-white rounded ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default BtnPrimary;
