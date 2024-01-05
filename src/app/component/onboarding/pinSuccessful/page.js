import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import "../signUp/signUp.css";
import fourPoint from "../../../../app/assets/fourPoint.svg";
import Ellipse from "../../../../app/assets/Ellipse.svg";
import checkmark from "../../../../app/assets/checkmark.svg";
import Link from "next/link";

const PinSuccessful = () => {
  return (
    <Box px={"1.5rem"} mt={"4rem"}>
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={"9rem"}
      >
        <Box position={"relative"}>
          <Image src={fourPoint} alt="arrow" width={96} height={96} />
        </Box>
        <Box position={"absolute"}>
          <Image src={Ellipse} alt="ellipse" width={72} height={72} />
        </Box>
        <Box position={"absolute"}>
          <Image src={checkmark} alt="checkmark" width={24} height={24} />
        </Box>
      </Box>
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"4rem"}
      >
        <Text
          fontSize={"16px"}
          fontWeight={700}
          color={"#000"}
          fontStyle={"normal"}
        >
          PIN Set Successful
        </Text>
        <Text
          fontSize={"13px"}
          fontWeight={500}
          color={"#000"}
          fontStyle={"normal"}
          textAlign={"center"}
          mt={"1rem"}
        >
          Your security pin has been set successfully.
        </Text>
      </Flex>
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={"1rem"}
        flexDir={"column"}
        mt={"15rem"}
        width={"100%"}
      >
        <Button
          padding={"16px 96px 14px 96px"}
          width={"100%"}
          mt={"4rem"}
          borderRadius={"8px"}
          color={"#fff"}
          fontSize={"16px"}
          fontWeight={500}
          textAlign={"center"}
          backgroundColor={"#000A4A"}
        >
          <Link href="/component/onboarding/home">Okay!</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default PinSuccessful;
