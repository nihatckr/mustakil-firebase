import { HStack, Flex } from "@chakra-ui/react";
import React from "react";

import Nav from "../Nav";

const AdminLayout = ({ children }) => {
  return (
    <HStack h={"100vh"} spacing={0}>
      <Flex as={"nav"} h={"full"} maxW={40} w={"full"} bg={"gray.100"}>
        <Nav />
      </Flex>
      <Flex
        as={"main"}
        flex={1}
        h={"full"}
        max={"sm"}
        w={"full"}
        borderRightColor={"gray.100"}
        borderRightWidth={1}
        overflow={"auto"}
        minH={"300px"}
      >
        {children}
      </Flex>
    </HStack>
  );
};

export default AdminLayout;
