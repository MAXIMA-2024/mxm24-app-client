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
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  // Drawer,
  // DrawerBody,
  // DrawerFooter,
  // DrawerHeader,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerCloseButton,
  // useDisclosure,
} from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const NavBarData = [
  {
    title: "HoME",
    icon: "/icons/home-icon.png",
    link: "/home",
  },
  {
    title: "State",
    icon: "/icons/state-icon.png",
    link: "/state",
  },
  {
    title: "MalPun",
    icon: "/icons/malpun-icon.png",
    link: "/malpun",
  },
  {
    title: "FAQ",
    icon: "/icons/faq-icon.png",
    link: "/faq",
  },
  {
    title: "About Us",
    icon: "/icons/aboutus-icon.png",
    link: "/aboutus",
  },
];

const MainLayoutDesktop = () => {
  const toast = useToast();
  const isLogin = false;

  const user = {
    status: isLogin ? "authenticated" : "unaunthenticated",
    name: "Jonathan",
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const paddingRight = user.status !== "authenticated" ? { lg: 4, xl: 6 } : {};

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

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        zIndex={999}
        position={"absolute"}
        pt={10}
        minW={"100vw"}
        // minH={"100vh"}
        flex={1}
      >
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
          // roundedTopRight={"xl"}
          // roundedBottomRight={"xl"}
          gap={{ lg: 3, xl: 12 }}
          // px={{ lg: 22, xl: 20 }}
          // h={"5rem"}
          // w={"50%"}
          // w={"70rem"}
          // w={"50%"}
        >
          {/* Logo MAXIMA 2024 */}
          <Link to={"/home"}>
            <Stack w={"7.5rem"}>
              <Image
                mx={{ lg: 0, xl: 5 }}
                src="/icons/maxima2024-logo.png"
                w={"7.5rem"}
                transition={"all 0.2s ease-in-out"}
                _hover={{ w: "7rem", transformOrigin: "center" }}
              />
            </Stack>
          </Link>
          {/* Navbar Items */}
          <Stack direction={"row"} alignItems={"center"} mx={{ lg: 0, xl: 5 }}>
            {NavBarData.map((item) => (
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
            ))}
          </Stack>
          {/* Right Side */}

          {user.status === "authenticated" && (
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
                            Jonathan
                          </Text>
                        </Stack>
                      </Stack>
                    </Hide>
                  </Stack>
                </Button>
              </MenuButton>

              <MenuList px={2} shadow={"lg"} borderRadius={"2xl"}>
                <Link to={"/auth/profile"}>
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
                  // onClick={auth.logout}
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

          {user.status !== "authenticated" && (
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
      </Stack>
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
