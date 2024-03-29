import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import "../two/styleTwo.css";
import logoBlue from "../../../../app/assets/logoBlue.svg";
import Link from "next/link";

const Two = () => {
  return (
    <Box className="headerIMG2" color={"#fff"} position={"fixed"}>
      <Box px={"1.5rem"} mt={"3rem"} position={"relative"}>
        <Image src={logoBlue} alt="logo" width={154} height={20} />
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
            A super secure way to pay your bills
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            color={"#fff"}
            fontStyle={"normal"}
            mt={"1rem"}
          >
            Pay your bills with the cheapest rates in town.
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
              <Link href="/component/onboarding/three">Next</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Two;
