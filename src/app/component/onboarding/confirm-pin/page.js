import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import "../signUp/signUp.css";
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
          <Image src={arrowLeft} alt="arrow" width={24} height={24} />
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
          <Flex
            gap={".2rem"}
            mt={"4rem"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box>
              <Image src={setThree} alt="set" width={116} height={44} />
            </Box>
            <Box width={"8px"} height={"1px"} backgroundColor={"#8F9BB3"}></Box>
            <Box>
              <Image src={setThree} alt="set" width={116} height={44} />
            </Box>
          </Flex>
        </Box>
        <Box
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
        </Box>
      </Box>
    </Box>
  );
};

export default Confirm;
