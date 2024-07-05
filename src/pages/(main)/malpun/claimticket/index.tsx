import { Heading, Stack, Text, Button, Image } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

const ClaimTicket = () => {
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={{ base: "start", lg: "space-around" }}
        minH={"100vh"}
        bgImage={{
          base: "/bg/malpun-bg-mobile.png",
          lg: "/bg/malpun-bg-desktop.png",
        }}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        pt={{ base: "2rem", lg: "5rem" }}
      >
        <Stack
          align={"center"}
          color={"text.primary"}
          fontWeight={"900"}
          gap={{ base: 0, lg: 2 }}
          bgImage={{
            base: "/bg/scroll-claim-ticket-mobile.png",
            lg: "/bg/scroll-claim-ticket-desktop.png",
          }}
          bgSize={"contain"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          w={"100%"}
          p={"8rem"}
        >
          <Stack direction={"row"} flex={1} justifyContent={"space-between"}>
            {/* LEFT IMAGE */}
            <Stack>
              <Image
                src="/icons/claim-ticket-malpun.png"
                w={{ base: "5rem", lg: "28rem" }}
                mr={{ base: "0", lg: "5rem" }}
              ></Image>
            </Stack>
            {/* RIGHT SIDE */}
            <Stack justifyContent={"center"}>
              <Stack alignItems={"center"}>
                <Stack color={"text.secondary"}>
                  <Heading
                    fontSize={{ base: "1.5rem", md: "2.5rem", lg: "2.5rem" }}
                    textAlign={"center"}
                    fontFamily={"Luthier"}
                  >
                    Tiket Malam Puncak
                  </Heading>
                  <Heading
                    fontSize={{ base: "1.5rem", md: "2.5rem", lg: "2.5rem" }}
                    textAlign={"center"}
                    fontFamily={"Luthier"}
                  >
                    MAXIMA 2024{" "}
                  </Heading>
                </Stack>
              </Stack>
              {/* ICONS AND INFO */}
              <Stack color={"text.secondary"} fontFamily={"Lexend"} mt={5}>
                <Stack
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  fontWeight={700}
                  my={3}
                >
                  <Image src="/icons/date-icon.png" w={"2rem"} mr={2}></Image>
                  <Text>7 Oktober 2024</Text>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  fontWeight={700}
                  my={3}
                >
                  <Image src="/icons/time-icon.png" w={"2rem"} mr={2}></Image>
                  <Text>00:00 WIB</Text>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  fontWeight={700}
                  my={3}
                >
                  <Image src="/icons/loct-icon.png" w={"1.5rem"} mr={2}></Image>
                  <Text>Lapangan Parkir UMN</Text>
                </Stack>
              </Stack>
              {/* BUTTON CLAIM */}
              <Stack alignItems={"flex-end"}>
                <Button
                  bgColor={"button.primary"}
                  // p={{ base: 5, md: 8, lg: 10 }}
                  // py={{ base: 0, md: 8, lg: 12 }}
                  // px={{ base: "2rem", md: "4rem", lg: "10rem" }}
                  w={{ base: "5rem", md: "6rem", lg: "8rem" }}
                  variant={"ghost"}
                  transition={"0.3s"}
                  color={"text.tertiary"}
                  rounded={"xl"}
                  _hover={{ bgColor: "#3A0025" }}
                  mt={{ base: 10, lg: 10 }}
                >
                  <Text
                    fontFamily={"Lexend"}
                    fontWeight={"400"}
                    fontSize={{ base: "small", md: "medium", lg: "large" }}
                  >
                    Klaim
                  </Text>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ClaimTicket;
