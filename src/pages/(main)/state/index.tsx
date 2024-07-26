import { Heading, Stack } from "@chakra-ui/react";
import Boag from "@/components/boag"; // Assuming the correct import path for the boag component
import { wrap } from "framer-motion";

const State = () => {
  return (
    <Stack bgColor={"red.400"} minH={"100vh"} w={"100%"}>
      <Heading>STATE masih nunggu</Heading>
      <Stack
        direction={"row"}
        px={"12rem"}
        flexWrap={"wrap"}
        justify={"space-evenly"}
      >
        <Boag />
        <Boag />
        <Boag />
      </Stack>
    </Stack>
  );
};

export default State;
