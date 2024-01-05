import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import "../home/home.css";
import face from "../../../../app/assets/face.svg";

import scanbarcode from "../../../../app/assets/scanbarcode.svg";
import RedEllipse from "../../../../app/assets/RedEllipse.svg";
import notification from "../../../../app/assets/notification.svg";
import money from "../../../../app/assets/money.svg";
import note from "../../../../app/assets/note.svg";
import gift from "../../../../app/assets/gift.svg";
import creditcard from "../../../../app/assets/creditcard.svg";
import home2 from "../../../../app/assets/home2.svg";
import profile2 from "../../../../app/assets/profile2.svg";
import category2 from "../../../../app/assets/category2.svg";

const Home = () => {
  return (
    <Box px={"1.5rem"}>
      <Box display={"flex"} flexDir={"column"} mt={"3rem"} className="first">
        <Box display={"flex"} justifyContent={"space-between"} gap={"5rem"}>
          <Flex gap={"1rem"}>
            <Image src={face} alt="face" width={32} height={32} />
            <Flex flexDir={"column"}>
              <Text
                color={"#828282"}
                fontSize={"14px"}
                fontWeight={400}
                fontStyle={"normal"}
              >
                Hello,
              </Text>
              <Text
                color={"#0C0C26"}
                fontSize={"14px"}
                fontWeight={400}
                fontStyle={"normal"}
              >
                David Oloye
              </Text>
            </Flex>
          </Flex>
          <Box gap={".5rem"} display={"flex"} alignItems={"center"}>
            <Box backgroundColor={"#fff"} padding={"6px"} borderRadius={"20px"}>
              <Image
                src={scanbarcode}
                alt="scan-barcode"
                width={20}
                height={20}
              />
            </Box>
            <Box
              backgroundColor={"#fff"}
              padding={"6px"}
              borderRadius={"20px"}
              position={"relative"}
            >
              <Image
                src={notification}
                alt="notification"
                width={20}
                height={20}
              />
            </Box>
            <Box
              padding={"6px"}
              borderRadius={"20px"}
              position={"absolute"}
              right={45}
              top={55}
            >
              <Image src={RedEllipse} alt="red" width={6} height={6} />
            </Box>
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDir={"column"}
          gap={".5rem"}
          mt={"3rem"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            color={"#000a4a"}
            fontSize={"14px"}
            fontWeight={400}
            fontStyle={"normal"}
          >
            Wallet Balance
          </Text>
          {/* <Image src={money} alt="money" width={154} height={55} /> */}
          <Box
            backgroundColor={"rgba(244, 244, 244, 0.10)"}
            backdropBlur={"blur(2.5px)"}
          >
            <Text
              color={"#828282"}
              fontSize={"14px"}
              fontWeight={400}
              fontStyle={"normal"}
            >
              $xxxxx
            </Text>
          </Box>
        </Box>
        <Flex width={"100%"} justifyContent={"center"} gap={"1rem"}>
          <Button
            padding={"14px 32px 12px 32px"}
            width={"40%"}
            mt={"2rem"}
            borderRadius={"12px"}
            color={"#fff"}
            fontSize={"16px"}
            fontWeight={500}
            textAlign={"center"}
            backgroundColor={"#000a4a"}
          >
            Funds
          </Button>
          <Button
            padding={"14px 32px 12px 32px"}
            width={"40%"}
            mt={"2rem"}
            borderRadius={"12px"}
            color={"#747474"}
            fontSize={"16px"}
            fontWeight={500}
            textAlign={"center"}
            backgroundColor={"#e1e1e1"}
          >
            Withdraw
          </Button>
        </Flex>
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"left"}
          alignItems={"start"}
          mt={"3rem"}
        >
          <Text
            color={"#656565"}
            fontSize={"16px"}
            fontWeight={500}
            fontStyle={"normal"}
          >
            Quick Access
          </Text>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"start"}
            gap={"2rem"}
            mt={"1rem"}
          >
            {/* <Image src={bills} alt="bills" width={40} height={40} /> */}
            <Box display={"flex"} gap={".5rem"} flexDir={"column"}>
              <Box
                backgroundColor={"#F6EFFB"}
                padding={"6px"}
                borderRadius={"50%"}
                width={"40px"}
                height={"40px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  src={creditcard}
                  alt="creditcard"
                  width={20}
                  height={20}
                />
              </Box>
              <Text
                color={"#3e3e3e"}
                fontSize={"14px"}
                fontWeight={500}
                fontStyle={"normal"}
              >
                Pay Bills
              </Text>
            </Box>

            <Box display={"flex"} gap={".5rem"} flexDir={"column"}>
              <Box
                backgroundColor={"#F6EFFB"}
                padding={"6px"}
                borderRadius={"50%"}
                width={"40px"}
                height={"40px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={gift} alt="gift" width={20} height={20} />
              </Box>
              <Text
                color={"#3e3e3e"}
                fontSize={"14px"}
                fontWeight={500}
                fontStyle={"normal"}
              >
                Giftcards
              </Text>
            </Box>
            <Box display={"flex"} gap={".5rem"} flexDir={"column"}>
              <Box
                backgroundColor={"#F6EFFB"}
                padding={"6px"}
                borderRadius={"50%"}
                width={"40px"}
                height={"40px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  src={creditcard}
                  alt="creditcard"
                  width={20}
                  height={20}
                />
              </Box>
              <Text
                color={"#3e3e3e"}
                fontSize={"14px"}
                fontWeight={500}
                fontStyle={"normal"}
              >
                Cards
              </Text>
            </Box>
          </Box>
          <Text
            color={"#656565"}
            fontSize={"16px"}
            fontWeight={500}
            fontStyle={"normal"}
            mt={"2rem"}
          >
            Recent Transactions
          </Text>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDir={"column"}
          alignItems={"center"}
          mt={"2rem"}
          gap={".8rem"}
        >
          <Image src={note} alt="note" width={64} height={64} />
          <Text
            color={"#4f4f4f"}
            fontSize={"17px"}
            fontWeight={500}
            fontStyle={"normal"}
          >
            No recent transaction
          </Text>
          <Text
            color={"#9a9a9a"}
            fontSize={"12px"}
            fontWeight={500}
            fontStyle={"normal"}
            textAlign={"center"}
            width={"80%"}
          >
            You have not performed any transaction, you can start sending and
            requesting money from your contacts.
          </Text>
        </Box>

        <Flex
          width={"100%"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"2rem"}
          mt={"3.5rem"}
        >
          <Image src={home2} alt="home" width={24} height={24} />
          <Image src={category2} alt="category" width={24} height={24} />
          <Image src={profile2} alt="profile" width={24} height={24} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
