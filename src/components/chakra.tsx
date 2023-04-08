import {
  extendTheme,
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";

type ChakraProps = {
  cookies?: any;
  children?: React.ReactNode;
};

type ReqProps = { req: any };

const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};

const customTheme = extendTheme({ config });

export default function Chakra({ cookies, children }: ChakraProps) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={customTheme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

export async function getServerSideProps({ req }: ReqProps) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
