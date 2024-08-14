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
        isChatimeEligible: boolean;
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
      const check = data.find(
        (toggle) =>
          toggle.name === "malpun-external" || toggle.name === "malpun-internal"
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
  }, [ticket]);

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
          {isMobile && ticket && (
            // <Image
            //   src="/icons/qr-dummy.png"
            //   w={"40%"}
            //   pos={"absolute"}
            //   mt={{ base: "2rem", lg: "0" }}
            // ></Image>

            <Box w={"40%"} pos={"absolute"} mt={{ base: "2rem", lg: "0" }}>
              <QRCode
                value={ticket.code}
                size={140}
                fgColor="#350025"
                bgColor="#d9d9d9"
              />
            </Box>
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
          {!isMobile && ticket && (
            // <Image
            //   src="/icons/qr-dummy.png"
            //   w={"60%"}
            //   pos={"absolute"}
            //   mr={{ base: "0rem", lg: "3.5rem" }}
            // ></Image>

            <Box w={"60%"} pos={"absolute"} mr={{ base: "0rem", lg: "2.4rem" }}>
              <QRCode
                value={ticket.code}
                size={256}
                fgColor="#350025"
                bgColor="#eee6e9"
              />
            </Box>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default MyTicket;
