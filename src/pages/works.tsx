import { Container, Box, Heading, useColorModeValue } from "@chakra-ui/react";
import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import Layout from "@layouts/article";
import { IPost } from "@/types/post";
import { getAllPosts } from "@/utils/mdx-utils";

type Props = {
  posts: [IPost];
};

const Works: NextPage<Props> = ({ posts }: Props) => (
  <Layout title="Works">
    <Container p={10}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <div>
        <h1>Posts List</h1>
        {posts.map((post) => (
          <Box
            key={post.slug}
            borderRadius="lg"
            borderColor={"whiteAlpha.500"}
            p={2}
            mb={3}
            textAlign="center"
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            css={{ backdropFilter: "blur(10px)" }}
          >
            <div key={post.slug}>
              <h2>
                <Link legacyBehavior href={`/posts/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>
              <p></p>
            </div>
          </Box>
        ))}
      </div>
    </Container>
  </Layout>
);

export default Works;
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["title", "slug", "date"]);
  return { props: { posts } };
};

//export { getServerSideProps } from "@/components/chakra";
