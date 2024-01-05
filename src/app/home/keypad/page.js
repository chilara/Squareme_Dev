import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import barcode from "../../../app/assets/barcode.svg";
import clock from "../../../app/assets/clock.svg";
import home from "../../../app/assets/home.svg";
import category from "../../../app/assets/category.svg";
import profile from "../../../app/assets/profile.svg";

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

const Keypad = () => {
  return (
    <Box
      px={"1.5rem"}
      backgroundColor={"#0C0C26"}
      minHeight={"100vh"}
      position={"fixed"}
    >
      <Box display={"flex"} flexDir={"column"} justifyContent={"center"}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Image src={barcode} alt="barcode" width={24} height={24} />
          <Box
            borderRadius={"12px"}
            backgroundColor={" rgba(159, 86, 212, 0.10)"}
            padding={"18px 38px 18px 38px"}
            mt={"3.5rem"}
          >
            <Text
              fontSize={"12px"}
              fontWeight={400}
              color={"#BDBDBD"}
              fontStyle={"normal"}
              textAlign={"center"}
            >
              Wallet Balance
            </Text>
            <Text
              fontSize={"17px"}
              fontWeight={700}
              color={"#fff"}
              fontStyle={"normal"}
              textAlign={"center"}
            >
              $5,200
            </Text>
          </Box>
          <Image src={clock} alt="clock" width={24} height={24} />
        </Box>
        <Box mt={"3rem"}>
          <Text
            fontSize={"64px"}
            fontWeight={400}
            color={"#fff"}
            fontStyle={"normal"}
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <span style={{ fontSize: "36px" }}>$</span>0
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          width={"100%"}
          mt={"3rem"}
          gap={"1rem"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          {numbers?.map((item, index) => (
            <Flex
              key={index}
              padding={"16px 32px"}
              color={"#BDBDBD"}
              fontSize={"21px"}
              fontWeight={400}
              fontStyle={"normal"}
              ml={index === 10 ? "12px" : "0"}
            >
              {item?.digit}
            </Flex>
          ))}
        </Box>
        <Flex width={"100%"} justifyContent={"center"} gap={"2rem"}>
          <Button
            padding={"14px 32px 12px 32px"}
            width={"40%"}
            mt={"2rem"}
            borderRadius={"12px"}
            color={"#949494"}
            fontSize={"16px"}
            fontWeight={500}
            textAlign={"center"}
            backgroundColor={"rgba(106, 106, 106, 0.30)"}
          >
            Request
          </Button>
          <Button
            padding={"14px 32px 12px 32px"}
            width={"40%"}
            mt={"2rem"}
            borderRadius={"12px"}
            color={"#949494"}
            fontSize={"16px"}
            fontWeight={500}
            textAlign={"center"}
            backgroundColor={"#28283A"}
          >
            Send
          </Button>
        </Flex>
        <Flex
          width={"100%"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"2rem"}
          mt={"2.5rem"}
        >
          <Link href="/home">
            <Image src={home} alt="home" width={24} height={24} />
          </Link>

          <Image src={category} alt="category" width={24} height={24} />
          <Image src={profile} alt="profile" width={24} height={24} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Keypad;
