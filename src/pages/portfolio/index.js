import React, { useState } from "react";
import { BtnPortfolioType, CardPortfolio, Layout } from "@components/index";

export default function Portfolio() {
  const [btnActive, setBtnActive] = useState("All");
  const typeOfProject = ["All", "Web", "Mobile"];

  return (
    <Layout>
      <div className="xl:p-10 lg:p-5 p-3">
        <div className="text-3xl font-semibold mb-5">🏆 My Project</div>
        <div className="flex overflow-auto scrollbar-hide mb-5">
          {typeOfProject.map((item, index) => {
            return (
              <BtnPortfolioType
                isActive={item === btnActive}
                key={index}
                className="mr-2"
                onClick={() => setBtnActive(item)}
              >
                {item}
              </BtnPortfolioType>
            );
          })}
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 my-3">
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
        </div>
      </div>
    </Layout>
  );
}
