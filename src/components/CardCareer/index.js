import React from "react";
import Link from "next/link";

const CardCareer = ({
  title,
  companyName,
  workPlace,
  companyWebsite,
  from,
  to,
  employmentType,
}) => {
  return (
    <>
      <div className="border rounded-lg p-5 shadow-md hover:shadow-lg">
        <div className="text-lg xl:text-xl font-semibold">
          {title} • {employmentType}
        </div>
        <div className="my-2 font-light">
          <Link href={companyWebsite} target="_blank" className="underline">
            {companyName}
          </Link>{" "}
          🏢 {workPlace}
        </div>
        <div>
          {from} - {to} • 1 year 2 months
        </div>
      </div>
    </>
  );
};

export default CardCareer;
