import { Stack, Image, keyframes, useBreakpointValue } from "@chakra-ui/react";

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
  const imageRightSrc = useBreakpointValue({
    base: "/bg/mock-ticket-malpun-mobile.png",
    lg: "/bg/right-ticket-malpun.png",
  });

  const imageLeftSrc = useBreakpointValue({
    base: "/bg/mock-ticket-malpun-mobile.png",
    lg: "/bg/left-ticket-malpun.png",
  });

  return (
    <>
      <Stack
        w={"100%"}
        alignItems={"center"}
        position={"relative"}
        animation={`${zoomIn} 1s`}
        direction={"row"}
        gap={0}
        justifyContent={"center"}
        pt={{ base: "2rem", lg: "6rem" }}
      >
        {/* LEFT TICKET */}
        <Stack w={{ base: "22rem", md: "25rem", lg: "60rem", xl: "50rem" }}>
          <Image src={imageLeftSrc}></Image>
        </Stack>
        {/* RIGHT TICKET */}
        <Stack w={{ base: "22rem", md: "25rem", lg: "34rem", xl: "28.5rem" }}>
          <Image src={imageRightSrc}></Image>
          {/* QR Placeholder */}
          {/* <Stack position={"absolute"} top={"0"} right={"0"}>
            <Image src="/icons/qr-dummy.png" w={"25%"}></Image>
          </Stack> */}
        </Stack>
      </Stack>
    </>
  );
};

export default MyTicket;
