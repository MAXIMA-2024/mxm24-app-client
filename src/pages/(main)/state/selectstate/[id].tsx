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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const SelectStateId = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams<{ id: string }>();
  const [selectedNomor, setSelectedNomor] = useState<number | null>(null);
  const NomorList = [1, 2, 3, 4, 5];

  useEffect(() => {
    console.log("URL Parameter:", id);
    if (id) {
      setSelectedNomor(parseInt(id, 10));
    }
  }, [id]);

  // button atas
  const BtStyle = ({ nomor }: { nomor: number }) => {
    const location = useLocation();
    const isActive = location.pathname.includes(`${nomor}`);

    return (
      <Link to={`/state/selectstate/${nomor}`}>
        <Button
          bgColor={isActive ? "#661226" : "#FFDB7A"}
          color={isActive ? "#FFDB7A" : "#661226"}
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
    );
  };

  // kartu
  const Kartu = () => {
    return (
      <WrapItem>
        <Box onClick={onOpen} cursor="pointer">
          <Card
            w={{ base: "10rem", md: "12rem", lg: "20rem" }}
            align={"center"}
            borderRadius={"1rem"}
          >
            <CardBody>
              <Stack align={"center"}>
                <Image src="/icons/placeholder-300.png" borderRadius="lg" />
                <Stack mt="4">
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
        </Box>
      </WrapItem>
    );
  };

  return (
    <Stack
      bgImage={"/bg/select-state-desktop.png"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      w={"100vw"}
    >
      {/* START logo atas */}
      {/* <Stack
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
      </Stack> */}
      {/* END logo atas */}

      {/* START CTA atas */}
      <Stack
        gap={"0"}
        align={"center"}
        justify={"center"}
        paddingTop={{ base: "12rem", md: "20rem", lg: "20rem" }}
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
        paddingTop={{ base: "3rem", md: "2.5rem", lg: "5rem" }}
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
            css={{
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#D9D9D9",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#D9D9D975",
                borderRadius: "4px",
              },
            }}
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

      {/* START modal card */}
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        motionPreset="slideInBottom"

        // size={{ base: "sm", lg: "xl" }}
      >
        <ModalOverlay backdropFilter="auto" backdropBlur="3px" />
        <ModalContent
          py={"2rem"}
          px={"2rem"}
          // mt={{ base: "4rem", md: "5rem", lg: "7rem" }}
          maxH={{ lg: "90vh" }}
          maxW="90vw"
        >
          {/* <ModalHeader>Nama Organisator</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <Stack
              direction={{ base: "column", lg: "row" }}
              gap={"5rem"}
              alignItems={"center"}
            >
              <Stack
                align={"center"}
                gap={"1rem"}
                w={{ base: "100%", lg: "25%" }}
              >
                <Heading fontFamily={"Luthier"}>Nama Organisator</Heading>
                <Image src="/icons/placeholder-300.png" />
                <Text fontFamily={"Lexend"} fontWeight={"bold"}>
                  Hari, 01 Bulan 2024
                </Text>
                <Text fontFamily={"Lexend"} fontWeight={"semibold"}>
                  Kuota: 15/20
                </Text>
              </Stack>
              <Stack gap={"2rem"} w={{ base: "100%", lg: "75%" }}>
                <Stack>
                  <Heading fontFamily={"Luthier"}>Detail</Heading>
                  <Text fontFamily={"Lexend"}>
                    Lorem ipsum dolor sit amet consectetur. Sed pellentesque
                    laoreet dui dui cursus lobortis lorem non interdum. Semper
                    cum lectus pulvinar risus. Tincidunt ullamcorper dui diam
                    senectus eleifend eget mattis. Sit interdum eros enim non
                    turpis.
                  </Text>
                </Stack>
                <Stack gap={"1rem"}>
                  <Heading fontFamily={"Luthier"}>Foto Kegiatan</Heading>
                  <Stack
                    direction={{ base: "column", lg: "row" }}
                    overflowX={"scroll"}
                    gap={"1rem"}
                    pb={"0.5rem"}
                  >
                    <Image src="/icons/placeholder-300-panjang.png" />
                    <Image src="/icons/placeholder-300-panjang.png" />
                    <Image src="/icons/placeholder-300-panjang.png" />
                    <Image src="/icons/placeholder-300-panjang.png" />
                    <Image src="/icons/placeholder-300-panjang.png" />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              fontFamily={"Lexend"}
              bgColor={"#AF1648"}
              color="white"
              mr={3}
              _hover={{ bg: "#FFB1C9", color: "white" }}
              onClick={() => {
                // Create an example promise that resolves in 5s
                const examplePromise = new Promise((resolve, reject) => {
                  setTimeout(() => resolve(200), 5000);
                });

                // Will display the loading toast until the promise is either resolved
                // or rejected.
                toast.promise(examplePromise, {
                  success: {
                    title: "Selamat!",
                    description: "Nama Organisator kamu telah dipilih",
                  },
                  error: {
                    title: "Aduh, ada sedikit kendala nih",
                    description: "Coba dalam beberapa saat lagi ya",
                  },
                  loading: {
                    title: "Tunggu sebentar ya",
                    description: "Permintaan mu sedang diproses",
                  },
                });
              }}
            >
              Ambil
            </Button>
            <Button
              fontFamily={"Lexend"}
              onClick={onClose}
              bgColor={"#FFBE00"}
              color={"#AF1648"}
              _hover={{ bg: "#FFDB7A", color: "AF1648" }}
            >
              Batal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* END modal card */}
    </Stack>
  );
};

export default SelectStateId;
