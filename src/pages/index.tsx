import { Heading, Stack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={"space-around"}
        minH={"100vh"}
        bgImage={{
          base: "/bg/welcome-page-mobile.png",
          lg: "/bg/welcome-page-desktop.png",
        }}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
      >
        <Stack
          align={"center"}
          color={"text.primary"}
          fontWeight={"700"}
          gap={{ base: 0, lg: 2 }}
          pt={{ base: "7.5rem", md: "0rem", lg: "0rem", xl: "0rem" }}
        >
          <Heading
            fontFamily={"Luthier"}
            fontSize={{ base: "2rem", md: "4rem", lg: "6rem", xl: "7.5rem" }}
            textShadow={"0 0 5rem #000000"}
          >
            Halo! Selamat Datang
          </Heading>
          <Heading
            fontFamily={"Luthier"}
            fontSize={{ base: "2rem", md: "4rem", lg: "6rem", xl: "7.5rem" }}
            textShadow={"0 0 5rem #000000"}
          >
            Maximers!
          </Heading>
        </Stack>
        <Button
          bgColor={"button.primary"}
          p={8}
          px={["3rem", "3rem", "5rem", "5rem"]}
          variant={"ghost"}
          transition={"0.3s"}
          color={"text.tertiary"}
          rounded={"xl"}
          _hover={{ bgColor: "#3A0025" }}
          mb={{ base: 0, md: 10 }}
        >
          <Link to="/login">
            <Text fontFamily={"Lexend"} fontWeight={"400"} fontSize={"x-large"}>
              Login With SSO
            </Text>
          </Link>
        </Button>
      </Stack>
    </>
  );
};

export default LandingPage;
