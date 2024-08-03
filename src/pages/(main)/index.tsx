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
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Show,
  Hide,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { IoTicket } from "react-icons/io5";
import WelcomeBG from "@/components/animated-bg/welcome-bg";
import { motion } from "framer-motion";
import useLoading from "@/hooks/useLoading";

const LandingPage = () => {
  const auth = useAuth();
  const toast = useToast();
  const { isLoaded } = useLoading();
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

  const paddingTopForSelamatDatang =
    auth.status !== "authenticated"
      ? { base: "13rem", md: "5rem", lg: "11rem" }
      : { base: "8rem", md: "5rem", lg: "3rem" };

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

  return (
    <WelcomeBG>
      <Stack
        alignItems={"center"}
        gap={"15rem"}
        // justifyContent={
        //   auth.status === "authenticated" ? "flex-start" : "space-around"
        // }
        pt={auth.status === "authenticated" ? "8rem" : "0"}
        minH={"100vh"}
      >
        {auth.status !== "loading" && isLoaded && (
          <Stack
            align={"center"}
            color={"text.primary"}
            fontWeight={"700"}
            gap={{ base: 0, lg: 2 }}
            pt={paddingTopForSelamatDatang}
          >
            {auth.status === "authenticated" ? (
              <Heading
                as={motion.h1}
                fontFamily={"Luthier"}
                fontSize={{
                  base: "1.5rem",
                  md: "2.8rem",
                  lg: "3rem",
                }}
                // textShadow={"0 0 5rem #000000"}

                // anims
                variants={{
                  initial: {
                    opacity: 0,
                    y: -50,
                  },
                  entry: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 1,
                      duration: 1,
                    },
                  },
                }}
                initial="initial"
                whileInView={"entry"}
              >
                SELAMAT DATANG,
              </Heading>
            ) : (
              <Heading
                as={motion.h1}
                fontFamily={"Luthier"}
                fontSize={{
                  base: "1.5rem",
                  md: "2.8rem",
                  lg: "3rem",
                }}
                // textShadow={"0 0 5rem #000000"}
                // anims
                variants={{
                  initial: {
                    opacity: 0,
                    y: -50,
                  },
                  entry: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 1,
                      duration: 1,
                    },
                  },
                }}
                initial="initial"
                whileInView={"entry"}
              >
                HALO! SELAMAT DATANG,
              </Heading>
            )}
            <Heading
              as={motion.h1}
              fontFamily={"Luthier"}
              fontSize={{ base: "1.5rem", md: "2.5rem", lg: "2.8rem" }}
              // textShadow={"0 0 5rem #000000"}

              // anims
              variants={{
                initial: {
                  opacity: 0,
                  y: -50,
                },
                entry: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1.5,
                    duration: 1,
                  },
                },
              }}
              initial="initial"
              whileInView={"entry"}
            >
              MAXIMERS!
            </Heading>
          </Stack>
        )}
        {auth.status !== "authenticated" && (
          <>
            <Button
              // as={Link}
              // to={`https://sso.umn.ac.id/cas/login?service=${
              //   import.meta.env.VITE_FRONTEND_URL + "/auth/sso"
              // }`}
              position={"absolute"}
              zIndex={1}
              bottom={180}
              bgColor={"button.primary"}
              p={8}
              px={"2rem"}
              variant={"ghost"}
              transition={"0.3s all"}
              color={"text.tertiary"}
              rounded={"xl"}
              _hover={{ bgColor: "#3A0025", transform: "scale(1.25)" }}
              shadow={"0 0 5rem #ffffff80"}
              // mb={{ base: 0, md: 10 }}
              mt={"5rem"}
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
    </WelcomeBG>
  );
};
export default LandingPage;
