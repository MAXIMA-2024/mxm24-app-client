import {
  Stack,
  Image,
  keyframes,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

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
  const { data } = useSWR<Toggle[]>("/toggle");
  const toast = useToast();
  const nav = useNavigate();

  useEffect(() => {
    if (data) {
      const check = data.find(
        (toggle) => toggle.name === "malpun-external" || "malpun-internal"
      );
      if (!check || !check.toggle) {
        toast({
          title: "Access denied!",
          description:
            "Anda belum bisa melihat tiket Malam Puncak anda saat ini.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        nav("/");
      }
    }
  }, [data]);

  const imageRightSrc = useBreakpointValue({
    base: "/bg/bottom-ticket-malpun.png",
    lg: "/bg/right-ticket-malpun.png",
  });

  const imageLeftSrc = useBreakpointValue({
    base: "/bg/top-ticket-malpun.png",
    lg: "/bg/left-ticket-malpun.png",
  });

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      <Stack
        w={"100%"}
        alignItems={"center"}
        position={"relative"}
        animation={`${zoomIn} 1s`}
        direction={{ base: "column", lg: "row" }}
        gap={0}
        justifyContent={"center"}
        pt={{ base: "2rem", lg: "6rem" }}
      >
        {/* LEFT TICKET */}
        <Stack
          w={{ base: "22rem", md: "25rem", lg: "60rem", xl: "50rem" }}
          align={"center"}
          justify={"center"}
          pos={"relative"}
        >
          <Image src={imageLeftSrc}></Image>
          {/* QR Placeholder MOBILE */}
          {isMobile && (
            <Image
              src="/icons/qr-dummy.png"
              w={"40%"}
              pos={"absolute"}
              mt={{ base: "2rem", lg: "0" }}
            ></Image>
          )}
        </Stack>
        {/* RIGHT TICKET */}
        <Stack
          w={{ base: "22rem", md: "25rem", lg: "34rem", xl: "28.5rem" }}
          pos={"relative"}
          justify={"center"}
          align={"center"}
        >
          <Image src={imageRightSrc}></Image>
          {/* QR Placeholder DESKTOP */}
          {!isMobile && (
            <Image
              src="/icons/qr-dummy.png"
              w={"60%"}
              pos={"absolute"}
              mr={{ base: "0rem", lg: "3.5rem" }}
            ></Image>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default MyTicket;
