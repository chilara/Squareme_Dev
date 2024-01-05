import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import "../login/login.css";
import logo from "../../../../app/assets/logo.svg";
import Link from "next/link";

const Login = () => {
  return (
    <Box position={"fixed"} backgroundColor={"#000a4a"} minHeight={"100vh"}>
      <Box
        px={"1.5rem"}
        mt={"21rem"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10rem"}
      >
        <Box>
          <Image src={logo} alt="logo" width={239} height={31} />
        </Box>

        <Flex justifyContent={"center"} gap={"1rem"} flexDir={"column"}>
          <Button
            padding={"16px 96px 14px 96px"}
            width={"100%"}
            mt={"4rem"}
            borderRadius={"8px"}
            color={"#000"}
            fontSize={"16px"}
            fontWeight={500}
            backgroundColor={"#fff"}
            textAlign={"center"}
          >
            <Link href="/component/onboarding/signUp"> Create an Account</Link>
          </Button>
          <Button
            padding={"16px 96px 14px 96px"}
            width={"100%"}
            border={"1.5px solid #fff"}
            borderRadius={"8px"}
            color={"#fff"}
            fontSize={"16px"}
            fontWeight={500}
            backgroundColor={"#000A4A"}
            textAlign={"center"}
          >
            I have an Account
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Login;
