import {
  Stack,
  Text,
  Button,
  Image,
  keyframes,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useSWR from "swr";

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

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

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

const ViewTicket = () => {
  const { data } = useSWR<Toggle[]>("/toggle");
  const toast = useToast();
  const nav = useNavigate();
  const [isTicketViewed, setIsTicketViewed] = useState(false);
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
          description: "Anda belum bisa melihat tiket Malam Puncak saat ini.",
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

  console.log("ticket", ticket);
  useEffect(() => {
    if (!isLoading && !ticket) {
      nav("/malpun");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticket, isLoading]);

  return (
    <>
      <Stack
        align={"center"}
        color={"text.primary"}
        fontWeight={"900"}
        bgImage={{
          base: "/bg/scroll-view-ticket-mobile.png",
          lg: "/bg/scroll-view-ticket-desktop.png",
        }}
        bgSize={{ base: "22rem", md: "25rem", lg: "60rem", xl: "65rem" }}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        w={"100%"}
        p={{ base: "14rem", md: "10rem", lg: "8rem" }}
        mt={{ base: 0, lg: "5rem" }}
        px={{ base: "2rem", md: "8rem", lg: "4rem" }}
      >
        <Stack direction={"column"} flex={1}>
          <Stack
            justifyContent={"center"}
            gap={{ base: "1.5rem", md: "2.5rem", lg: "1rem" }}
          >
            <Stack alignItems={"center"}>
              <Stack color={"text.secondary"}>
                <Text
                  fontSize={{ base: "1.8rem", md: "2rem", lg: "2.2rem" }}
                  textAlign={"center"}
                  fontFamily={"Luthier"}
                  fontWeight={"bold"}
                  animation={isTicketViewed ? `${fadeIn} 1s` : "none"}
                >
                  {isTicketViewed ? (
                    <Stack>
                      <Text fontSize={"1.5rem"}>Hai,</Text>
                      <Text fontSize={{ base: "2rem", lg: "3rem" }}>
                        {ticket?.status === "internal"
                          ? ticket.detail.mahasiswa.name
                          : ticket?.detail.fullName}
                      </Text>
                    </Stack>
                  ) : (
                    <Stack>
                      <Text>Selamat! Kamu telah</Text>
                    </Stack>
                  )}
                  {!isTicketViewed && <Text>mendapatkan tiket</Text>}
                </Text>
              </Stack>
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              alignContent={"center"}
              animation={!isTicketViewed ? `${zoomIn} 1s` : "none"}
            >
              <Image
                src="/myicons/claim-ticket-malpun-v2.png"
                w={{ base: "16rem", md: "16rem", lg: "15rem" }}
              ></Image>
            </Stack>

            <Stack alignItems={"center"}>
              <Stack color={"text.secondary"}>
                <Text
                  fontSize={{ base: "0.7rem", md: "0.9rem", lg: "1rem" }}
                  textAlign={"center"}
                  fontFamily={"Lexend"}
                  fontWeight={"semibold"}
                  animation={!isTicketViewed ? `${fadeIn} 1s` : "none"}
                >
                  {isTicketViewed ? (
                    <Stack w={{ base: "18rem", lg: "40rem" }} gap={"1rem"}>
                      <Text fontWeight={"medium"}>
                        Kamu telah berhasil mendapatkan tiket untuk{" "}
                        <b>Malam Puncak MAXIMA 2024!</b> Jangan lupa untuk
                        membawa tiket yang dikirim lewat Email ini pada saat
                        tanggal Malam Puncak agar bisa berpartisipasi dalam
                        kegiatan.
                      </Text>
                      <Text fontWeight={"medium"}>
                        Selamat menikmati dan sampai jumpa!
                      </Text>
                    </Stack>
                  ) : (
                    "Jangan lupa untuk cek Email untuk konfirmasi"
                  )}
                  {!isTicketViewed && (
                    <Text>
                      dan akses tiket <b>Malam Puncak MAXIMA 2024.</b>
                    </Text>
                  )}
                </Text>
              </Stack>
            </Stack>

            {/* BUTTON CLAIM */}
            {!isTicketViewed && (
              <Link to={`/malpun/myticket?order_id=${ticket?.code}`}>
                <Stack alignItems={"center"}>
                  <Button
                    bgColor={"button.primary"}
                    w={{ base: "6rem", md: "8rem", lg: "10rem" }}
                    variant={"ghost"}
                    transition={"0.3s"}
                    color={"text.tertiary"}
                    rounded={"xl"}
                    _hover={{ bgColor: "#3A0025" }}
                    mt={"1rem"}
                    onClick={() => setIsTicketViewed(true)}
                  >
                    <Text
                      fontFamily={"Lexend"}
                      fontWeight={"400"}
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                    >
                      Lihat Tiket
                    </Text>
                  </Button>
                </Stack>
              </Link>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ViewTicket;
