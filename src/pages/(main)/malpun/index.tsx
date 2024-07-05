import { Heading, Stack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Malpun = () => {
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={{ base: "start", lg: "space-around" }}
        minH={"100vh"}
        bgImage={{
          base: "/bg/malpun-mobile.png",
          lg: "/bg/malpun-desktop.png",
        }}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
      >
        <Stack
          align={"center"}
          color={"text.primary"}
          fontWeight={"900"}
          gap={{ base: 0, lg: 2 }}
          pt={{ base: "20rem", md: "18rem", lg: "2.5rem", xl: "2.5rem" }}
        >
          <Heading
            fontFamily={"Luthier"}
            fontSize={{ base: "2rem", md: "4rem", lg: "5rem", xl: "6.5rem" }}
            textShadow={"0 0 5rem #000000"}
            color={"text.tertiary"}
          >
            MALAM PUNCAK
          </Heading>
          <Heading
            fontFamily={"Luthier"}
            fontSize={{
              base: "2rem",
              md: "2.5rem",
              lg: "3.5rem",
              xl: "5rem",
            }}
            textShadow={"0 0 5rem #000000"}
            color={"button.yellow"}
          >
            MAXIMA 2024
          </Heading>
        </Stack>
        <Link to="/login">
          <Button
            bgColor={"button.primary"}
            p={{ base: 5, md: 8, lg: 10 }}
            py={{ base: 0, md: 8, lg: 12 }}
            px={{ base: "2rem", md: "4rem", lg: "10rem" }}
            variant={"ghost"}
            transition={"0.3s"}
            color={"text.tertiary"}
            rounded={"xl"}
            _hover={{ bgColor: "#3A0025" }}
            mt={{ base: 10, lg: 0 }}
            shadow={"0 0 5rem #000000"}
          >
            <Text
              fontFamily={"Lexend"}
              fontWeight={"400"}
              fontSize={{ base: "medium", md: "larger", lg: "xx-large" }}
            >
              KLAIM TIKET
            </Text>
          </Button>
        </Link>
      </Stack>
    </>
  );
};

export default Malpun;
