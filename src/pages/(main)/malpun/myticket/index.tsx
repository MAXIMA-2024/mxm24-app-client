import {
  Heading,
  Stack,
  Text,
  Button,
  Image,
  keyframes,
} from "@chakra-ui/react";

const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`;

const MyTicket = () => {
  return (
    <>
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
        animation={`${zoomIn} 1s`}
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
    </>
  );
};

export default MyTicket;
