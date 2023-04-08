import Head from "next/head";
import NavBar from "@/components/navbar";
import { Box, Container } from "@chakra-ui/react";
import type { NextRouter } from "next/router";

type mainProps = {
  children?: React.ReactNode;
  router: NextRouter;
};

const Main = ({ children, router }: mainProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="noim's homepage contains resume, portfolio and posts"
        />
        <meta name="author" content="noim" />
        <meta property="og:site_name" content="mypage" />
        <meta name="og:title" content="mypage" />
        <meta property="og:type" content="website" />
        <title>MyPage</title>
      </Head>
      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
