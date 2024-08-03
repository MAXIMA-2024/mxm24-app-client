import { Button, Img, Show, Stack } from "@chakra-ui/react";
import Boag from "@/components/Boag";
import { Link } from "react-router-dom";
import { useRef } from "react";
import StateBG from "@/components/animated-bg/state-bg";

const State = () => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Show breakpoint="(max-width: 1023px)">
        {/*mobile layout */}
        <StateBG>
          <>
            <Stack
              align={"center"}
              // justify={"center"}
              gap={["20rem", "2rem"]}
              mt={"6rem"}
              flex={1}
            >
              <Img src={"/state/banner.png"} w={["16rem", "24rem"]} />
              <Stack>
                <Link to="/state/selectstate/1">
                  <Button
                    w={{ base: "16rem", md: "20rem" }}
                    bgColor={"#44002B"}
                    textColor={"white"}
                    fontFamily={"Lexend"}
                    fontWeight={"light"}
                    fontSize={"lg"}
                  >
                    Pilih UKM dan Komunitas
                  </Button>
                </Link>
                <Button
                  w={{ base: "16rem", md: "20rem" }}
                  bgColor={"#44002B"}
                  textColor={"white"}
                  fontFamily={"Lexend"}
                  fontWeight={"light"}
                  fontSize={"lg"}
                  // display={{ base: "none", lg: "flex" }}
                  onClick={scrollToBottom}
                >
                  Lihat State Pilihanmu!
                </Button>
              </Stack>
            </Stack>
            <Stack
              flex={1}
              direction={"row"}
              px={["0rem", "0rem", "6rem", "6rem", "6rem"]}
              flexWrap={"wrap"}
              justify={"space-around"}
              align={"end"}
            >
              <Boag />
              <Boag />
              <Boag />
            </Stack>
            <div
              ref={bottomRef}
              style={{ height: "1px", visibility: "hidden" }}
            />
          </>
        </StateBG>
      </Show>

      <Show breakpoint="(min-width: 1023px)">
        {/*desktop layout */}
        <StateBG>
          <Stack
            flex={1}
            w={"100%"}
            h={"100vh"}
            pt={"12rem"}
            pr={[0, 0, "0rem", "4rem", "6rem"]}
            align={{ base: "center", lg: "end" }}
            // bgColor={"blue.200"}
          >
            <Stack
              w={["32rem", "32rem", "46rem", "24rem", "46rem"]}
              align={"center"}
            >
              <Img
                src={"/state/banner.png"}
                w={["16rem", "24rem", "32rem", "32rem", "32rem"]}
                pb={["24rem", "16rem", "10rem", 0, 0]}
              />
              <Link to="/state/selectstate/1">
                <Button
                  w={{ base: "16rem", md: "20rem" }}
                  bgColor={"#44002B"}
                  textColor={"white"}
                  fontFamily={"Lexend"}
                  fontWeight={"light"}
                  fontSize={"lg"}
                >
                  Pilih UKM dan Komunitas
                </Button>
              </Link>
              <Button
                w={{ base: "16rem", md: "20rem" }}
                bgColor={"#44002B"}
                textColor={"white"}
                fontFamily={"Lexend"}
                fontWeight={"light"}
                fontSize={"lg"}
                // display={{ base: "none", lg: "flex" }}
                onClick={scrollToBottom}
              >
                Lihat State Pilihanmu!
              </Button>
            </Stack>
          </Stack>
          <Stack
            flex={1}
            align={"end"}
            direction={"row"}
            flexWrap={"wrap"}
            justify={"space-around"}
            pt={"12rem"}
          >
            <Boag />
            <Boag />
            <Boag />
          </Stack>
          <div
            ref={bottomRef}
            style={{ height: "1px", visibility: "hidden" }}
          />
        </StateBG>
      </Show>
    </>
  );
};

export default State;
