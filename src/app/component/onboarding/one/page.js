import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import "../one/styleOne.css";
import logo from "../../../../app/assets/logo.svg";
import Link from "next/link";

const One = () => {
  return (
    <>
      <Box className="headerIMG" color={"#fff"} position={"fixed"}>
        <Box px={"1.5rem"} mt={"3rem"} position={"relative"}>
          <Image src={logo} alt="logo" width={154} height={20} />
          <Box
            background={
              "linear-gradient(180deg, rgba(105, 105, 105, 0.00) 0%, #000 88.67%)"
            }
            position={"absolute"}
            top={0}
            left={0}
            height={"100vh"}
            px={"1.5rem"}
          >
            <Text
              fontSize={"24px"}
              fontWeight={700}
              color={"#fff"}
              fontStyle={"normal"}
              mt={"30rem"}
            >
              Fast and easy payments to anyone.
            </Text>
            <Text
              fontSize={"14px"}
              fontWeight={400}
              color={"#fff"}
              fontStyle={"normal"}
              mt={"1rem"}
            >
              Receive funds sent to you in seconds.
            </Text>
            <Box
              mt={"4rem"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text
                fontSize={"15px"}
                fontWeight={500}
                color={"#fafafa"}
                fontStyle={"normal"}
              >
                <Link href="/component/onboarding/login">Skip</Link>
              </Text>
              <Button
                padding={"14px 36px"}
                borderRadius={"8px"}
                color={"#000"}
                fontSize={"16px"}
                fontWeight={500}
                backgroundColor={"#fff"}
                textAlign={"center"}
              >
                <Link href="/component/onboarding/two">Next</Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default One;
