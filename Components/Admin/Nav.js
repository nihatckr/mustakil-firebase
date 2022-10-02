import {
  IconButton,
  Link,
  Tooltip,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { MdDashboard, MdHome, MdSettings } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import { BsSliders } from "react-icons/bs";
import NextLink from "next/link";

const Nav = () => {
  return (
    <VStack
      p={6}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
    >
      <VStack>
        <Flex alignItems={"center"} justifyContent={"start"} width={"100%"}>
          <Link as={NextLink} href={"/"}>
            <Flex
              flexDir={"row"}
              display={"flex"}
              alignItems={"center"}
              cursor={"pointer"}
            >
              <MdHome />
              <Text marginLeft={2}>AnaSayfa</Text>
            </Flex>
          </Link>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"start"} width={"100%"}>
          <Link as={NextLink} href={"/admin/dashboard"}>
            <Flex
              flexDir={"row"}
              display={"flex"}
              alignItems={"center"}
              cursor={"pointer"}
            >
              <MdDashboard />
              <Text marginLeft={2}>Genel</Text>
            </Flex>
          </Link>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"start"} width={"100%"}>
          <Link as={NextLink} href={"/admin/sayfalar"}>
            <Flex
              flexDir={"row"}
              display={"flex"}
              alignItems={"center"}
              cursor={"pointer"}
            >
              <HiLightningBolt />
              <Text marginLeft={2}>Sayfalar</Text>
            </Flex>
          </Link>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"start"} width={"100%"}>
          <Link as={NextLink} href={"/admin/slider"}>
            <Flex
              flexDir={"row"}
              display={"flex"}
              alignItems={"center"}
              cursor={"pointer"}
            >
              <BsSliders />
              <Text marginLeft={2}>Slider</Text>
            </Flex>
          </Link>
        </Flex>
      </VStack>
      <Flex alignItems={"center"} justifyContent={"start"} width={"100%"}>
        <Link as={NextLink} href={"/admin/ayarlar"}>
          <Flex
            flexDir={"row"}
            display={"flex"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <MdSettings />
            <Text marginLeft={2}>Ayarlar</Text>
          </Flex>
        </Link>
      </Flex>
    </VStack>
  );
};

export default Nav;
