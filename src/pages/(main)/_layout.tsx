import {
  Stack,
  Image,
  AvatarBadge,
  Avatar,
  Text,
  Button,
  Hide,
  Show,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        zIndex={999}
        position={"absolute"}
        pt={10}
        minW={"100vw"}
        // minH={"100vh"}
        flex={1}
      >
        <Stack
          bgColor={"#FFFFFF90"}
          p={5}
          px={{ l: 5, xl: 10 }}
          direction={"row"}
          alignItems={"center"}
          roundedTopRight={"xl"}
          roundedBottomRight={"xl"}
          gap={{ lg: 3, xl: 12 }}
          pl={{ lg: 12, xl: 20 }}
          h={"5rem"}
          // w={"70rem"}
          // w={"50%"}
        >
          {/* Logo MAXIMA 2024 */}
          <Link to={"/home"}>
            <Stack w={"7.5rem"}>
              <Image
                src="/icons/maxima2024-logo.png"
                w={"7.5rem"}
                transition={"all 0.2s ease-in-out"}
                _hover={{ w: "7rem", transformOrigin: "center" }}
              />
            </Stack>
          </Link>
          {/* Navbar Items */}
          {NavBarData.map((item) => (
            <Stack direction={"row"} alignItems={"center"}>
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
            </Stack>
          ))}
        </Stack>
        {/* Right Side */}
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          pr={{ lg: 12, xl: 20 }}
        >
          <Hide below="xl">
            <Text
              color={"text.tertiary"}
              fontFamily={"Lexend"}
              fontSize={{ lg: "smaller", xl: "larger" }}
              mr={{ lg: 0, xl: 5 }}
              letterSpacing={"0.1rem"}
              textShadow={"0 0 1rem #000000"}
            >
              NAMA LENGKAP
            </Text>
          </Hide>

          <Avatar>
            <AvatarBadge
              boxSize={{ lg: "0.75rem", xl: "1.25rem" }}
              bg="green.500"
            />
          </Avatar>
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
    <>
      <Text>Ini Mobile Layout</Text>

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
      <Stack>
        <Outlet />
      </Stack>
    </>
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
