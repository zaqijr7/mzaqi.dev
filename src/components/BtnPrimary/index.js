import React from "react";

const BtnPrimary = ({ children, className }) => {
  return (
    <>
      <button
        className={`bg-gradient-to-tr from-cyan-500 to-blue-500 text-white ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default BtnPrimary;
