import useAuth from "@/hooks/useAuth";
import { Heading, Stack, Text, Button, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "@/router";
import { useEffect } from "react";

const LandingPage = () => {
  const auth = useAuth();
  const nav = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (auth.status === "authenticated") {
      if (auth.user?.role === "unknown") {
        return nav("/auth/onboarding");
      }

      if (auth.user?.role !== "mahasiswa") {
        toast({
          title: "Error!",
          description: `You already registered as ${auth.user?.role}. Please login in internal website to continue.`,
          status: "error",
          isClosable: true,
        });

        auth.logout();
        return;
      }

      return nav("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={
          auth.status === "authenticated" ? "flex-start" : "space-around"
        }
        pt={auth.status === "authenticated" ? "10rem" : "0"}
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
          pt={{ base: "7.5rem", md: "0rem", lg: "2.5rem", xl: "2.5rem" }}
        >
          {auth.status === "authenticated" ? (
            <Heading
              fontFamily={"Luthier"}
              fontSize={{ base: "2rem", md: "4rem", lg: "5rem", xl: "6.5rem" }}
              textShadow={"0 0 5rem #000000"}
            >
              Selamat Datang
            </Heading>
          ) : (
            <Heading
              fontFamily={"Luthier"}
              fontSize={{ base: "2rem", md: "4rem", lg: "5rem", xl: "6.5rem" }}
              textShadow={"0 0 5rem #000000"}
            >
              Halo! Selamat Datang
            </Heading>
          )}
          <Heading
            fontFamily={"Luthier"}
            fontSize={{ base: "2rem", md: "4rem", lg: "6rem", xl: "7.5rem" }}
            textShadow={"0 0 5rem #000000"}
          >
            Maximers!
          </Heading>
        </Stack>
        {auth.status !== "authenticated" && (
          <Button
            as={Link}
            to={`https://sso.umn.ac.id/cas/login?service=${
              import.meta.env.VITE_FRONTEND_URL + "/auth/sso"
            }`}
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
            <Text fontFamily={"Lexend"} fontWeight={"400"} fontSize={"x-large"}>
              Login With SSO
            </Text>
          </Button>
        )}
      </Stack>
    </>
  );
};
export default LandingPage;
