import { Stack, Text, Button, Image, keyframes } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [isTicketViewed, setIsTicketViewed] = useState(false);

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
                        Nama lengkap
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
                src="/icons/claim-ticket-malpun-v2.png"
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
              <Link to="/malpun/myticket">
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
