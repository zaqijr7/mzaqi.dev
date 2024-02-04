import React, { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";

const CardCareer = ({
  title,
  companyName,
  workPlace,
  companyWebsite,
  from,
  to,
  employmentType,
}) => {
  function formatDuration(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);

    let durationString = "";

    if (years > 0) {
      durationString += `${years} year${years > 1 ? "s" : ""}`;
    }

    if (months > 0) {
      if (durationString.length > 0) {
        durationString += " ";
      }
      durationString += `${months} mo${months > 1 ? "s" : ""}`;
    }

    if (durationString.length === 0) {
      durationString = "0 mos";
    }

    return durationString;
  }

  return (
    <div className="border rounded-lg p-5 shadow-md hover:shadow-lg">
      <div className="font-semibold">
        {title} • {employmentType}
      </div>
      <div className="my-2 font-light">
        <Link href={companyWebsite} target="_blank" className="underline">
          {companyName}
        </Link>{" "}
        🏢 {workPlace}
      </div>
      <div>
        {moment(from).format("DD MMM YYYY")} -{" "}
        {to === "Present" ? "Present" : moment(to).format("DD MMM YYYY")} •{" "}
        {formatDuration(
          moment
            .duration(
              moment(to === "Present" ? Date.now() : to).diff(moment(from))
            )
            .asMilliseconds()
        )}
      </div>
    </div>
  );
};

export default CardCareer;
