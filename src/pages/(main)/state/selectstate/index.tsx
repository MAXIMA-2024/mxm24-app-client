import { Heading, Stack, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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

const SelectState = () => {
  return (
    <Stack
      bgImage={"/bg/select-state-desktop.png"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      w={"100vw"}
      h={"100vh"}
    >
      {/* START logo atas */}
      <Stack
        alignSelf={"center"}
        mt={"2rem"}
        bgColor={"#BBDEE7"}
        p={"1rem"}
        borderRadius={"50%"}
        w={"5rem"}
        h={"5rem"}
        display={{ base: "flex", lg: "none" }}
      >
        <Image
          src="/icons/LOGO-MAXIMA-OFFICIAL.png"
          w={"2.5rem"}
          alignSelf={"center"}
          justifySelf={"center"}
        />
      </Stack>
      {/* END logo atas */}

      {/* START CTA atas */}
      <Stack
        gap={"0"}
        align={"center"}
        justify={"center"}
        paddingTop={{ base: "17rem", md: "20rem", lg: "20rem" }}
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
    </Stack>
  );
};

export default SelectState;
