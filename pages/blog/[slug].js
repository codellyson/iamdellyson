import React from "react";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import grayMatter from "gray-matter";
import fs from "fs";
import CustomLink from "../../components/CustomLink";
import { postFilePath, POST_PATH } from "../../utils/mdxUtils";
import Blog from "../Layout/Blog";
const components = {
  a: CustomLink,
  TestComponent: dynamic(() => import("../../components/TestComponent")),
  Code: dynamic(() => import("../../components/Code")),
  Head,
};
function post({ source, frontMatter }) {
  return (
    <Blog>
      <h1>{frontMatter.title}</h1>
      {frontMatter.description && (
        <p className="description">{frontMatter.description}</p>
      )}

      <MDXRemote {...source} components={components} />
    </Blog>
  );
}

export default post;

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POST_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { data, content } = grayMatter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePath
    .map((filePath) => filePath.replace(/\.mdx?$/, ""))
    .map((slug) => ({
      params: {
        slug,
      },
    }));

  return {
    paths,
    fallback: false,
  };
};
