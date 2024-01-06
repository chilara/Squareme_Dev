import React from "react";
import { Box, Text, Flex, Button, Input, InputGroup } from "@chakra-ui/react";
import Image from "next/image";
import "../signUp/signUp.css";
import arrowLeft from "../../../../app/assets/arrowLeft.svg";
import Link from "next/link";

const Phone1 = () => {
  return (
    <Box
      px={"1.5rem"}
      mt={"4rem"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
    >
      <Flex gap={"2rem"}>
        <Link href="/component/onboarding/signUp">
          <Image src={arrowLeft} alt="arrow" width={24} height={24} />
        </Link>

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
        <Flex mt={"2.5rem"} gap={".3rem"}>
          <Input
            fontSize={"13px"}
            fontWeight={500}
            color={"#9F56D4"}
            width={44}
            height={44}
            borderRadius={"8px"}
            boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
            padding={"18px"}
            backgroundColor={"#F2F8FF"}
          />
          <Input
            fontSize={"13px"}
            fontWeight={500}
            color={"#9F56D4"}
            width={44}
            height={44}
            borderRadius={"8px"}
            boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
            padding={"18px"}
            backgroundColor={"#F2F8FF"}
          />
          <Input
            fontSize={"13px"}
            fontWeight={500}
            color={"#9F56D4"}
            width={44}
            height={44}
            borderRadius={"8px"}
            boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
            padding={"18px"}
            backgroundColor={"#F2F8FF"}
          />
          <Input
            fontSize={"13px"}
            fontWeight={500}
            color={"#9F56D4"}
            width={44}
            height={44}
            borderRadius={"8px"}
            boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
            padding={"18px"}
            backgroundColor={"#F2F8FF"}
          />
          <Input
            fontSize={"13px"}
            fontWeight={500}
            color={"#9F56D4"}
            width={44}
            height={44}
            borderRadius={"8px"}
            boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
            padding={"18px"}
            backgroundColor={"#F2F8FF"}
          />
        </Flex>

        <Text
          fontSize={"14px"}
          fontWeight={500}
          color={"#9F56D4"}
          fontStyle={"normal"}
          textAlign={"center"}
          mt={"1rem"}
        >
          0:59
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
            color={"#c4c4c4"}
            fontSize={"16px"}
            fontWeight={500}
            textAlign={"center"}
            border={"1px solid #B6B6B6"}
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
            backgroundColor={"#D3D3D3"}
          >
            <Link href="/component/onboarding/phone1">Whatsapp</Link>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Phone1;
