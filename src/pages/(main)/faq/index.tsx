import { useState } from "react";
import { Stack, Text, Button, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ButtonData = [
  {
    content: "HoME",
    link: "/home",
  },
  {
    content: "STATE",
    link: "/state",
  },
  {
    content: "MalPun",
    link: "/malpun",
  },
];

const Faq = () => {
  const [activeContent, setActiveContent] = useState("HoME");

  const renderContent = () => {
    switch (activeContent) {
      case "HoME":
        return (
          <Text
            fontSize={{ base: "1rem", xl: "1rem" }}
            fontFamily={"Luthier"}
            color={"text.primary"}
            textAlign={"justify"}
            mb={8}
          >
            Ini adalah konten untuk HoME. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Porttitor massa id neque aliquam
            vestibulum morbi blandit cursus risus.
          </Text>
        );
      case "STATE":
        return (
          <Text
            fontSize={{ base: "1rem", xl: "1rem" }}
            fontFamily={"Luthier"}
            color={"text.primary"}
            textAlign={"justify"}
            mb={8}
          >
            Ini adalah konten untuk STATE. Libero volutpat sed cras ornare arcu
            dui. Id diam maecenas ultricies mi eget mauris.
          </Text>
        );
      case "MalPun":
        return (
          <Text
            fontSize={{ base: "1rem", xl: "1rem" }}
            fontFamily={"Luthier"}
            color={"text.primary"}
            textAlign={"justify"}
            mb={8}
          >
            Ini adalah konten untuk Malam Puncak. Vivamus at augue eget arcu
            dictum varius duis. Ipsum nunc aliquet bibendum enim facilisis
            gravida neque.
          </Text>
        );
      default:
        return null;
    }
  };

  return (
    <Stack
      bgImage={{
        base: "/bg/state-mobile.png",
        lg: "/bg/state-desktop.png",
      }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      minH={"100vh"}
      minW={"100vw"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        direction={"column"}
        gap={5}
        alignItems={"center"}
        mx={"20%"}
        mt={"5%"}
        position={"relative"}
      >
        <Image
          src="/bg/maxi.svg"
          alt="maxi"
          h={{ base: "4rem", md: "7rem" }}
          position={"absolute"}
          left={{ base: "0.8rem", md: "1.5rem", lg: "2rem", xl: "2rem" }}
          top={{
            base: "3.72rem",
            md: "0.45rem",
            lg: "0.5rem",
            xl: "4.96rem",
          }}
        ></Image>

        <Image
          src="/bg/xima.svg"
          alt="xima"
          h={{ base: "4rem", md: "7rem" }}
          position={"absolute"}
          left={{ base: "13.5rem", md: "29.5rem", lg: "41.5rem", xl: "60rem" }}
          top={{ base: "3.55rem", md: "0.15rem", lg: "0.15rem", xl: "4.65rem" }}
        ></Image>

        <Text
          fontSize={{ base: "3rem", md: "3rem", lg: "3rem", xl: "6rem" }}
          fontFamily={"Luthier"}
          fontWeight={"bold"}
          color={"text.primary"}
          mb={{ base: "1rem", md: "0" }}
        >
          FAQ
        </Text>

        <Stack
          bgColor={"#FAF4E8"}
          w={{
            base: "350px",
            md: "700px",
            lg: "900px",
            xl: "1200px",
          }}
          px={{ base: "30px", md: "40px", lg: "50px", xl: "70px" }}
          py={{ base: "30px", lg: "30px", xl: "30px" }}
          borderRadius={"3xl"}
          alignItems={"center"}
          gap={5}
          boxShadow={"lg"}
        >
          <Stack
            bgColor={"text.primary"}
            direction={"row"}
            gap={5}
            p={"15px"}
            borderRadius={"full"}
            mt={"1rem"}
          >
            {ButtonData.map((button) => (
              <Button
                key={button.content}
                borderRadius={"full"}
                px={{ base: "20px", md: "30px" }}
                py={{ base: "10px", md: "25px" }}
                fontFamily={"Lexend"}
                fontSize={{ base: "0.8rem", md: "1.2rem" }}
                color={
                  activeContent === button.content ? "#B20034" : "text.primary"
                }
                bgColor={
                  activeContent === button.content ? "button.yellow" : "white"
                }
                boxShadow={"inset 0 0 5px rgba(0, 0, 0, 0.5)"}
                _hover={{
                  transform: "scale(0.95)",
                  transition: "all 0.2s ease-in-out",
                }}
                onClick={() => setActiveContent(button.content)}
              >
                {button.content}
              </Button>
            ))}
          </Stack>
          <motion.div
            key={activeContent}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Faq;
