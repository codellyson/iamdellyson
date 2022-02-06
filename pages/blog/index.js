import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Link from "next/link";
import { postFilePath, POST_PATH } from "../../utils/mdxUtils";
import Head from "next/head";

function index({ posts }) {
  return (
    <section>
      <Head>
        <title>Blogs</title>
      </Head>
      {posts.map((item, index) => (
        <div className="blog-post-title" key={index}>
          <Link
            as={`/blog/${item.filePath.replace(/\.mdx?$/, "")}`}
            href={`/blog/[slug]`}
          >
            <a className="blog-post-link">{item.data.title}</a>
          </Link>
          <p className="blog-description">{item.data.description}</p>
        </div>
      ))}
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
