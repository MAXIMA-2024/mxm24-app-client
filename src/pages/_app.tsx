import { Hide, Show, Spinner, Stack, Image, Text } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { SWRConfig } from "swr";
import { useFetcher } from "@/hooks/useApi";
import useAuth from "@/hooks/useAuth";

import { AnimatePresence, motion } from "framer-motion";
import useLoading from "@/hooks/useLoading";
import { useEffect } from "react";

const GlobalLayout = () => {
  const fetcher = useFetcher();
  const auth = useAuth();
  const { isLoaded, setLoaded } = useLoading();
  const loc = useLocation();

  // this is used for the loader
  useEffect(() => {
    const reset = ["/", "/home", "/state", "/malpun"];
    if (reset.includes(loc.pathname)) {
      setLoaded(false);
    } else {
      setLoaded(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loc]);

  // easter egg #1
  useEffect(() => {
    const style = "color: white; font-style: italic; font-size: 2em;";
    console.log("%c/d/y/l/a/n", style);
  }, []);

  const isLoading = auth.status === "loading" || !isLoaded;

  return (
    <Stack
      minW={"100vw"}
      minH={"100vh"}
      overflowX={"hidden"}
      overflowY={auth.status !== "loading" && !isLoaded ? "hidden" : "auto"}
      pos={"relative"}
      gap={0}
    >
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 15 * 1000,
        }}
      >
        <AnimatePresence mode="popLayout">
          {/* auth loading */}
          <Stack
            id="loader"
            as={motion.div}
            pos={"absolute"}
            top={0}
            left={0}
            gap={0}
            zIndex={50}
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
                opacity: 1,
                visibility: "visible",
              },
              enter: {
                opacity: 1,
                visibility: "visible",
                transition: {
                  duration: 0.5,
                  // delay: 0.5,
                  easings: "backOut",
                },
              },
              exit: {
                opacity: 0,
                visibility: "hidden",
                transition: {
                  duration: 1,
                  delay: 0.5,
                  easings: "backOut",
                },
              },
            }}
            initial={"initial"}
            animate={isLoading ? "enter" : "exit"}
            exit={"exit"}
            overflowX={"hidden"}
            overflowY={"hidden"}
          >
            <Hide below="md">
              <Image
                as={motion.img}
                src="/bg/loader/big_curtain_l.png"
                zIndex={51}
                h={"100%"}
                // w={"16rem"}
                left={0}
                position={"absolute"}
                variants={{
                  initial: {
                    opacity: 1,
                    x: 0,
                    visibility: "visible",
                  },
                  enter: {
                    opacity: 1,
                    x: [0, -500, -400],
                    visibility: "visible",
                    transition: {
                      duration: 2,
                      // delay: 0.5,
                      easings: "backOut",
                    },
                  },
                  exit: {
                    opacity: 0,
                    x: -800,
                    visibility: "hidden",
                    transition: {
                      duration: 1,
                      delay: 0.5,
                      easings: "backOut",
                    },
                  },
                }}
                initial={"initial"}
                animate={isLoading ? "enter" : "exit"}
                exit={"exit"}
                overflow={"hidden"}
              />
            </Hide>

            <Show below="md">
              <Image
                as={motion.img}
                src="/bg/loader/big_curtain_l.png"
                zIndex={51}
                h={"100%"}
                // w={"16rem"}
                left={0}
                position={"absolute"}
                variants={{
                  initial: {
                    opacity: 1,
                    x: 0,
                    visibility: "visible",
                  },
                  enter: {
                    opacity: 1,
                    x: [-100, -500, -800],
                    visibility: "visible",
                    transition: {
                      duration: 2,
                      // delay: 0.5,
                      easings: "backOut",
                    },
                  },
                  exit: {
                    opacity: 0,
                    x: -800,
                    visibility: "hidden",
                    transition: {
                      duration: 1,
                      delay: 0.5,
                      easings: "backOut",
                    },
                  },
                }}
                initial={"initial"}
                animate={isLoading ? "enter" : "exit"}
                exit={"exit"}
                overflow={"hidden"}
              />
              <Image
                as={motion.img}
                src="/bg/loader/curtainsMobile.png"
                w={"100%"}
                position={"absolute"}
                top={0}
                objectFit={"cover"}
                variants={{
                  initial: {
                    opacity: 1,
                    y: -150,
                    visibility: "visible",
                  },
                  enter: {
                    opacity: 1,
                    y: [-150, 0, -5],
                    visibility: "visible",
                    transition: {
                      duration: 1,
                      // delay: 0.5,
                      easings: "backOut",
                    },
                  },
                  exit: {
                    opacity: 0,
                    y: -150,
                    visibility: "hidden",
                    transition: {
                      duration: 1,
                      delay: 0.5,
                      easings: "backOut",
                    },
                  },
                }}
                initial={"initial"}
                animate={isLoading ? "enter" : "exit"}
                exit={"exit"}
                overflow={"hidden"}
              />

              <Image
                as={motion.img}
                src="/bg/loader/big_curtain_r.png"
                zIndex={51}
                h={"100%"}
                right={0}
                position={"absolute"}
                variants={{
                  initial: {
                    opacity: 1,
                    x: 0,
                    visibility: "visible",
                  },
                  enter: {
                    opacity: 1,
                    x: [100, 500, 800],
                    visibility: "visible",
                    transition: {
                      duration: 2,
                      // delay: 0.5,
                      easings: "backOut",
                    },
                  },
                  exit: {
                    opacity: 0,
                    x: 800,
                    visibility: "hidden",
                    transition: {
                      duration: 1,
                      delay: 0.5,
                      easings: "backOut",
                    },
                  },
                }}
                initial={"initial"}
                animate={isLoading ? "enter" : "exit"}
                exit={"exit"}
                overflow={"hidden"}
              />
            </Show>
            <Hide below="md">
              <Image
                as={motion.img}
                src="/bg/loader/big_curtain_r.png"
                zIndex={51}
                h={"100%"}
                right={0}
                position={"absolute"}
                variants={{
                  initial: {
                    opacity: 1,
                    x: 0,
                    visibility: "visible",
                  },
                  enter: {
                    opacity: 1,
                    x: [0, 500, 400],
                    visibility: "visible",
                    transition: {
                      duration: 2,
                      // delay: 0.5,
                      easings: "backOut",
                    },
                  },
                  exit: {
                    opacity: 0,
                    x: 800,
                    visibility: "hidden",
                    transition: {
                      duration: 1,
                      delay: 0.5,
                      easings: "backOut",
                    },
                  },
                }}
                initial={"initial"}
                animate={isLoading ? "enter" : "exit"}
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
              <Image src="/myicons/maxima2024-logo.png" w={"10rem"} />
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
          <Stack flex={1} pos={"absolute"} top={0} left={0}>
            <Outlet />
          </Stack>
        </AnimatePresence>
      </SWRConfig>
    </Stack>
  );
};

export default GlobalLayout;
