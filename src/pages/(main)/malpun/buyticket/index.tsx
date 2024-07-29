import { Heading, Stack, Text, Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BuyTicket = () => {
  return (
    <>
      <Stack
        align={"center"}
        color={"text.primary"}
        fontWeight={"900"}
        gap={{ base: 0, lg: 2 }}
        bgImage={{
          base: "/bg/scroll-claim-ticket-mobile.png",
          lg: "/bg/scroll-claim-ticket-desktop.png",
        }}
        bgSize={{
          base: "contain",
          md: "contain",
          lg: "contain",
          xl: "contain",
        }}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        w={"100%"}
        p={{ base: "8rem", lg: "6rem" }}
        px={{ base: "2rem", md: "2rem", lg: "4rem" }}
      >
        <Stack
          justifyContent={"center"}
          // SIZE FORM
          width={{ sm: "25%", md: "35%", lg: "40%", xl: "30%" }}
        >
          {/* JUDUL */}
          <Stack alignItems={"center"} paddingBottom={"3rem"}>
            <Stack color={"text.secondary"}>
              <Heading
                fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2.5rem" }}
                textAlign={"center"}
                fontFamily={"Luthier"}
              >
                Detail Pembeli
              </Heading>
            </Stack>
          </Stack>

          {/* START FORM */}
          <Stack>
            <Text fontFamily={"Luthier"} color={"text.primary"}>
              Nama Lengkap:
            </Text>
            <Input
              type="text"
              bgColor={"white"}
              borderColor={"text.primary"}
              borderWidth={"initial"}
              borderRadius={"0.75rem"}
            />
          </Stack>
          <Stack>
            <Text fontFamily={"Luthier"} color={"text.primary"}>
              Email:
            </Text>
            <Input
              type="email"
              bgColor={"white"}
              borderColor={"text.primary"}
              borderWidth={"initial"}
              borderRadius={"0.75rem"}
            />
          </Stack>
          {/* END FORM */}

          {/* BUTTON KEMBALI DAN KIRIM */}

          <Stack
            paddingTop={"3rem"}
            direction={{ base: "column", lg: "row" }}
            alignItems={{ base: "center", lg: "flex-end" }}
            justifyContent={"space-between"}
          >
            <Link to="/malpun">
              <Button
                bgColor={"button.primary"}
                w={{ base: "6rem", md: "8rem", lg: "8rem" }}
                variant={"ghost"}
                transition={"0.3s"}
                color={"text.tertiary"}
                rounded={"xl"}
                _hover={{ bgColor: "#3A0025" }}
              >
                <Text
                  fontFamily={"Lexend"}
                  fontWeight={"400"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                >
                  Kembali
                </Text>
              </Button>
            </Link>
            <Link to="/malpun/viewticket">
              <Button
                bgColor={"button.primary"}
                w={{ base: "6rem", md: "8rem", lg: "8rem" }}
                variant={"ghost"}
                transition={"0.3s"}
                color={"text.tertiary"}
                rounded={"xl"}
                _hover={{ bgColor: "#3A0025" }}
              >
                <Text
                  fontFamily={"Lexend"}
                  fontWeight={"400"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                >
                  Kirim
                </Text>
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default BuyTicket;
