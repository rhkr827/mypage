import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps, GetStaticPaths } from "next";
import { useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { useMdxComponentsContext } from "@/context/mdx-context";
import { IPost } from "@/types/post";
import { getPost, getAllPosts } from "@/utils/mdx-utils";
import { ParsedUrlQuery } from "querystring";
import Categories from "@/components/posts/categories";
import Tags from "@/components/posts/tags";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
};

const components = {
  Categories,
  Tags,
};

const PostPage = ({ source, frontMatter }: Props) => {
  // const { setCategories, setTags } = useMdxComponentsContext();

  // useEffect(() => {
  //   setTags(frontMatter.tags);
  // }, [setCategories, setTags, frontMatter.categories, frontMatter.tags]);

  return (
    <div>
      <article>
        <h1>{frontMatter.title}</h1>
        <p></p>
        <MDXRemote components={components} {...source} />
      </article>
    </div>
  );
};

export default PostPage;

interface Iparams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams;
  const { content, data } = getPost(slug);
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts(["slug"]);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
