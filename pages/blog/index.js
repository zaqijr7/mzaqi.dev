import Link from "next/link";
import { ArticleCard, Layout } from "../../components";

export default function Blog() {
  return (
    <Layout>
      <div className="p-10">
        <div className="text-3xl font-semibold mb-5">📑 Articles</div>
        <div className="grid grid-cols-3 gap-5">
          <ArticleCard />
          <ArticleCard />
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
