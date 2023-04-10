import matter from "gray-matter";
import fs from "fs";
import { ArticleCard, BtnPortfolioType, Layout } from "@components/index";
import { kindOfArticles } from "@utils/constant";
import { useEffect, useState } from "react";

export default function Blog({ posts }) {
  const [btnActive, setBtnActive] = useState("All");
  const [listArticles, setListArticles] = useState([...posts]);

  const filterArticle = () => {
    const filterListArticle = posts.filter((item) => {
      if (btnActive !== "All") {
        return item?.frontmatter?.tags?.includes(btnActive);
      } else {
        return item;
      }
    });
    setListArticles(filterListArticle);
  };

  useEffect(() => {
    filterArticle();
  }, [btnActive]);

  return (
    <Layout>
      <div className="xl:p-10 lg:p-5 p-3">
        <div className="text-3xl font-semibold mb-5">📑 Articles</div>
        <div className="w-full flex overflow-x-scroll py-3 scrollbar-hide">
          {kindOfArticles.map((item, index) => {
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
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {listArticles.length ? (
            listArticles.map(({ slug, frontmatter }, index) => {
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
            })
          ) : (
            <div className="text-gray-400">There&apos;re No Posts Yet</div>
          )}
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
