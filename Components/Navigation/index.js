import React from "react";
import { VStack, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Navigation = () => {
  return (
    <VStack
      justifyContent={"space-between"}
      flexDir={"row"}
      width={"100%"}
      alignItems={"center"}
    >
      <Flex>Logo</Flex>

      <Flex>
        <Link as={NextLink} href={"/"}>
          Home
        </Link>
        <Link as={NextLink} href={"/project"}>
          Project
        </Link>
        <Link as={NextLink} href={"/contact"}>
          Contact
        </Link>
        <Link as={NextLink} href={"/admin"}>
          Admin
        </Link>
        <Link as={NextLink} href={"/register"}>
          Register
        </Link>
        <Link as={NextLink} href={"/login"}>
          Login
        </Link>
      </Flex>
    </VStack>
  );
};

export default Navigation;
