import { VStack, Flex } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Navigation from "../Navigation";

const Layout = ({ children, width, height, title, content }) => {
  return (
    <VStack width={width} height={height} position={"relative"}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={content} />
      </Head>
      <Navigation />
      <Flex flexDir={"column"} flex={1} marginTop={"-120px"} width={"full"}>
        {children}
      </Flex>
    </VStack>
  );
};

export default Layout;
