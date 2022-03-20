import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Link from "next/link";
import { postFilePath, POST_PATH } from "../../utils/mdxUtils";
import Head from "next/head";
import Header from "../../components/Header";
import { Card } from "../../components/Card/Cards";

function index({ posts }) {
  return (
    <section>
      <Head>
        <title>Blogs</title>
      </Head>
      <Header>
        <div className="header-content">
          <h1>Blogs</h1>
        </div>
      </Header>
      <div className="container">
        {posts.map((item, index) => (
          <Card
            key={index}
            content={item.data.description}
            title={item.data.title}
            author={item.data.author}
            date={item.data.updatedAt}
            variant="post"
            path={item.filePath.replace(/\.mdx?$/, "")}
          />
          // <div className="blog-post-title" key={index}>
          //   <Link
          //     as={`/blog/${item.filePath.replace(/\.mdx?$/, "")}`}
          //     href={`/blog/[slug]`}
          //   >
          //     <a className="blog-post-link">{item.data.title}</a>
          //   </Link>
          //   <p className="blog-description">{item.data.description}</p>
          // </div>
        ))}
      </div>
    </section>
  );
}

export default index;
export async function getStaticProps() {
  const posts = postFilePath.map((filePath) => {
    const source = fs.readFileSync(path.join(POST_PATH, filePath));
    const { data, content } = grayMatter(source);
    return {
      data,
      content,
      filePath,
    };
  });
  return {
    props: {
      posts: posts,
    },
  };
}
