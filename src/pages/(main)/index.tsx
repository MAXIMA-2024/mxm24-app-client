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
          md: "/bg/welcome-page-desktop.png",
        }}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
      >
        <Stack align={"center"} color={"text.primary"} fontWeight={"700"}>
          <Heading
            fontFamily={"Luthier"}
            fontSize={{ base: "1.75rem", md: "4rem", lg: "6rem", xl: "7.5rem" }}
            // size={{ base: "xl", sm: "4xl" }}
          >
            Halo! Selamat Datang
          </Heading>
          <Heading
            fontFamily={"Luthier"}
            fontSize={{ base: "4rem", sm: "7.5rem" }}
            // size={"4xl"}
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
