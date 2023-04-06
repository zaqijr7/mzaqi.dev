import React from "react";

const BtnPortfolioType = ({ children, isActive = false, className }) => {
  return (
    <>
      <button
        className={`py-2 px-10 ${className} ${
          isActive
            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
            : "border-2"
        } rounded-full whitespace-nowrap text-sm`}
      >
        {children}
      </button>
    </>
  );
};

export default BtnPortfolioType;
