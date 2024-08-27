import useAuth from "@/hooks/useAuth";
import { Heading, Stack, Text, Button, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { motion } from "framer-motion";
import useLoading from "@/hooks/useLoading";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type TicketMalpun =
  | {
      status: "unclaimed";
    }
  | {
      status: "claimed";
      ticket: {
        id: number;
        code: string;
        attendance: boolean;
        attendanceTime: string | null;
        alfagiftId: string | null;
        createdAt: string;
        mahasiswa: {
          name: string;
          nim: string;
          email: string;
        };
      };
    };

const Inbutton = () => {
  const { data } = useSWR<Toggle[]>("/toggle");
  const { data: ticket } = useSWR<TicketMalpun>("/malpun/internal");

  const claimTicket = () => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "malpun-internal");
      if (!check || !check.toggle) {
        return false;
      }
      return true;
    }
    return false;
  };

  const isTicketClaimable = claimTicket();

  return (
    <>
      <Stack>
        {isTicketClaimable ? (
          <Link
            to={
              ticket?.status === "unclaimed"
                ? "/malpun/claimticket"
                : `/malpun/myticket?order_id=${ticket?.ticket.code}`
            }
          >
            <Button
              as={motion.button}
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
              // anims
              variants={{
                initial: {
                  opacity: 0,
                  // y: -50,
                  scale: 0.5,
                },
                entry: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 2,
                    duration: 1,
                  },
                },
              }}
              initial="initial"
              whileInView={"entry"}
            >
              <Text
                fontFamily={"Lexend"}
                fontWeight={"400"}
                fontSize={{ base: "medium", md: "larger", lg: "xx-large" }}
              >
                {ticket?.status === "unclaimed" ? "KLAIM TIKET" : "LIHAT TIKET"}
              </Text>
            </Button>
          </Link>
        ) : (
          <Tooltip
            label={
              <>
                <Text>Klaim Tiket MalPun </Text>
                <Text>akan segera dibuka</Text>
              </>
            }
            color={"text.primary"}
            aria-label="A tooltip"
            bgColor={"white"}
            rounded={"lg"}
            px={"1rem"}
            py={"0.5rem"}
            shadow={"lg"}
            textAlign={"center"}
          >
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
              isDisabled={true}
            >
              <Text
                fontFamily={"Lexend"}
                fontWeight={"400"}
                fontSize={{ base: "medium", md: "larger", lg: "xx-large" }}
              >
                KLAIM TIKET
              </Text>
            </Button>
          </Tooltip>
        )}
      </Stack>
    </>
  );
};

const Exbutton = () => {
  const { data } = useSWR<Toggle[]>("/toggle");

  const buyTicket = () => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "malpun-external");
      if (!check || !check.toggle) {
        return false;
      }
      return true;
    }
  };

  const isTicketBuyable = buyTicket();

  return (
    <>
      <Stack>
        {isTicketBuyable ? (
          <Link to="/malpun/buyticket">
            <Button
              as={motion.button}
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

              // anims
              variants={{
                initial: {
                  opacity: 0,
                  // y: -50,
                  scale: 0.5,
                },
                entry: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 2,
                    duration: 1,
                  },
                },
              }}
              initial="initial"
              whileInView={"entry"}
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
        ) : (
          <Tooltip
            label={
              <>
                <Text>Pembelian Tiket MalPun </Text>
                <Text>akan segera dibuka</Text>
              </>
            }
            color={"text.primary"}
            aria-label="A tooltip"
            bgColor={"white"}
            rounded={"lg"}
            px={"1rem"}
            py={"0.5rem"}
            shadow={"lg"}
            textAlign={"center"}
          >
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
              }}
              mt={{ base: "5rem", lg: 0 }}
              mb={{ base: "13rem", lg: "7rem" }}
              shadow={"0 0 5rem #ffffff80"}
              isDisabled={true}
            >
              <Text
                fontFamily={"Lexend"}
                fontWeight={"400"}
                fontSize={{ base: "medium", md: "larger", lg: "xx-large" }}
              >
                PEMBELIAN TIKET
              </Text>
            </Button>
          </Tooltip>
        )}
      </Stack>
    </>
  );
};

const Malpun = () => {
  const auth = useAuth();
  const { isLoaded } = useLoading();

  const isMahasiswa = auth.user?.role === "mahasiswa";

  if (!isLoaded) {
    return <></>;
  }

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
          as={motion.h1}
          fontFamily={"Luthier"}
          fontSize={{ base: "2rem", md: "3rem", lg: "4rem" }}
          textShadow={"0 0 5rem #000000"}
          color={"text.tertiary"}
          // anims
          variants={{
            initial: {
              opacity: 0,
              y: -50,
            },
            entry: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 1,
              },
            },
          }}
          initial="initial"
          whileInView={"entry"}
        >
          MALAM PUNCAK
        </Heading>
        <Heading
          as={motion.h1}
          fontFamily={"Luthier"}
          fontSize={{
            base: "2rem",
            md: "2rem",
            lg: "3rem",
            xl: "4rem",
          }}
          textShadow={"0 0 5rem #000000"}
          color={"button.yellow"}
          // anims
          variants={{
            initial: {
              opacity: 0,
              y: -50,
            },
            entry: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 1.5,
                duration: 1,
              },
            },
          }}
          initial="initial"
          whileInView={"entry"}
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
