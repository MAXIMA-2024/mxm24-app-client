import {
  Heading,
  Stack,
  Text,
  Button,
  Card,
  CardBody,
  Image,
  CardFooter,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const NomorList = [1, 2, 3, 4, 5];

// button atas
const BtStyle = ({ nomor }: { nomor: number }) => {
  return (
    <>
      <Link to={`/state/selectstate/${nomor}`}>
        <Button
          bgColor={"#FFDB7A"}
          color={"#661226"}
          outlineColor={"#661226"}
          paddingX={{ base: "1rem", md: "2rem" }}
          paddingY={"0rem"}
          borderRadius={{ base: "1rem", md: "2rem" }}
          _hover={{ bg: "#661226", color: "#FFDB7A" }}
        >
          <Text fontFamily={"Lexend"} fontSize={{ lg: "2rem" }}>
            {nomor}
          </Text>
        </Button>
      </Link>
    </>
  );
};

// kartu
const Kartu = () => {
  return (
    <WrapItem>
      <Card
        w={{ base: "10rem", md: "12rem", lg: "20rem" }}
        align={"center"}
        borderRadius={"1rem"}
      >
        <CardBody>
          <Stack align={"center"}>
            <Image src="/icons/placeholder-300.png" borderRadius="lg" />
            <Stack mt="4">
              <Heading fontFamily={"Lexend"} fontWeight={"semibold"} size="md">
                UKM
              </Heading>
            </Stack>
          </Stack>
        </CardBody>
        <CardFooter>
          <Stack direction={"row"} gap={"0"} pb={"1.5rem"}>
            <Stack
              bgColor={"#941636"}
              paddingX={{ base: "0.5rem", md: "1rem" }}
              borderLeftRadius={"1rem"}
            >
              <Text
                fontSize={{ base: "0.75rem", md: "1rem" }}
                fontFamily={"Lexend"}
                fontWeight={"semibold"}
                color={"white"}
              >
                Kuota
              </Text>
            </Stack>
            <Stack
              bgColor={"#FFB1C9"}
              paddingX={{ base: "0.5rem", md: "1rem" }}
              borderRightRadius={"1rem"}
            >
              <Text
                fontSize={{ base: "0.75rem", md: "1rem" }}
                fontFamily={"Lexend"}
                fontWeight={"semibold"}
                color={"#941636"}
              >
                0/100
              </Text>
            </Stack>
          </Stack>
        </CardFooter>
      </Card>
    </WrapItem>
  );
};

const SelectStateId = () => {
  const { id } = useParams<{ id: string }>(); // Get nomor from URL
  const [selectedNomor, setSelectedNomor] = useState<number | null>(null);

  useEffect(() => {
    console.log("URL Parameter:", id);
    // Update selectedNomor when URL changes
    if (id) {
      setSelectedNomor(parseInt(id, 10));
    }
  }, [id]);

  return (
    <Stack
      bgImage={"/bg/select-state-desktop.png"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      w={"100vw"}
    >
      {/* START CTA atas */}
      <Stack
        gap={"0"}
        align={"center"}
        justify={"center"}
        paddingTop={{ base: "20rem", md: "20rem", lg: "20rem" }}
        paddingBottom={{ md: "7.5rem", lg: "10rem" }}
      >
        <Stack
          bgColor={"#661226"}
          paddingX={"3rem"}
          borderTopRadius={"0.75rem"}
        >
          <Heading
            color={"#FFDB7A"}
            fontFamily={"Lexend"}
            fontWeight={"bold"}
            fontSize={{ base: "1.75rem", lg: "4rem" }}
          >
            Hari ke
          </Heading>
        </Stack>
        <Stack
          direction={"row"}
          bgColor={"#FFDB7A"}
          paddingX={"2rem"}
          paddingY={"1rem"}
          borderRadius={"2rem"}
          gap={{ base: "1rem", md: "1.5rem" }}
        >
          {/* START Button hari ke- */}
          {NomorList.map((nomor) => (
            <BtStyle key={nomor} nomor={nomor} />
          ))}
          {/* END Button hari ke- */}
        </Stack>
      </Stack>
      {/* END CTA atas */}

      {/* START MAIN */}
      <Stack
        bgImage={"/bg/map-state-desktop.png"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        maxW={"100vw"}
        paddingTop={{ base: "1.75rem", md: "2rem", lg: "5rem" }}
        paddingBottom={{ base: "3rem", md: "3rem", lg: "5rem" }}
      >
        {/* START Header main */}
        <Stack align={"center"} justify={"center"}>
          <Heading
            fontSize={{ base: "1.75rem", md: "2rem", xl: "4rem" }}
            color={"text.primary"}
            fontFamily={"Lexend"}
            fontWeight={"bold"}
          >
            {selectedNomor !== null
              ? `STATE HARI KE-${selectedNomor}`
              : `STATE HARI KE-1`}
          </Heading>
          <Text
            fontSize={{ base: "1rem", md: "1.5rem", xl: "2.5rem" }}
            color={"#941636"}
            fontFamily={"Lexend"}
            fontWeight={"semibold"}
          >
            Hari, 01 Bulan 2024
          </Text>
        </Stack>
        {/* END Header main */}

        {/* START card */}
        <Stack pt={{ base: "3rem", md: "3rem", lg: "10rem", xl: "13rem" }}>
          <Wrap
            justify={"center"}
            alignSelf={"center"}
            w={{ md: "90vw", lg: "80vw" }}
            h={"70vh"}
            overflowY={"auto"}
            spacing={"1rem"}
          >
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
            <Kartu />
          </Wrap>
        </Stack>
        {/* END card */}
      </Stack>
      {/* END MAIN */}
    </Stack>
  );
};

export default SelectStateId;
