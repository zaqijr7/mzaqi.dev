import React, { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer, Layout } from "@components/index";
import {
  UilArrowLeft,
  UilHeart,
  UilShare,
  UilArrowUp,
} from "@iconscout/react-unicons";
import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";
import Link from "next/link";
import moment from "moment";

export default function BlogPost({ post: { frontmatter, content }, posts }) {
  const router = useRouter();
  const [isToggle, setIsToggle] = useState(false);
  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setIsToggle(true);
      } else {
        setIsToggle(false);
      }
    });
  };

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Layout className="">
          <div className="xl:w-7/12 lg:px-20 px-3 xl:py-10 py-7 overflow-auto scrollbar-hide">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => router.back()}
            >
              <UilArrowLeft /> Back
            </div>
            <div className="my-5 font-bold text-3xl">{frontmatter.title}</div>
            <div className="flex items-center">
              <div className="bg-gray-200 py-2 px-3 rounded-full">
                {moment(frontmatter.date).format("DD MMMM YYYY")}
              </div>
              {/* <div>04 October 2022</div> */}
            </div>
            <div className="relative w-full h-[30rem] mt-8">
              <Image
                src={frontmatter.image}
                fill={true}
                alt="img content"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-justify py-5">
              <ReactMarkdown
                children={content}
                remarkPlugins={[remarkGfm]}
                className="prose prose-pre:p-0 max-w-none"
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        style={dark}
                        showLineNumbers={true}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          borderRadius: "10px",
                          scrollbarWidth: "none",
                        }}
                        {...props}
                      />
                    );
                  },
                }}
              />
            </div>
          </div>
          <div className="xl:w-3/12 py-10 xl:px-3 lg:px-20 px-3 overflow-auto">
            <i className="text-2xl font-bold">Latest Post</i>
            {posts.map(({ slug, frontmatter }, i) => {
              return (
                <>
                  <Link href={`/blog/${slug}`} key={i}>
                    <div className="my-2 font-semibold border-b py-1 cursor-pointer">
                      {frontmatter.title}
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
          <Footer />
        </Layout>
        <div
          className={`p-3 xl:hidden bg-slate-700 right-0 bottom-0 rounded-full text-white fixed mr-3 mb-3 shadow-2xl transform transition-all duration-200 ${
            isToggle ? "translate-y-0" : "translate-y-20"
          }`}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <UilArrowUp />
        </div>
      </Suspense>
    </>
  );
}

export async function getStaticPaths() {
  // Retrieve all our slugs
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      blogPage: fileName.replace(".md", ""),
    },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { blogPage } }) {
  console.log(blogPage);
  const fileName = fs.readFileSync(`posts/${blogPage}.md`, "utf-8");
  const allPosts = fs.readdirSync("posts");

  const posts = allPosts.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      post: {
        frontmatter,
        content,
      },
      posts,
    },
  };
}
