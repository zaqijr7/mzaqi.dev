import React from "react";

const TitleFlip = ({ title, styles, icon }) => {
  const splitText = title.split("");
  return (
    <>
      <div className={`title-flip ${styles}`}>
        {icon}{" "}
        {splitText.map((item, index) => {
          return (
            <span key={index} style={{ "--i": index + 1 }}>
              {item}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default TitleFlip;
