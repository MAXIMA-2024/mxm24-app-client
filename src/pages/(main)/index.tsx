import useAuth from "@/hooks/useAuth";
import {
  Heading,
  Stack,
  Text,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "@/router";
import { useEffect } from "react";
import React from "react";

const LandingPage = () => {
  const auth = useAuth();
  const nav = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    toast({
      title: "Buy Ticket for MalPun",
      description:
        "Get your tickets and attend the Malam Puncak MAXIMA 2024 soon!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    onClose();
  };

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);

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
        gap={"15rem"}
        // justifyContent={
        //   auth.status === "authenticated" ? "flex-start" : "space-around"
        // }
        pt={auth.status === "authenticated" ? "8rem" : "0"}
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
              fontSize={{
                base: "2rem",
                md: "4rem",
                lg: "5rem",
                xl: "5rem",
              }}
              // textShadow={"0 0 5rem #000000"}
            >
              Selamat Datang
            </Heading>
          ) : (
            <Heading
              fontFamily={"Luthier"}
              fontSize={{ base: "2rem", md: "4rem", lg: "5rem", xl: "6.5rem" }}
              // textShadow={"0 0 5rem #000000"}
            >
              Halo! Selamat Datang
            </Heading>
          )}
          <Heading
            fontFamily={"Luthier"}
            fontSize={{ base: "2rem", md: "4rem", lg: "6rem", xl: "6.5rem" }}
            // textShadow={"0 0 5rem #000000"}
          >
            Maximers!
          </Heading>
        </Stack>
        {auth.status === "authenticated" && (
          <>
            <Button
              // as={Link}
              // to={`https://sso.umn.ac.id/cas/login?service=${
              //   import.meta.env.VITE_FRONTEND_URL + "/auth/sso"
              // }`}
              bgColor={"button.primary"}
              p={8}
              px={["3rem", "3rem", "5rem", "5rem"]}
              variant={"ghost"}
              transition={"0.3s"}
              color={"text.tertiary"}
              rounded={"xl"}
              _hover={{ bgColor: "#3A0025" }}
              mb={{ base: 0, md: 10 }}
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <Text
                fontFamily={"Lexend"}
                fontWeight={"400"}
                fontSize={"x-large"}
              >
                Login With SSO
              </Text>
            </Button>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              isCentered={true}
              motionPreset="slideInBottom"
            >
              {overlay}
              <ModalContent>
                {/* <ModalHeader>Modal Title</ModalHeader> */}
                <ModalCloseButton />
                <ModalBody>
                  <Text
                    fontFamily={"Lexend"}
                    py={"3rem"}
                    textAlign={"center"}
                    fontSize={"1.6rem"}
                  >
                    Apakah kamu Mahasiswa/i UMN angkatan 2024?
                  </Text>
                </ModalBody>

                <ModalFooter justifyContent={"center"} pb={"2rem"}>
                  <Button
                    as={Link}
                    to={`https://sso.umn.ac.id/cas/login?service=${
                      import.meta.env.VITE_FRONTEND_URL + "/auth/sso"
                    }`}
                    bgColor={"button.primary"}
                    mr={3}
                    onClick={onClose}
                    // onClick={handleClickYes}
                    color={"text.tertiary"}
                    _hover={{ bgColor: "#3A0025" }}
                  >
                    Iya Mahasiswa 2024
                  </Button>
                  <Button
                    variant="ghost"
                    borderWidth={1}
                    borderColor={"button.primary"}
                    color={"text.primary"}
                    as={Link}
                    to={`/malpun`}
                    // onClick={onClose}
                    onClick={handleClick}
                  >
                    Bukan Mahasiswa 2024
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )}
      </Stack>
    </>
  );
};
export default LandingPage;
