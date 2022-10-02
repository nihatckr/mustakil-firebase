import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const index = () => {
  return (
    <VStack marginTop={6} marginLeft={4}>
      <Heading fontWeight={"normal"} letterSpacing={"normal"}>
        Welcome back,
        <Text fontWeight={"bold"} display={"inline-flex"}>
          Nihat
        </Text>
      </Heading>
    </VStack>
  );
};

export default index;
