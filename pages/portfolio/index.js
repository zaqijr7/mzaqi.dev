import React from "react";
import { BtnPortfolioType, CardPortfolio, Layout } from "../../components";

export default function Portfolio() {
  return (
    <Layout>
      <div className="p-10">
        <div className="text-3xl font-semibold mb-5">🏆 My Portfolio</div>
        <BtnPortfolioType isActive={false} className="mr-2">
          All
        </BtnPortfolioType>
        <BtnPortfolioType isActive={true} className="mx-2">
          Web
        </BtnPortfolioType>
        <BtnPortfolioType isActive={false} className="mx-2">
          Mobile
        </BtnPortfolioType>
        <div className="grid grid-cols-3 gap-10 my-3">
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
        </div>
      </div>
    </Layout>
  );
}
