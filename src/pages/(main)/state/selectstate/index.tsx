import {
  Heading,
  Stack,
  Text,
  Button,
  Card,
  CardBody,
  Image,
  CardFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Button hari ke-
const BtAtas = () => {
  return (
    <>
      <Link to={"/1"}>
        <Button
          bgColor={"#FFDB7A"}
          color={"#661226"}
          outlineColor={"#661226"}
          paddingX={"2rem"}
          paddingY={"0rem"}
          borderRadius={"2rem"}
          _hover={{ bg: "#661226", color: "#FFDB7A" }}
        >
          <Text fontFamily={"Lexend"} fontSize={{ lg: "1.5rem" }}>
            1
          </Text>
        </Button>
      </Link>
      <Button
        bgColor={"#FFDB7A"}
        color={"#661226"}
        outlineColor={"#661226"}
        paddingX={"2rem"}
        paddingY={"0rem"}
        borderRadius={"2rem"}
        _hover={{ bg: "#661226", color: "#FFDB7A" }}
      >
        <Text fontFamily={"Lexend"} fontSize={{ lg: "1.5rem" }}>
          2
        </Text>
      </Button>
      <Button
        bgColor={"#FFDB7A"}
        color={"#661226"}
        outlineColor={"#661226"}
        paddingX={"2rem"}
        paddingY={"0rem"}
        borderRadius={"2rem"}
        _hover={{ bg: "#661226", color: "#FFDB7A" }}
      >
        <Text fontFamily={"Lexend"} fontSize={{ lg: "1.5rem" }}>
          3
        </Text>
      </Button>
      <Button
        bgColor={"#FFDB7A"}
        color={"#661226"}
        outlineColor={"#661226"}
        paddingX={"2rem"}
        paddingY={"0rem"}
        borderRadius={"2rem"}
        _hover={{ bg: "#661226", color: "#FFDB7A" }}
      >
        <Text fontFamily={"Lexend"} fontSize={{ lg: "1.5rem" }}>
          4
        </Text>
      </Button>
      <Button
        bgColor={"#FFDB7A"}
        color={"#661226"}
        outlineColor={"#661226"}
        paddingX={"2rem"}
        paddingY={"0rem"}
        borderRadius={"2rem"}
        _hover={{ bg: "#661226", color: "#FFDB7A" }}
      >
        <Text fontFamily={"Lexend"} fontSize={{ lg: "1.5rem" }}>
          5
        </Text>
      </Button>
    </>
  );
};

const SelectState = () => {
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
        paddingTop={{ lg: "20rem" }}
        paddingBottom={{ lg: "10rem" }}
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
            fontSize={{ lg: "2.5rem" }}
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
          gap={"1.5rem"}
        >
          {/* START Button hari ke- */}
          <BtAtas />
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
        paddingTop={{ lg: "8.5rem" }}
        paddingBottom={{ lg: "5rem" }}
      >
        {/* START Header main */}
        <Stack align={"center"} justify={"center"}>
          <Heading
            color={"text.primary"}
            fontFamily={"Lexend"}
            fontWeight={"bold"}
          >
            STATE HARI KE-1
          </Heading>
          <Text color={"#941636"} fontFamily={"Lexend"} fontWeight={"semibold"}>
            Hari, 01 Bulan 2024
          </Text>
        </Stack>
        {/* END Header main */}
        {/* START card */}
        <Stack pt={"10rem"} px={"3rem"}>
          <Card maxW={"sm"} align={"center"} borderRadius={"1rem"}>
            <CardBody>
              <Stack align={"center"}>
                <Image src="/icons/placeholder-300.png" borderRadius="lg" />
                <Stack mt="6">
                  <Heading
                    fontFamily={"Lexend"}
                    fontWeight={"semibold"}
                    size="md"
                  >
                    UKM
                  </Heading>
                </Stack>
              </Stack>
            </CardBody>
            <CardFooter>
              <Stack direction={"row"} gap={"0"} pb={"1.5rem"}>
                <Stack
                  bgColor={"#941636"}
                  paddingX={"1.5rem"}
                  borderLeftRadius={"1rem"}
                >
                  <Text
                    fontFamily={"Lexend"}
                    fontWeight={"semibold"}
                    color={"white"}
                  >
                    Kuota
                  </Text>
                </Stack>
                <Stack
                  bgColor={"#FFB1C9"}
                  paddingX={"1.5rem"}
                  borderRightRadius={"1rem"}
                >
                  <Text
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
        </Stack>
        {/* END card */}
      </Stack>
      {/* END MAIN */}
    </Stack>
  );
};

export default SelectState;
