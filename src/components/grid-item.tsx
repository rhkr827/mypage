import NextLink from "next/link";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

type GridProps = {
  children?: React.ReactNode;
  href: string;
  title: string;
};

type GridWorkProps = {
  children?: React.ReactNode;
  id: string;
  title?: string;
};

export const GridItem = ({ children, href, title }: GridProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title }: GridWorkProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
