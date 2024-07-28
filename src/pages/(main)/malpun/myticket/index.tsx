import { Heading, Stack, Text, Button, Image } from "@chakra-ui/react";

const MyTicket = () => {
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={{ base: "center", lg: "space-around" }}
        minH={"100vh"}
        minW={"100vw"}
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
          bgImage={{
            base: "/bg/mock-ticket-malpun-mobile.png",
            lg: "/bg/mock-ticket-malpun.png",
          }}
          bgSize={{ base: "22rem", md: "25rem", lg: "60rem", xl: "75rem" }}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          w={"100%"}
          p={{ base: "14rem", md: "10rem", lg: "18rem" }}
          px={{ base: "2rem", md: "8rem", lg: "4rem" }}
          align={"center"}
          position={"relative"}
        >
          <Stack position={"absolute"} top={"0"} right={"0"}>
            <Image src="/icons/qr-dummy.png" w={"25%"}></Image>
          </Stack>
          {/* <Button
            bg={"black"}
            color={"white"}
            position={"absolute"}
            top={"0"}
            ml={"45rem"}
            p={}
          >
            This is QR Scanner
          </Button> */}
        </Stack>
      </Stack>
    </>
  );
};

export default MyTicket;
