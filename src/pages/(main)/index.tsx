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
  Show,
  Hide,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "@/router";
import { useEffect } from "react";
import React from "react";
import { IoTicket } from "react-icons/io5";

const LandingPage = () => {
  const auth = useAuth();
  const nav = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mobileSize, setMobileSize] = React.useState("xs");
  const [desktopSize, setDesktopSize] = React.useState("xl");

  const handleClickMobile = (newSize: string) => {
    toast({
      position: "top",
      duration: 4000,
      render: () => (
        <Stack
          mt={"1rem"}
          // mr={"1rem"}
          p={4}
          w={"22rem"}
          bg="white"
          shadow={"xl"}
          rounded={"lg"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
        >
          <IoTicket color={"#44002B"} size={"4rem"} />
          <Stack direction={"column"}>
            <Text
              fontSize={"0.8rem"}
              fontFamily={"Lexend"}
              fontWeight={"semibold"}
              color={"text.primary"}
            >
              Buy Ticket for MalPun
            </Text>
            <Text
              fontSize={"0.8rem"}
              fontFamily={"Lexend"}
              fontWeight={"base"}
              color={"text.primary"}
            >
              Get your tickets and attend the Malam Puncak MAXIMA 2024 soon!
            </Text>
          </Stack>
        </Stack>
      ),
      // title: "Buy Ticket for MalPun",
      // description:
      //   "Get your tickets and attend the Malam Puncak MAXIMA 2024 soon!",
      // status: "success",
      // duration: 9000,
      // isClosable: true,
    });
    setMobileSize(newSize);
    onClose();
  };

  const handleClickDesktop = (newSize: string) => {
    toast({
      position: "bottom-right",
      duration: 9000,
      render: () => (
        <Stack
          mb={"1rem"}
          mr={"1rem"}
          p={4}
          w={"30rem"}
          bg="white"
          shadow={"xl"}
          rounded={"lg"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
        >
          <IoTicket color={"#44002B"} size={"5rem"} />
          <Stack direction={"column"}>
            <Text
              fontSize={"1.2rem"}
              fontFamily={"Lexend"}
              fontWeight={"semibold"}
              color={"text.primary"}
            >
              Buy Ticket for MalPun
            </Text>
            <Text
              fontSize={"1rem"}
              fontFamily={"Lexend"}
              fontWeight={"base"}
              color={"text.primary"}
            >
              Get your tickets and attend the Malam Puncak MAXIMA 2024 soon!
            </Text>
          </Stack>
        </Stack>
      ),
      // title: "Buy Ticket for MalPun",
      // description:
      //   "Get your tickets and attend the Malam Puncak MAXIMA 2024 soon!",
      // status: "success",
      // duration: 9000,
      // isClosable: true,
    });
    setDesktopSize(newSize);
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
              px={"2rem"}
              variant={"ghost"}
              transition={"0.3s all"}
              color={"text.tertiary"}
              rounded={"xl"}
              _hover={{ bgColor: "#3A0025", transform: "scale(1.25)" }}
              shadow={"0 0 5rem #ffffff80"}
              mb={{ base: 0, md: 10 }}
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <Text
                fontFamily={"Lexend"}
                fontWeight={"400"}
                fontSize={{ base: "lg", md: "x-large" }}
              >
                Start Your Adventure!
              </Text>
            </Button>
            <Show above="md">
              <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={desktopSize}
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

                  <ModalFooter justifyContent={"center"} pb={"2rem"} gap={4}>
                    <Button
                      as={Link}
                      to={`https://sso.umn.ac.id/cas/login?service=${
                        import.meta.env.VITE_FRONTEND_URL + "/auth/sso"
                      }`}
                      bgColor={"button.primary"}
                      // mr={3}
                      onClick={onClose}
                      // onClick={handleClickYes}
                      color={"text.tertiary"}
                      _hover={{ bgColor: "#3A0025" }}
                      px={"2rem"}
                    >
                      Iya Mahasiswa/i UMN 2024
                    </Button>
                    <Button
                      variant="ghost"
                      borderWidth={1}
                      borderColor={"button.primary"}
                      color={"text.primary"}
                      as={Link}
                      to={`/malpun`}
                      onClick={() => handleClickDesktop(desktopSize)}
                      px={"2rem"}
                    >
                      Bukan Mahasiswa/i UMN 2024
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Show>
            <Hide above="md">
              <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={mobileSize}
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
                    <Stack>
                      <Button
                        as={Link}
                        to={`https://sso.umn.ac.id/cas/login?service=${
                          import.meta.env.VITE_FRONTEND_URL + "/auth/sso"
                        }`}
                        bgColor={"button.primary"}
                        onClick={onClose}
                        // onClick={handleClickYes}
                        color={"text.tertiary"}
                        _hover={{ bgColor: "#3A0025" }}
                        w={"16rem"}
                      >
                        Iya Mahasiswa/i UMN 2024
                      </Button>
                      <Button
                        variant="ghost"
                        borderWidth={1}
                        borderColor={"button.primary"}
                        color={"text.primary"}
                        as={Link}
                        to={`/malpun`}
                        onClick={() => handleClickMobile(mobileSize)}
                        w={"16rem"}
                      >
                        Bukan Mahasiswa/i UMN 2024
                      </Button>
                    </Stack>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Hide>
          </>
        )}
      </Stack>
    </>
  );
};
export default LandingPage;
