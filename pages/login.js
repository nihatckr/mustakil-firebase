import { Button, Flex, Heading, Input, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      router.push("/");
    });
  };

  useEffect(() => {
    let token = sessionStorage.getItem("Token");
    if (token) {
      router.push("/");
    }
  }, []);

  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Flex direction={"column"} background={"gray.200"} p={12} rounded={6}>
        <Heading>Log in</Heading>
        <Input
          placeHolder={"Email"}
          variant={"filled"}
          mb={3}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeHolder={"Password"}
          variant={"filled"}
          mb={3}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={signIn}>Log in</Button>
        <Link as={NextLink} href={"/"}>
          Home
        </Link>
      </Flex>
    </Flex>
  );
};

export default Login;
