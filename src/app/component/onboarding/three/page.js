import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import "../three/styleThree.css";
import logo from "../../../../app/assets/logo.svg";
import Link from "next/link";

const Three = () => {
  return (
    <Box className="headerIMG3" color={"#fff"} position={"fixed"}>
      <Box px={"1.5rem"} mt={"3rem"}>
        <Image src={logo} alt="logo" width={154} height={20} />
        <Text
          fontSize={"24px"}
          fontWeight={700}
          color={"#fff"}
          fontStyle={"normal"}
          mt={"30rem"}
        >
          Spend your money easily without any complications
        </Text>
        <Flex justifyContent={"center"}>
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
            <Link href="/component/onboarding/login"> Get Started</Link>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Three;
