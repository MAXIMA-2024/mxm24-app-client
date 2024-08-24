import {
  Stack,
  Image,
  keyframes,
  useBreakpointValue,
  useToast,
  Box,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useSWR from "swr";
import QRCode from "react-qr-code";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type TicketDetails =
  | {
      code: string;
      status: "internal";
      detail: {
        mahasiswa: {
          email: string;
          name: string;
          nim: string;
        };
      } & {
        id: number;
        code: string;
        mahasiswaId: number;
        attendance: boolean;
        attendanceTime: Date | null;
        alfagiftId: string | null;
        createdAt: Date;
        updatedAt: Date;
      };
    }
  | {
      code: string;
      status: "external";
      detail: {
        id: number;
        code: string;
        fullName: string;
        email: string;
        transactionId: string | null;
        validatedAt: Date | null;
        attendance: boolean;
        attendanceTime: Date | null;
        alfagiftId: string | null;
        isChatimeBundle: boolean;
        createdAt: Date;
        updatedAt: Date;
      };
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
  const [search] = useSearchParams();
  const { data: ticket, isLoading } = useSWR<TicketDetails>(
    `/malpun/ticket/${search.get("order_id")}`
  );

  useEffect(() => {
    if (data) {
      const hasAccess = data.some(
        (toggle) =>
          (toggle.name === "malpun-internal" && toggle.toggle) ||
          (toggle.name === "malpun-external" && toggle.toggle)
      );
      if (!hasAccess) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (!search.has("order_id")) {
      toast({
        title: "Access denied!",
        description: "Request tidak valid",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      nav("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    if (!isLoading && !ticket) {
      nav("/malpun");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticket, isLoading]);

  const getImageSrc = (
    position: "left" | "right" | "top" | "bottom",
    isMobile: boolean
  ) => {
    if (ticket?.status === "internal") {
      return isMobile
        ? `/ticket/${position}-in-ticket-mobile.png`
        : `/ticket/${position}-in-ticket-desktop.png`;
    } else if (ticket?.status === "external") {
      if (ticket.detail.isChatimeBundle) {
        return isMobile
          ? `/ticket/${position}-ex-chatime-ticket-mobile.png`
          : `/ticket/${position}-ex-chatime-ticket-desktop.png`;
      } else {
        return isMobile
          ? `/ticket/${position}-ex-ticket-mobile.png`
          : `/ticket/${position}-ex-ticket-desktop.png`;
      }
    }
  };

  const qrCodeSize = useBreakpointValue({ base: 160, lg: 214, xl: 256 });

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
        {/* MOBILE TICKET (TOP & BOTTOM) */}
        {isMobile && (
          <>
            <Stack
              w={{ base: "22rem", md: "25rem" }}
              align={"center"}
              justify={"center"}
              pos={"relative"}
            >
              <Image src={getImageSrc("top", isMobile)}></Image>
              {ticket && (
                <Box w={"45%"} pos={"absolute"}>
                  <QRCode
                    value={ticket.code}
                    size={qrCodeSize}
                    fgColor="#350025"
                    bgColor="#d9d9d9"
                  />
                </Box>
              )}
            </Stack>
            <Stack
              w={{ base: "22rem", md: "25rem" }}
              align={"center"}
              justify={"center"}
              pos={"relative"}
            >
              <Image src={getImageSrc("bottom", isMobile)}></Image>
            </Stack>
          </>
        )}

        {/* DESKTOP TICKET (LEFT & RIGHT) */}
        {!isMobile && (
          <>
            <Stack
              w={{ base: "22rem", md: "25rem", lg: "40rem", xl: "48rem" }}
              align={"center"}
              justify={"center"}
              pos={"relative"}
            >
              <Image src={getImageSrc("left", isMobile!)}></Image>
            </Stack>
            <Stack
              w={
                ticket?.status === "external"
                  ? { base: "22rem", md: "25rem", lg: "22.8rem", xl: "27.3rem" }
                  : { base: "22rem", md: "25rem", lg: "22.5rem", xl: "27rem" }
              }
              pos={"relative"}
              justify={"center"}
              align={"center"}
            >
              <Image src={getImageSrc("right", isMobile!)}></Image>
              {ticket && (
                <Box w={"63%"} pos={"absolute"}>
                  <QRCode
                    value={ticket.code}
                    size={qrCodeSize}
                    fgColor="#350025"
                    bgColor="#eee6e9"
                  />
                </Box>
              )}
            </Stack>
          </>
        )}
      </Stack>
    </>
  );
};

export default MyTicket;
