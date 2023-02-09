import { ArticleCard, BtnPortfolioType, Layout } from "@components/index";

export default function Blog() {
  return (
    <Layout>
      <div className="xl:p-10 lg:p-5 p-3">
        <div className="text-3xl font-semibold mb-5">📑 Articles</div>
        <div className="w-full flex overflow-x-scroll p-3 scrollbar-hide">
          <BtnPortfolioType isActive={false} className="mr-2">
            All
          </BtnPortfolioType>
          <BtnPortfolioType isActive={true} className="mx-2">
            Javascript
          </BtnPortfolioType>
          <BtnPortfolioType isActive={false} className="mx-2">
            React
          </BtnPortfolioType>
          <BtnPortfolioType isActive={false} className="mr-2">
            Vue
          </BtnPortfolioType>
          <BtnPortfolioType isActive={false} className="mx-2">
            Express Js
          </BtnPortfolioType>
          <BtnPortfolioType isActive={false} className="mr-2">
            Personal
          </BtnPortfolioType>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 mt-5">
          <ArticleCard link="cara-memilih-framework-fe" />
          <ArticleCard link="trik-mendapat-dolar" />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </Layout>
  );
}
