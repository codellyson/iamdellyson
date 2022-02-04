import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Link from "next/link";
import { postFilePath, POST_PATH } from "../../utils/mdxUtils";

function index({ posts }) {
  console.log(posts);

  return (
    <section>
      {posts.map((item, index) => (
        <div className="blog-post" key={index}>
          <Link
            as={`/blog/${item.filePath.replace(/\.mdx?$/, "")}`}
            href={`/blog/[slug]`}
          >
            <a>{item.data.title}</a>
          </Link>
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
    console.log("Data:", data);
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
