import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import "../signUp/signUp.css";
import arrowLeft from "../../../../app/assets/arrowLeft.svg";
import setThree from "../../../../app/assets/setThree.svg";
import setTwo from "../../../../app/assets/setTwo.svg";
import Link from "next/link";

const Phone2 = () => {
  return (
    <Box
      px={"1.5rem"}
      mt={"4rem"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
    >
      <Flex gap={"2rem"}>
        <Image src={arrowLeft} alt="arrow" width={24} height={24} />
        <Text
          fontSize={"16px"}
          fontWeight={700}
          color={"#000a4a"}
          fontStyle={"normal"}
        >
          Verify Phone Number
        </Text>
      </Flex>
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          fontSize={"14px"}
          mt={"3rem"}
          fontWeight={500}
          color={"#4f4f4f"}
          fontStyle={"normal"}
          textAlign={"center"}
        >
          Please input the five digit code that was sent to your phone number
          below
        </Text>
        <Flex gap={".2rem"} mt={"4rem"}>
          <Box>
            <Image src={setThree} alt="set" width={116} height={44} />
          </Box>
          <Box>
            <Image src={setTwo} alt="set" width={93} height={44} />
          </Box>
        </Flex>
        <Text
          fontSize={"14px"}
          fontWeight={500}
          color={"#9F56D4"}
          fontStyle={"normal"}
          textAlign={"center"}
          mt={"1rem"}
        >
          0:00
        </Text>

        <Text
          fontSize={"14px"}
          fontWeight={500}
          color={"#4f4f4f"}
          fontStyle={"normal"}
          textAlign={"center"}
          width={"80%"}
          mt={"2rem"}
        >
          Having trouble receiving SMS?{" "}
          <span style={{ color: "#9F56D4" }}> Resend</span> Or try other options
          below{" "}
        </Text>

        <Flex
          width={"100%"}
          justifyContent={"center"}
          px={"1.5rem"}
          gap={"1rem"}
          mt={"70%"}
        >
          <Button
            padding={"14px 40px 14px 40px"}
            width={"80%"}
            mt={"4rem"}
            borderRadius={"12px"}
            color={"#000A4A"}
            fontSize={"16px"}
            fontWeight={500}
            textAlign={"center"}
            border={"1px solid #000A4A"}
          >
            <Link href="/component/onboarding/phone1">Call me</Link>
          </Button>
          <Button
            padding={"14px 40px 14px 40px"}
            width={"80%"}
            mt={"4rem"}
            borderRadius={"12px"}
            color={"#fff"}
            fontSize={"16px"}
            fontWeight={500}
            textAlign={"center"}
            backgroundColor={"#000A4A"}
          >
            <Link href="/component/onboarding/phone1">Whatsapp</Link>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Phone2;
