"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import One from "./component/onboarding/one/page";

export default function Home() {
  const isMobile = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 640px)",
  });
  return (
    <ChakraProvider>
      <>{isMobile && <One />}</>
    </ChakraProvider>
  );
}
