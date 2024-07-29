import { Button, Heading, Img, Stack } from "@chakra-ui/react";
import Boag from "@/components/Boag";
import { wrap } from "framer-motion";

const State = () => {
  return (
    <Stack
      bgImage={{ base: "/bg/waves-mobile.png", lg: "/bg/waves-desktop.png" }}
      bgSize={"cover"}
      minH={"100vh"}
      w={"100%"}
    >
      <Stack
        w={"100%"}
        pt={"12rem"}
        pr={[0, 0, "0rem", "4rem", "6rem"]}
        align={{ base: "center", lg: "end" }}
        // bgColor={"blue.200"}
      >
        <Stack
          w={["32rem", "32rem", "46rem", "24rem", "46rem"]}
          align={"center"}
        >
          <Img
            src={"/state/banner.png"}
            w={["16rem", "24rem", "32rem", "32rem", "32rem"]}
            pb={["24rem", "16rem", "10rem", 0, 0]}
          />
          <Button
            w={{ base: "16rem", md: "20rem" }}
            bgColor={"#44002B"}
            textColor={"white"}
            fontFamily={"Lexend"}
            fontWeight={"light"}
            fontSize={"lg"}
          >
            Pilih UKM dan Komunitas
          </Button>
          <Button
            w={"20rem"}
            bgColor={"#44002B"}
            textColor={"white"}
            fontFamily={"Lexend"}
            fontWeight={"light"}
            fontSize={"lg"}
            display={{ base: "none", lg: "flex" }}
          >
            Lihat State Pilihanmu!
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        pt={{ base: "30rem", md: "36rem" }}
        px={["0rem", "0rem", "6rem", "6rem", "6rem"]}
        pb={"6rem"}
        flexWrap={"wrap"}
        justify={"space-around"}
      >
        <Boag />
        <Boag />
        <Boag />
      </Stack>
    </Stack>
  );
};

export default State;
