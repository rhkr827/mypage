import { Container, Box, useColorModeValue } from "@chakra-ui/react";
import Layout from "@layouts/article";

const Home = () => (
  <Layout>
    <Container p={10}>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Hello. I&apos;m freelancer as C++/C# developer.
        <br /> Here is Home page.
      </Box>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
