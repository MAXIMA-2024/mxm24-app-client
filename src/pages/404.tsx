import { Stack, Image, Show, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Stack
      gap={0}
      minW={"100vw"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bgImage={[
        "/bg/malpun-bg-mobile.png",
        "/bg/malpun-bg-mobile.png",
        "/bg/malpun-bg-desktop.png",
        "/bg/malpun-bg-desktop.png",
        "/bg/malpun-bg-desktop.png",
      ]}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      position={"relative"}
      overflow={"hidden"}
      overflowX={"hidden"}
      overflowY={"hidden"}
    >
      <Stack
        direction={"column"}
        bgColor={"#FAF4E8"}
        rounded={"2rem"}
        minW={["17.5rem", "20rem", "25rem", "30rem"]}
        p={"3rem"}
        m={"2rem"}
        justify={"center"}
        align={"center"}
        gap={"2rem"}
        pos={"relative"}
      >
        <Show breakpoint="(min-width: 1024px)">
          <Image
            src="/animated/characters/maxiDesktop.png"
            position={"absolute"}
            top={"5rem"}
            left={"-7.775rem"}
            w={"9rem"}
            as={motion.img}
            animate={{
              y: [0, 2, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                easings: "easeInOut",
              },
            }}
          />
          <Image
            src="/animated/characters/ximaDesktop.png"
            position={"absolute"}
            top={"5rem"}
            bottom={0}
            right={"-7.5rem"}
            w={"10rem"}
            as={motion.img}
            animate={{
              y: [0, -2, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                easings: "easeInOut",
              },
            }}
          />
        </Show>

        <Show breakpoint="(max-width: 1023px)">
          <Image
            src="/animated/characters/maxiMobile.png"
            position={"absolute"}
            top={["-6.4rem", "-8.835rem", "-8.835rem", "-6.3rem", "-6.3rem"]}
            bottom={0}
            left={["1.25rem", "3.5rem", "1.5rem", "1.25rem", "1.25rem"]}
            w={["8rem", "11rem", "11rem", "8rem", "8rem"]}
            as={motion.img}
            animate={{
              rotate: [0, -1.5, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                easings: "easeInOut",
              },
            }}
          />
          <Image
            src="/animated/characters/ximaMobile.png"
            position={"absolute"}
            top={["-6.3rem", "-8rem", "-8rem", "-6.3rem", "-6.3rem"]}
            bottom={0}
            right={["2rem", "6rem", "2rem", "2rem", "2rem"]}
            w={["5.5rem", "7rem", "7rem", "5.5rem", "5.5rem"]}
            as={motion.img}
            animate={{
              rotate: [0, 1.5, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                easings: "easeInOut",
              },
            }}
          />
        </Show>
        <Image src="/MAXIMA 2024 LOGO.svg" w={"6rem"} />
        <Stack
          // direction={"row"}
          gap={"1rem"}
          color={"text.secondary"}
          align={"center"}
          textColor={"#720045"}
        >
          <Text
            fontWeight={"bold"}
            fontSize={["2rem", "2rem", "2.5rem", "2.5rem"]}
            textAlign={"center"}
          >
            404
          </Text>
          <Text
            fontWeight={"semibold"}
            fontSize={["1rem", "1rem", "1.5rem", "1.75rem"]}
            textAlign={"center"}
          >
            Page Not Found
          </Text>
          <Button
            as={Link}
            to={"/"}
            bgColor={"#720045"}
            textColor={"white"}
            marginTop={5}
          >
            Go Back
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PageNotFound;
