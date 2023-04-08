import { forwardRef } from "react";
import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Flex,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";

type LinkProps = {
  href: string;
  path?: string;
  target?: string;
  children?: React.ReactNode;
};

type NavProps = {
  path: string;
};

type Ref = HTMLAnchorElement;

const LinkItem = ({ href, path, target, children, ...props }: LinkProps) => {
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef<Ref, LinkProps>((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

MenuLink.displayName = "MenuLink";

const Navbar = ({ path, ...props }: NavProps) => {
  console.log("Nav path: " + path);
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container display="flex" p={2} maxW="container.md">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            My Homepage
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack>
        <Box flex={1} alignContent="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  Home
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/posts">
                  Posts
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
