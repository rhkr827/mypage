import { Container, Box, Heading, useColorModeValue } from "@chakra-ui/react";
import Layout from "@layouts/article";

const Posts = () => (
  <Layout title="Works">
    <Container p={10}>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>
      <Box
        borderRadius="lg"
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Here is Posts page.
      </Box>
    </Container>
  </Layout>
);

export default Posts;
export { getServerSideProps } from "@/components/chakra";
