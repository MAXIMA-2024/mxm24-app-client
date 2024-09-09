import {
  Stack,
  Image,
  AvatarBadge,
  Avatar,
  Text,
  Button,
  Hide,
  Show,
  Menu,
  MenuButton,
  MenuList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  Tooltip,
  Switch,
} from "@chakra-ui/react";

import { IoLogOutOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import React, { useEffect } from "react";
import { IoTicket } from "react-icons/io5";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "@/router";
import { motion } from "framer-motion";
import useLoading from "@/hooks/useLoading";
import useSWR from "swr";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const NavBarData = [
  {
    title: "HoME",
    icon: "/myicons/home-icon.png",
    link: "/home",
  },
  {
    title: "STATE",
    icon: "/myicons/state-icon.png",
    link: "/state",
  },
  {
    title: "MalPun",
    icon: "/myicons/malpun-icon.png",
    link: "/malpun",
  },
  {
    title: "FAQ",
    icon: "/myicons/faq-icon.png",
    link: "/faq",
  },
  {
    title: "About Us",
    icon: "/myicons/aboutus-icon.png",
    link: "/aboutus",
  },
];

const MainLayoutDesktop = () => {
  const { data } = useSWR<Toggle[]>("/toggle");

  const auth = useAuth();
  const { isLoaded, isReducedMotion, setReducedMotion } = useLoading();
  const toast = useToast();
  const [size, setSize] = React.useState("xl");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const homeLink = () => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "home");
      if (!check || !check.toggle) {
        return false;
      }
      return true;
    }
    return false;
  };

  const isHomeLinkActive = homeLink();

  const stateLink = () => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "state");
      if (!check || !check.toggle) {
        return false;
      }
      return true;
    }
    return false;
  };

  const isStateLinkActive = stateLink();

  const malpunLink = () => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "malpun");
      if (!check || !check.toggle) {
        return false;
      }
      return true;
    }
    return false;
  };

  const isMalpunLinkActive = malpunLink();

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const paddingRight = auth.status !== "authenticated" ? { lg: 4, xl: 6 } : {};

  const handleClick = (newSize: string) => {
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
    });
    setSize(newSize);
    onClose();
  };

  return (
    <>
      {auth.status !== "loading" && isLoaded && (
        <Stack
          as={motion.div}
          direction={"row"}
          justifyContent={"center"}
          zIndex={30}
          position={"absolute"}
          pt={10}
          minW={"100vw"}
          // minH={"100vh"}
          flex={1}
          variants={{
            hidden: {
              y: -100,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 1.5,
                duration: 1,
              },
            },
          }}
          initial="hidden"
          // whileInView={"visible"}
          animate={"visible"}
        >
          {auth.status === "authenticated" && (
            <Stack
              bgColor={"rgba(255, 255, 255, 0.85)"}
              // p={5}
              py={{ lg: 4, xl: 4 }}
              pl={{ lg: 5, xl: 2 }}
              pr={paddingRight}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-around"}
              backdropFilter={"blur(10px)"}
              rounded={"full"}
              gap={{ lg: 3, xl: 12 }}
            >
              {/* Logo MAXIMA 2024 */}
              <Link to={"/"}>
                <Stack w={"7.5rem"}>
                  <Image
                    mx={{ lg: 0, xl: 5 }}
                    src="/myicons/maxima2024-logo.png"
                    w={"7.5rem"}
                    transition={"all 0.2s ease-in-out"}
                    _hover={{ w: "7rem", transformOrigin: "center" }}
                  />
                </Stack>
              </Link>
              {/* Navbar Items */}
              <Stack
                direction={"row"}
                alignItems={"center"}
                mx={{ lg: 0, xl: 5 }}
              >
                {NavBarData.map((item, index) => (
                  <motion.div
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                      },
                      closed: {
                        y: -20,
                        opacity: 0,
                      },
                    }}
                    initial={"closed"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    whileInView={"open"}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.75,
                    }}
                  >
                    {!isStateLinkActive && item.title === "STATE" ? (
                      <Tooltip
                        label="Rangkaian acara STATE akan segera dimulai"
                        aria-label="A tooltip"
                        bgColor={"button.primary"}
                        rounded={"lg"}
                        px={"0.8rem"}
                        py={"0.5rem"}
                        shadow={"lg"}
                      >
                        <Button
                          variant={"ghost"}
                          gap={2}
                          w={"7.5rem"}
                          p={5}
                          transition={"all 0.2s ease-in-out"}
                          fontFamily={"Lexend"}
                          fontWeight={500}
                          color={"text.primary"}
                          _hover={{
                            transform: "scale(0.90)",
                            fontWeight: 600,
                            "> img": {
                              opacity: 1,
                              transition: "opacity 0.2s ease-in-out",
                            },
                            transformOrigin: "center",
                            bgColor: "#FFFFFF0",
                          }}
                          _active={{
                            bgColor: "#FFFFFF0",
                          }}
                          style={{ cursor: "not-allowed" }}
                        >
                          <Image
                            src={item.icon}
                            w={"1rem"}
                            h={"1rem"}
                            transition={"all 0.2s ease-in-out"}
                            _hover={{ w: "1.1rem", h: "1.1rem" }}
                          ></Image>
                          <Text>{item.title}</Text>
                        </Button>
                      </Tooltip>
                    ) : !isHomeLinkActive && item.title === "HoME" ? (
                      <Tooltip
                        label="Rangkaian acara HoME akan segera dimulai"
                        aria-label="A tooltip"
                        bgColor={"button.primary"}
                        rounded={"lg"}
                        px={"0.8rem"}
                        py={"0.5rem"}
                        shadow={"lg"}
                      >
                        <Button
                          variant={"ghost"}
                          gap={2}
                          w={"7.5rem"}
                          p={5}
                          transition={"all 0.2s ease-in-out"}
                          fontFamily={"Lexend"}
                          fontWeight={500}
                          color={"text.primary"}
                          _hover={{
                            transform: "scale(0.90)",
                            fontWeight: 600,
                            "> img": {
                              opacity: 1,
                              transition: "opacity 0.2s ease-in-out",
                            },
                            transformOrigin: "center",
                            bgColor: "#FFFFFF0",
                          }}
                          _active={{
                            bgColor: "#FFFFFF0",
                          }}
                          style={{ cursor: "not-allowed" }}
                        >
                          <Image
                            src={item.icon}
                            w={"1rem"}
                            h={"1rem"}
                            transition={"all 0.2s ease-in-out"}
                            _hover={{ w: "1.1rem", h: "1.1rem" }}
                          ></Image>
                          <Text>{item.title}</Text>
                        </Button>
                      </Tooltip>
                    ) : !isMalpunLinkActive && item.title === "MalPun" ? (
                      <Tooltip
                        label="Rangkaian acara MalPun akan segera dimulai"
                        aria-label="A tooltip"
                        bgColor={"button.primary"}
                        rounded={"lg"}
                        px={"0.8rem"}
                        py={"0.5rem"}
                        shadow={"lg"}
                      >
                        <Button
                          variant={"ghost"}
                          gap={2}
                          w={"7.5rem"}
                          p={5}
                          transition={"all 0.2s ease-in-out"}
                          fontFamily={"Lexend"}
                          fontWeight={500}
                          color={"text.primary"}
                          _hover={{
                            transform: "scale(0.90)",
                            fontWeight: 600,
                            "> img": {
                              opacity: 1,
                              transition: "opacity 0.2s ease-in-out",
                            },
                            transformOrigin: "center",
                            bgColor: "#FFFFFF0",
                          }}
                          _active={{
                            bgColor: "#FFFFFF0",
                          }}
                          style={{ cursor: "not-allowed" }}
                        >
                          <Image
                            src={item.icon}
                            w={"1rem"}
                            h={"1rem"}
                            transition={"all 0.2s ease-in-out"}
                            _hover={{ w: "1.1rem", h: "1.1rem" }}
                          ></Image>
                          <Text>{item.title}</Text>
                        </Button>
                      </Tooltip>
                    ) : (
                      <Link to={item.link}>
                        <Button
                          variant={"ghost"}
                          gap={2}
                          w={"7.5rem"}
                          p={5}
                          transition={"all 0.2s ease-in-out"}
                          fontFamily={"Lexend"}
                          fontWeight={500}
                          color={"text.primary"}
                          _hover={{
                            transform: "scale(0.90)",
                            fontWeight: 600,
                            "> img": {
                              opacity: 1,
                              transition: "opacity 0.2s ease-in-out",
                            },
                            transformOrigin: "center",
                            bgColor: "#FFFFFF0",
                          }}
                          _active={{
                            bgColor: "#FFFFFF0",
                          }}
                        >
                          <Image
                            src={item.icon}
                            w={"1rem"}
                            h={"1rem"}
                            transition={"all 0.2s ease-in-out"}
                            _hover={{ w: "1.1rem", h: "1.1rem" }}
                          ></Image>
                          <Text>{item.title}</Text>
                        </Button>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </Stack>

              {/* Right Side */}

              {auth.status === "authenticated" && (
                <Menu>
                  <MenuButton>
                    <Button
                      variant={"ghost"}
                      w={"full"}
                      justifyContent={"start"}
                      // p={[0, 0, 0, 2]}
                      // mt={[0, 0, "0.75rem", "1rem"]}
                      cursor={"default"}
                      disabled={true}
                      _hover={{
                        pointerEvents: "none",
                        draggable: "none",
                      }}
                    >
                      <Stack
                        direction={"row"}
                        // justifyContent={"end"}
                        // alignItems={"end"}
                        // pl={{ lg: 12, xl: 20 }}
                      >
                        <Avatar
                          bg={"#44002B"}
                          size={"md"}
                          _hover={{ transform: "scale(0.95)" }}
                          transition={"all 0.2s ease-in-out"}
                        >
                          <AvatarBadge
                            boxSize={{ lg: "0.75rem", xl: "1.25rem" }}
                            bg="green.500"
                          />
                        </Avatar>

                        <Hide below="xl">
                          <Stack
                            justifyContent={"center"}
                            alignItems={"center"}
                            textAlign={"left"}
                            gap={0}
                            color={"text.primary"}
                            fontFamily={"Lexend"}
                            fontWeight={500}
                            mx={{ lg: 0, xl: 2.5 }}
                            noOfLines={2}
                            isTruncated={true}
                            textOverflow={"ellipsis"}
                            // letterSpacing={"0.1rem"}
                            // textShadow={"0 0 1rem #000000"}
                          >
                            <Stack p={1} gap={0}>
                              <Text fontSize={{ lg: "x-small", xl: "smaller" }}>
                                Halo,
                              </Text>
                              <Text
                                fontWeight={600}
                                fontSize={{ lg: "smaller", xl: "large" }}
                              >
                                {auth.user?.data.name}
                              </Text>
                            </Stack>
                          </Stack>
                        </Hide>
                      </Stack>
                    </Button>
                  </MenuButton>

                  <MenuList px={2} shadow={"lg"} borderRadius={"2xl"}>
                    <Link to={"/profile"}>
                      <Button
                        // bg={"status.error"}
                        p={2}
                        py={0}
                        my={1}
                        mb={2}
                        fontSize={["0.8rem", "0.8rem", "0.85rem", "1rem"]}
                        borderRadius={"xl"}
                        color={"black"}
                        fontWeight={"medium"}
                        gap={2}
                        w={"full"}
                        justifyContent={"center"}
                        // onClick={auth.logout}
                      >
                        <FaRegEdit
                          color="black"
                          fontSize={"1rem"}
                          fontWeight={"bold"}
                        />
                        Edit Profile
                      </Button>
                    </Link>

                    <Tooltip
                      label="Aktifkan fitur ini untuk menambah performa"
                      aria-label="A tooltip"
                      bgColor={"button.primary"}
                      rounded={"lg"}
                      px={"0.8rem"}
                      py={"0.5rem"}
                      shadow={"lg"}
                    >
                      <Stack
                        direction={"row"}
                        p={2}
                        // py={0}
                        my={1}
                        mb={2}
                        fontSize={["0.8rem", "0.8rem", "0.85rem", "1rem"]}
                        borderRadius={"xl"}
                        color={"black"}
                        fontWeight={"medium"}
                        gap={2}
                        w={"full"}
                        justifyContent={"center"}
                        bgColor={"gray.100"}
                        justify={"center"}
                        align={"center"}
                      >
                        <Switch
                          isChecked={isReducedMotion}
                          onChange={() => {
                            setReducedMotion(!isReducedMotion);
                          }}
                        ></Switch>
                        <Text>Disable Animations</Text>
                      </Stack>
                    </Tooltip>

                    <Button
                      bg={"status.error"}
                      p={2}
                      py={0}
                      my={1}
                      fontSize={["0.8rem", "0.8rem", "0.85rem", "1rem"]}
                      borderRadius={"xl"}
                      color={"white"}
                      fontWeight={"medium"}
                      gap={2}
                      w={"full"}
                      // justifyContent={"center"}
                      onClick={auth.logout}
                    >
                      <IoLogOutOutline
                        color="white"
                        fontSize={"1.25rem"}
                        fontWeight={"bold"}
                      />
                      Log Out
                    </Button>
                  </MenuList>
                </Menu>
              )}

              {auth.status !== "authenticated" && (
                <>
                  <Button
                    rounded={"full"}
                    bgColor={"text.primary"}
                    p={"1.5rem"}
                    shadow={"md"}
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      onOpen();
                    }}
                  >
                    <Text color={"text.tertiary"} fontWeight={"medium"}>
                      Login with SSO
                    </Text>
                  </Button>

                  <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    size={size}
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
                          py={"2rem"}
                          textAlign={"center"}
                          fontSize={"1.6rem"}
                        >
                          Apakah kamu Mahasiswa/i UMN angkatan 2024?
                        </Text>
                      </ModalBody>

                      <ModalFooter
                        justifyContent={"center"}
                        pb={"2rem"}
                        gap={4}
                      >
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
                          onClick={() => handleClick(size)}
                          px={"2rem"}
                        >
                          Bukan Mahasiswa/i UMN 2024
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </>
              )}
            </Stack>
          )}

          {auth.status === "unauthenticated" && (
            <Stack
              bgColor={"rgba(255, 255, 255, 0.85)"}
              // p={5}
              py={{ lg: 4, xl: 4 }}
              pl={{ lg: 5, xl: 2 }}
              pr={paddingRight}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-around"}
              backdropFilter={"blur(10px)"}
              rounded={"full"}
              gap={{ lg: 3, xl: 12 }}
            >
              {/* Logo MAXIMA 2024 */}
              <Link to={"/"}>
                <Stack w={"7.5rem"}>
                  <Image
                    mx={{ lg: 0, xl: 5 }}
                    src="/myicons/maxima2024-logo.png"
                    w={"7.5rem"}
                    transition={"all 0.2s ease-in-out"}
                    _hover={{ w: "7rem", transformOrigin: "center" }}
                  />
                </Stack>
              </Link>
              {/* Navbar Items */}
              <Stack
                direction={"row"}
                alignItems={"center"}
                mx={{ lg: 0, xl: 5 }}
              >
                {NavBarData.map((item, index) => (
                  <motion.div
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                      },
                      closed: {
                        y: -20,
                        opacity: 0,
                      },
                    }}
                    initial={"closed"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    whileInView={"open"}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.75,
                    }}
                  >
                    {item.title === "STATE" ? (
                      <Tooltip
                        label="Silahkan Login untuk mengakses STATE"
                        aria-label="A tooltip"
                        bgColor={"button.primary"}
                        rounded={"lg"}
                        px={"0.8rem"}
                        py={"0.5rem"}
                        shadow={"lg"}
                      >
                        <Button
                          variant={"ghost"}
                          gap={2}
                          w={"7.5rem"}
                          p={5}
                          transition={"all 0.2s ease-in-out"}
                          fontFamily={"Lexend"}
                          fontWeight={500}
                          color={"text.primary"}
                          _hover={{
                            transform: "scale(0.90)",
                            fontWeight: 600,
                            "> img": {
                              opacity: 1,
                              transition: "opacity 0.2s ease-in-out",
                            },
                            transformOrigin: "center",
                            bgColor: "#FFFFFF0",
                          }}
                          _active={{
                            bgColor: "#FFFFFF0",
                          }}
                          style={{ cursor: "not-allowed" }}
                        >
                          <Image
                            src={item.icon}
                            w={"1rem"}
                            h={"1rem"}
                            transition={"all 0.2s ease-in-out"}
                            _hover={{ w: "1.1rem", h: "1.1rem" }}
                          ></Image>
                          <Text>{item.title}</Text>
                        </Button>
                      </Tooltip>
                    ) : !isHomeLinkActive && item.title === "HoME" ? (
                      <Tooltip
                        label="Rangkaian acara HoME akan segera dimulai"
                        aria-label="A tooltip"
                        bgColor={"button.primary"}
                        rounded={"lg"}
                        px={"0.8rem"}
                        py={"0.5rem"}
                        shadow={"lg"}
                      >
                        <Button
                          variant={"ghost"}
                          gap={2}
                          w={"7.5rem"}
                          p={5}
                          transition={"all 0.2s ease-in-out"}
                          fontFamily={"Lexend"}
                          fontWeight={500}
                          color={"text.primary"}
                          _hover={{
                            transform: "scale(0.90)",
                            fontWeight: 600,
                            "> img": {
                              opacity: 1,
                              transition: "opacity 0.2s ease-in-out",
                            },
                            transformOrigin: "center",
                            bgColor: "#FFFFFF0",
                          }}
                          _active={{
                            bgColor: "#FFFFFF0",
                          }}
                          style={{ cursor: "not-allowed" }}
                        >
                          <Image
                            src={item.icon}
                            w={"1rem"}
                            h={"1rem"}
                            transition={"all 0.2s ease-in-out"}
                            _hover={{ w: "1.1rem", h: "1.1rem" }}
                          ></Image>
                          <Text>{item.title}</Text>
                        </Button>
                      </Tooltip>
                    ) : !isMalpunLinkActive && item.title === "MalPun" ? (
                      <Tooltip
                        label="Rangkaian acara MalPun akan segera dimulai"
                        aria-label="A tooltip"
                        bgColor={"button.primary"}
                        rounded={"lg"}
                        px={"0.8rem"}
                        py={"0.5rem"}
                        shadow={"lg"}
                      >
                        <Button
                          variant={"ghost"}
                          gap={2}
                          w={"7.5rem"}
                          p={5}
                          transition={"all 0.2s ease-in-out"}
                          fontFamily={"Lexend"}
                          fontWeight={500}
                          color={"text.primary"}
                          _hover={{
                            transform: "scale(0.90)",
                            fontWeight: 600,
                            "> img": {
                              opacity: 1,
                              transition: "opacity 0.2s ease-in-out",
                            },
                            transformOrigin: "center",
                            bgColor: "#FFFFFF0",
                          }}
                          _active={{
                            bgColor: "#FFFFFF0",
                          }}
                          style={{ cursor: "not-allowed" }}
                        >
                          <Image
                            src={item.icon}
                            w={"1rem"}
                            h={"1rem"}
                            transition={"all 0.2s ease-in-out"}
                            _hover={{ w: "1.1rem", h: "1.1rem" }}
                          ></Image>
                          <Text>{item.title}</Text>
                        </Button>
                      </Tooltip>
                    ) : (
                      <Link to={item.link}>
                        <Button
                          variant={"ghost"}
                          gap={2}
                          w={"7.5rem"}
                          p={5}
                          transition={"all 0.2s ease-in-out"}
                          fontFamily={"Lexend"}
                          fontWeight={500}
                          color={"text.primary"}
                          _hover={{
                            transform: "scale(0.90)",
                            fontWeight: 600,
                            "> img": {
                              opacity: 1,
                              transition: "opacity 0.2s ease-in-out",
                            },
                            transformOrigin: "center",
                            bgColor: "#FFFFFF0",
                          }}
                          _active={{
                            bgColor: "#FFFFFF0",
                          }}
                        >
                          <Image
                            src={item.icon}
                            w={"1rem"}
                            h={"1rem"}
                            transition={"all 0.2s ease-in-out"}
                            _hover={{ w: "1.1rem", h: "1.1rem" }}
                          ></Image>
                          <Text>{item.title}</Text>
                        </Button>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </Stack>

              {/* Right Side */}

              {auth.status !== "unauthenticated" && (
                <Menu>
                  <MenuButton>
                    <Button
                      variant={"ghost"}
                      w={"full"}
                      justifyContent={"start"}
                      // p={[0, 0, 0, 2]}
                      // mt={[0, 0, "0.75rem", "1rem"]}
                      cursor={"default"}
                      disabled={true}
                      _hover={{
                        pointerEvents: "none",
                        draggable: "none",
                      }}
                    >
                      <Stack
                        direction={"row"}
                        // justifyContent={"end"}
                        // alignItems={"end"}
                        // pl={{ lg: 12, xl: 20 }}
                      >
                        <Avatar
                          bg={"#44002B"}
                          size={"md"}
                          _hover={{ transform: "scale(0.95)" }}
                          transition={"all 0.2s ease-in-out"}
                        >
                          <AvatarBadge
                            boxSize={{ lg: "0.75rem", xl: "1.25rem" }}
                            bg="green.500"
                          />
                        </Avatar>

                        <Hide below="xl">
                          <Stack
                            justifyContent={"center"}
                            alignItems={"center"}
                            textAlign={"left"}
                            gap={0}
                            color={"text.primary"}
                            fontFamily={"Lexend"}
                            fontWeight={500}
                            mx={{ lg: 0, xl: 2.5 }}
                            noOfLines={2}
                            isTruncated={true}
                            textOverflow={"ellipsis"}
                            // letterSpacing={"0.1rem"}
                            // textShadow={"0 0 1rem #000000"}
                          >
                            <Stack p={1} gap={0}>
                              <Text fontSize={{ lg: "x-small", xl: "smaller" }}>
                                Halo,
                              </Text>
                              <Text
                                fontWeight={600}
                                fontSize={{ lg: "smaller", xl: "large" }}
                              >
                                {auth.user?.data.name}
                              </Text>
                            </Stack>
                          </Stack>
                        </Hide>
                      </Stack>
                    </Button>
                  </MenuButton>

                  <MenuList px={2} shadow={"lg"} borderRadius={"2xl"}>
                    <Link to={"/profile"}>
                      <Button
                        // bg={"status.error"}
                        p={2}
                        py={0}
                        my={1}
                        mb={2}
                        fontSize={["0.8rem", "0.8rem", "0.85rem", "1rem"]}
                        borderRadius={"xl"}
                        color={"black"}
                        fontWeight={"medium"}
                        gap={2}
                        w={"full"}
                        justifyContent={"center"}
                        // onClick={auth.logout}
                      >
                        <FaRegEdit
                          color="black"
                          fontSize={"1rem"}
                          fontWeight={"bold"}
                        />
                        Edit Profile
                      </Button>
                    </Link>
                    <Button
                      bg={"status.error"}
                      p={2}
                      py={0}
                      my={1}
                      fontSize={["0.8rem", "0.8rem", "0.85rem", "1rem"]}
                      borderRadius={"xl"}
                      color={"white"}
                      fontWeight={"medium"}
                      gap={2}
                      w={"full"}
                      // justifyContent={"center"}
                      onClick={auth.logout}
                    >
                      <IoLogOutOutline
                        color="white"
                        fontSize={"1.25rem"}
                        fontWeight={"bold"}
                      />
                      Log Out
                    </Button>
                  </MenuList>
                </Menu>
              )}

              {auth.status === "unauthenticated" && (
                <>
                  <Button
                    rounded={"full"}
                    bgColor={"text.primary"}
                    p={"1.5rem"}
                    shadow={"md"}
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      onOpen();
                    }}
                  >
                    <Text color={"text.tertiary"} fontWeight={"medium"}>
                      Login with SSO
                    </Text>
                  </Button>

                  <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    size={size}
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
                          py={"2rem"}
                          textAlign={"center"}
                          fontSize={"1.6rem"}
                        >
                          Apakah kamu Mahasiswa/i UMN angkatan 2024?
                        </Text>
                      </ModalBody>

                      <ModalFooter
                        justifyContent={"center"}
                        pb={"2rem"}
                        gap={4}
                      >
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
                          onClick={() => handleClick(size)}
                          px={"2rem"}
                        >
                          Bukan Mahasiswa/i UMN 2024
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </>
              )}
            </Stack>
          )}
        </Stack>
      )}
      <Stack>
        <Outlet />
      </Stack>
    </>
  );
};

const MainLayoutMobile = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [open, setOpen] = useState(false);

  return (
    <Stack gap={0}>
      <Sidebar />
      {/* <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
      <Stack className="abc">
        <Outlet />
      </Stack>
    </Stack>
  );
};

const MainLayout = () => {
  const nav = useNavigate();
  const auth = useAuth();
  const toast = useToast();
  const { data } = useSWR<Toggle[]>("/toggle");

  useEffect(() => {
    if (auth.status === "authenticated") {
      if (auth.user?.role === "unknown") {
        if (data) {
          const check = data.find((toggle) => toggle.name === "registration");
          if (!check || !check.toggle) {
            auth.logout();
            return nav("/");
          }
        }
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
        return nav("/");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <>
      <Show above="lg">
        <MainLayoutDesktop />
      </Show>
      <Hide above="lg">
        <MainLayoutMobile />
      </Hide>
    </>
  );
};

export default MainLayout;
