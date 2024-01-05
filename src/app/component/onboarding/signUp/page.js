import React from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import Image from "next/image";
import "../signUp/signUp.css";
import arrowLeft from "../../../../app/assets/arrowLeft.svg";
import flag from "../../../../app/assets/flag.svg";
import arrowDown from "../../../../app/assets/arrowDown.svg";
import gift from "../../../../app/assets/gift.svg";
import Link from "next/link";

const SignUp = () => {
  return (
    <Box px={"1.5rem"} mt={"4rem"}>
      <Flex gap={"2rem"}>
        <Image src={arrowLeft} alt="arrow" width={24} height={24} />
        <Text
          fontSize={"16px"}
          fontWeight={700}
          color={"#000a4a"}
          fontStyle={"normal"}
        >
          Enter Your Phone Number
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
          width={"70%"}
        >
          We'll send an SMS with a code to verify your phone number
        </Text>

        <Flex
          width={"100%"}
          gap={"1rem"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <InputGroup
            color={"#9F56D4"}
            borderRadius={"8px"}
            border={"1px solid #D0D5DD"}
            boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
            mt={"2rem"}
            padding={"18px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            // gap={"2rem"}
            width={"40%"}
          >
            <InputLeftElement mt={"1.2rem"} ml={"15%"}>
              <Image src={flag} alt="flag" width={20} height={20} />
            </InputLeftElement>
            <Input
              placeholder="+234"
              fontSize={"13px"}
              fontWeight={500}
              color={"#9F56D4"}
              display={"flex"}
              alignItems={"center"}
              width={"50%"}
              // ml={"10%"}
            />
            <InputRightElement mt={"1.4rem"} mr={"30%"}>
              <Image src={arrowDown} alt="arrowdown" width={12} height={12} />
            </InputRightElement>
          </InputGroup>
          <InputGroup
            // color={"#979797"}
            borderRadius={"8px"}
            border={"1px solid #D0D5DD"}
            boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
            mt={"2rem"}
            width={"55%"}
            padding={"18px"}
            display={"flex"}
            alignItems={"center"}
          >
            <Input
              placeholder="Phone Number"
              fontSize={"13px"}
              fontWeight={500}
              // color={"#979797"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              border={"none"}
              width={"70%"}
            />
          </InputGroup>
        </Flex>

        <InputGroup
          color={"#9F56D4"}
          borderRadius={"8px"}
          border={"1px solid #D0D5DD"}
          boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
          mt={"1.5rem"}
          padding={"18px"}
          display={"flex"}
          alignItems={"center"}
        >
          <Input
            placeholder="Have a referral ID?"
            fontSize={"13px"}
            fontWeight={500}
            color={"#9F56D4"}
          />
          <InputRightElement px={"2rem"} mt={"1rem"}>
            <Image src={gift} alt="gift" width={20} height={20} />
          </InputRightElement>
        </InputGroup>

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
            <Link href="/component/onboarding/phone1">Proceed</Link>
          </Button>
          <Text
            fontSize={"14px"}
            fontWeight={500}
            color={"#4f4f4f"}
            fontStyle={"normal"}
            textAlign={"center"}
          >
            Already have an account?{" "}
            <span style={{ color: "#9F56D4" }}>Login here</span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
