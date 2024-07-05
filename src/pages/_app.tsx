import { Hide, Show, Spinner, Stack, Image, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { SWRConfig } from "swr";
import { useFetcher } from "@/hooks/useApi";
import useAuth from "@/hooks/useAuth";

import { AnimatePresence, motion } from "framer-motion";

const GlobalLayout = () => {
  const fetcher = useFetcher();
  const auth = useAuth();

  return (
    <Stack minW={"100vw"} minH={"100vh"}>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 15 * 1000,
        }}
      >
        <AnimatePresence mode="wait">
          {auth.status === "loading" && (
            <Stack
              as={motion.div}
              gap={0}
              minW={"100vw"}
              minH={"100vh"}
              align={"center"}
              justify={"center"}
              bgImage={"url('/bg/loader/bg.png')"}
              bgRepeat={"no-repeat"}
              bgSize={"cover"}
              position={"relative"}
              overflow={"hidden"}
              variants={{
                initial: {
                  opacity: 0,
                },
                enter: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.5,
                    easings: "backOut",
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    duration: 1,
                    delay: 0.5,
                    easings: "backOut",
                  },
                },
              }}
              initial={"initial"}
              animate={"enter"}
              exit={"exit"}
              overflowX={"hidden"}
              overflowY={"hidden"}
            >
              <Hide below="md">
                <Image
                  as={motion.img}
                  src="/bg/loader/curtains1.png"
                  h={"100%"}
                  w={"16rem"}
                  left={0}
                  position={"absolute"}
                  variants={{
                    initial: {
                      opacity: 0,
                      x: -150,
                    },
                    enter: {
                      opacity: 1,
                      x: [-100, 0, -10],
                      transition: {
                        duration: 1,
                        delay: 0.5,
                        easings: "backOut",
                      },
                    },
                    exit: {
                      opacity: 0,
                      x: -150,
                      transition: {
                        duration: 1,
                        delay: 0.5,
                        easings: "backOut",
                      },
                    },
                  }}
                  initial={"initial"}
                  animate={"enter"}
                  exit={"exit"}
                  overflow={"hidden"}
                />
              </Hide>
              <Show below="md">
                <Image
                  as={motion.img}
                  src="/bg/loader/curtainsMobile.png"
                  w={"100%"}
                  position={"absolute"}
                  top={0}
                  objectFit={"cover"}
                  variants={{
                    initial: {
                      opacity: 0,
                      y: -150,
                    },
                    enter: {
                      opacity: 1,
                      y: [-150, 0, -5],
                      transition: {
                        duration: 1,
                        delay: 0.5,
                        easings: "backOut",
                      },
                    },
                    exit: {
                      opacity: 0,
                      y: -150,
                      transition: {
                        duration: 1,
                        delay: 0.5,
                        easings: "backOut",
                      },
                    },
                  }}
                  initial={"initial"}
                  animate={"enter"}
                  exit={"exit"}
                  overflow={"hidden"}
                />
              </Show>
              <Hide below="md">
                <Image
                  as={motion.img}
                  src="/bg/loader/curtains2.png"
                  h={"100%"}
                  w={"16rem"}
                  right={0}
                  position={"absolute"}
                  variants={{
                    initial: {
                      opacity: 0,
                      x: 150,
                    },
                    enter: {
                      opacity: 1,
                      x: [100, 0, 10],
                      transition: {
                        duration: 1,
                        delay: 0.5,
                        easings: "backOut",
                      },
                    },
                    exit: {
                      opacity: 0,
                      x: 150,
                      transition: {
                        duration: 1,
                        delay: 0.5,
                        easings: "backOut",
                      },
                    },
                  }}
                  initial={"initial"}
                  animate={"enter"}
                  exit={"exit"}
                  overflow={"hidden"}
                />
              </Hide>

              <Stack
                direction={"column"}
                bgColor={"white"}
                rounded={"2rem"}
                p={"4rem"}
                m={"2rem"}
                justify={"center"}
                align={"center"}
                gap={"2rem"}
              >
                <Image src="/icons/maxima2024-logo.png" w={"6rem"} />
                <Stack
                  // direction={"row"}
                  gap={"1rem"}
                  color={"text.secondary"}
                  align={"center"}
                >
                  <Text
                    fontWeight={"semibold"}
                    fontSize={["1rem", "1rem", "1rem", "1.5rem"]}
                    textAlign={"center"}
                  >
                    Loading your contents...
                  </Text>
                  <Spinner
                    size={["md", "md", "lg", "lg"]}
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                  />
                </Stack>
              </Stack>
            </Stack>
          )}
        </AnimatePresence>
        {auth.status !== "loading" && <Outlet />}
      </SWRConfig>
    </Stack>
  );
};

export default GlobalLayout;
