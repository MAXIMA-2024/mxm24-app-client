import useAuth from "@/hooks/useAuth";
import { Heading, Stack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Inbutton = () => {
  return (
    <>
      <Stack>
        <Link to="/malpun/claimticket">
          <Button
            bgColor={"button.primary"}
            p={{ base: 5, md: 8, lg: 10 }}
            py={{ base: 0, md: 8, lg: 12 }}
            px={{ base: "2rem", md: "4rem", lg: "10rem" }}
            variant={"ghost"}
            transition={"0.3s"}
            color={"text.tertiary"}
            rounded={"xl"}
            _hover={{ bgColor: "#3A0025" }}
            mt={{ base: "5rem", lg: 0 }}
            shadow={"0 0 5rem #ffffff80"}
            mb={{ base: "13rem", lg: "7rem" }}
          >
            <Text
              fontFamily={"Lexend"}
              fontWeight={"400"}
              fontSize={{ base: "medium", md: "larger", lg: "xx-large" }}
            >
              KLAIM TIKET
            </Text>
          </Button>
        </Link>
      </Stack>
    </>
  );
};

const Exbutton = () => {
  return (
    <>
      <Stack>
        <Link to="/malpun/buyticket">
          <Button
            bgColor={"button.primary"}
            p={{ base: 5, md: 8, lg: 10 }}
            py={{ base: 0, md: 8, lg: 12 }}
            px={{ base: "2rem", md: "4rem", lg: "10rem" }}
            variant={"ghost"}
            transition={"0.3s"}
            color={"text.tertiary"}
            rounded={"xl"}
            _hover={{
              bgColor: "#3A0025",
              transform: "scale(1.025)",
              // borderWidth: "thick",
            }}
            mt={{ base: "5rem", lg: 0 }}
            mb={{ base: "13rem", lg: "7rem" }}
            shadow={"0 0 5rem #ffffff80"}
            // borderColor={"#fff"}
            // borderWidth={"medium"}
          >
            <Text
              fontFamily={"Lexend"}
              fontWeight={"400"}
              fontSize={{ base: "medium", md: "larger", lg: "xx-large" }}
            >
              PEMBELIAN TIKET
            </Text>
          </Button>
        </Link>
      </Stack>
    </>
  );
};

const Malpun = () => {
  const auth = useAuth();

  const isMahasiswa = auth.user?.role === "mahasiswa";

  return (
    <>
      <Stack
        align={"center"}
        color={"text.primary"}
        fontWeight={"900"}
        gap={{ base: 0, lg: 2 }}
        pt={{ base: "0rem", md: "18rem", lg: "7rem" }}
      >
        <Heading
          fontFamily={"Luthier"}
          fontSize={{ base: "2rem", md: "3rem", lg: "4rem" }}
          textShadow={"0 0 5rem #000000"}
          color={"text.tertiary"}
        >
          MALAM PUNCAK
        </Heading>
        <Heading
          fontFamily={"Luthier"}
          fontSize={{
            base: "2rem",
            md: "2rem",
            lg: "3rem",
            xl: "4rem",
          }}
          textShadow={"0 0 5rem #000000"}
          color={"button.yellow"}
        >
          MAXIMA 2024
        </Heading>
      </Stack>
      {/* {!isMahasiswa ? <Inbutton /> : <Exbutton />} */}
      {!isMahasiswa ? <Exbutton /> : <Inbutton />}
    </>
  );
};

export default Malpun;
