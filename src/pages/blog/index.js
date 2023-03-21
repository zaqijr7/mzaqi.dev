import { ArticleCard, BtnPortfolioType, Layout } from "@components/index";
import matter from "gray-matter";
import fs from "fs";
import { useEffect } from "react";

export default function Blog({ posts }) {
  useEffect(() => {
    console.log(posts, "<<<< ini post");
  }, [posts]);
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
          {posts.map(({ slug, frontmatter }, index) => {
            return (
              <ArticleCard
                link={slug}
                teaser={frontmatter.teaser || ""}
                date={frontmatter.date}
                thumbnail={frontmatter.image}
                title={frontmatter.title}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get all our posts
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
  return { props: { posts } };
}
