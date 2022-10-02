import { Button, Flex, Heading, Input, Link } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

const Register = () => {
  const googleProvider = new GoogleAuthProvider();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then((response) => {
      sessionStorage.setItem("Token", response.user.accessToken);
      router.push("/");
    });
  };
  const signWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((response) => {
      sessionStorage.setItem("Token", response.user.accessToken);
      console.log(response.user);
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
        <Heading>Kayıt Ol</Heading>
        <Input
          placeholder={"Email"}
          variant={"filled"}
          mb={3}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder={"Şifre"}
          variant={"filled"}
          mb={3}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={signUp} mb={2}>
          Kayıt Ol
        </Button>
        <Button onClick={signWithGoogle}>SignWithGoogle</Button>
        <Link as={NextLink} href={"/"} marginTop={2}>
          Geri Dön
        </Link>
      </Flex>
    </Flex>
  );
};

export default Register;
