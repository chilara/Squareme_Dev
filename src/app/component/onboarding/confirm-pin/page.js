import React from "react";
import { Box, Text, Flex, Button, Input } from "@chakra-ui/react";
import Image from "next/image";
import "../signUp/signUp.css";
import Link from "next/link";
import arrowLeft from "../../../../app/assets/arrowLeft.svg";
import setThree from "../../../../app/assets/setThree.svg";

export const numbers = [
  {
    id: "1",
    digit: "1",
  },
  {
    id: "2",
    digit: "2",
  },
  {
    id: "3",
    digit: "3",
  },
  {
    id: "4",
    digit: "4",
  },
  {
    id: "5",
    digit: "5",
  },
  {
    id: "6",
    digit: "6",
  },
  {
    id: "7",
    digit: "7",
  },
  {
    id: "8",
    digit: "8",
  },
  {
    id: "9",
    digit: "9",
  },
  {
    id: ".",
    digit: ".",
  },
  {
    id: "0",
    digit: "0",
  },
  {
    id: "12",
    digit: "<",
  },
];

const Confirm = () => {
  return (
    <Box px={"1.5rem"}>
      <Box
        mt={"4rem"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
      >
        <Flex gap={"2rem"}>
          <Link href="/component/onboarding/secure-account">
            <Image src={arrowLeft} alt="arrow" width={24} height={24} />
          </Link>
          <Text
            fontSize={"16px"}
            fontWeight={700}
            color={"#000a4a"}
            fontStyle={"normal"}
          >
            Confirm Pin
          </Text>
        </Flex>
        <Box display={"flex"} flexDir={"column"} justifyContent={"center"}>
          <Text
            fontSize={"14px"}
            mt={"3rem"}
            fontWeight={500}
            color={"#4f4f4f"}
            fontStyle={"normal"}
            textAlign={"left"}
          >
            Input your six digit PIN again
          </Text>
          <Flex alignItems={"center"} gap={".3rem"} mt={"2rem"}>
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
            </Flex>
            <Box
              width={"8px"}
              height={"1px"}
              backgroundColor={"#8F9BB3"}
              mt={"2.5rem"}
            ></Box>
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
            </Flex>
          </Flex>
        </Box>
        <Button
          display={"flex"}
          flexWrap={"wrap"}
          width={"100%"}
          mt={"7rem"}
          gap={"1rem"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          {numbers?.map((item, index) => (
            <Flex
              key={index}
              padding={"16px 32px"}
              color={index === 11 && 9 ? "#BDBDBD" : "#000A4A"}
              fontSize={"21px"}
              fontWeight={400}
              fontStyle={"normal"}
              ml={index === 10 ? "12px" : "0"}
            >
              {item?.digit}
            </Flex>
          ))}
        </Button>
      </Box>
    </Box>
  );
};

export default Confirm;
