import { Heading, Stack, Text, Button, Image } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

const ClaimTicket = () => {
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={{ base: "center", lg: "space-around" }}
        minH={"100vh"}
        bgImage={{
          base: "/bg/malpun-bg-mobile.png",
          lg: "/bg/malpun-bg-desktop.png",
        }}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPosition={{ base: "", md: "center" }}
        pt={{ base: "5rem", lg: "5rem" }}
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
          bgSize={{ base: "22rem", md: "30rem", lg: "contain" }}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          w={"100%"}
          p={"8rem"}
          px={{ base: "2rem", md: "8rem", lg: "4rem" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            flex={1}
            justifyContent={"space-between"}
          >
            {/* LEFT IMAGE */}
            <Stack
              alignItems={{ base: "center", lg: "start" }}
              justifyContent={{ lg: "center" }}
              mb={{ base: "1rem" }}
            >
              <Image
                src="/icons/claim-ticket-malpun.png"
                w={{ base: "10rem", md: "18rem", lg: "25rem" }}
                mr={{ base: "0", lg: "5rem" }}
              ></Image>
            </Stack>
            {/* RIGHT SIDE */}
            <Stack justifyContent={"center"}>
              <Stack alignItems={"center"}>
                <Stack color={"text.secondary"}>
                  <Heading
                    fontSize={{ base: "1.2rem", md: "2rem", lg: "2rem" }}
                    textAlign={"center"}
                    fontFamily={"Luthier"}
                  >
                    Tiket Malam Puncak
                  </Heading>
                  <Heading
                    fontSize={{ base: "1.2rem", md: "2rem", lg: "2.5rem" }}
                    textAlign={"center"}
                    fontFamily={"Luthier"}
                  >
                    MAXIMA 2024{" "}
                  </Heading>
                </Stack>
              </Stack>
              {/* ICONS AND INFO */}
              <Stack
                color={"text.secondary"}
                fontFamily={"Lexend"}
                mt={{ base: 3, md: 5 }}
                alignItems={{ base: "center", lg: "start" }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  fontWeight={700}
                  my={{ base: 1, md: 3 }}
                >
                  <Image src="/icons/date-icon.png" w={"2rem"} mr={2}></Image>
                  <Text fontSize={{ base: "0.9rem", md: "1rem" }}>
                    7 Oktober 2024
                  </Text>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  fontWeight={700}
                  my={{ base: 1, md: 3 }}
                >
                  <Image src="/icons/time-icon.png" w={"2rem"} mr={2}></Image>
                  <Text fontSize={{ base: "0.9rem", md: "1rem" }}>
                    00:00 WIB
                  </Text>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  fontWeight={700}
                  my={{ base: 1, md: 3 }}
                >
                  <Image src="/icons/loct-icon.png" w={"1.5rem"} mr={2}></Image>
                  <Text fontSize={{ base: "0.9rem", md: "1rem" }}>
                    Lapangan Parkir UMN
                  </Text>
                </Stack>
              </Stack>
              {/* BUTTON CLAIM */}
              <Stack alignItems={{ base: "center", lg: "flex-end" }}>
                <Button
                  bgColor={"button.primary"}
                  // p={{ base: 5, md: 8, lg: 10 }}
                  // py={{ base: 0, md: 8, lg: 12 }}
                  // px={{ base: "2rem", md: "4rem", lg: "10rem" }}
                  w={{ base: "6rem", md: "8rem", lg: "8rem" }}
                  variant={"ghost"}
                  transition={"0.3s"}
                  color={"text.tertiary"}
                  rounded={"xl"}
                  _hover={{ bgColor: "#3A0025" }}
                  mt={{ base: 5, lg: 10 }}
                  mb={{ base: 5 }}
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
