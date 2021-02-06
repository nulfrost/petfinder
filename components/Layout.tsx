import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>Pettr | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box as="main" minH="100vh">
        <Navbar />
        {children}
      </Box>
    </>
  );
}
