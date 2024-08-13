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
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "@/router";
import useSWR from "swr";
import useApi, { ResponseModel, useToastErrorHandler } from "@/hooks/useApi";

type AllState = {
  id: number;
  _count: {
    StateRegistration: number;
  };
  name: string;
  logo: string;
  quota: number;
  day: {
    id: number;
    code: string;
    date: Date;
  };
};

type Day = {
  id: number;
  code: string;
  date: string;
};

type State = {
  id: number;
  name: string;
  dayId: number;
  logo: string;
  description: string;
  location: string;
  quota: number;
  createdAt: Date;
  updatedAt: Date;
  _count: {
    StateRegistration: number;
  };
  day: {
    id: number;
    code: string;
    date: string;
  };
  gallery: {
    id: number;
    url: string;
    stateId: number | null;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

const SelectStateId = () => {
  const toast = useToast();
  const nav = useNavigate();
  const api = useApi();
  const errorHandler = useToastErrorHandler();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { id } = useParams("/state/selectstate/:id");

  const [stateDetails, setStateDetails] = useState<State | null>(null);
  const states = useSWR<AllState[]>("/state/");
  const days = useSWR<Day[]>("/state/enum/dayManagement/");

  useEffect(() => {
    console.log("URL Parameter:", id);
    console.log("URL Parameter:", days);
    if (days.data) {
      const check = days.data.some((day) => day.code === id);
      if (!check) {
        toast({
          title: "Error",
          description: "Invalid day code",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        nav("/state");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, days]);

  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    if (wrapperRef) {
      wrapperRef.current?.scrollTo(0, 0);
    }
  }, [id]);

  // button atas
  const BtStyle = ({ nomor }: { nomor: string }) => {
    const isActive = id === nomor;

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
            {nomor.split("D0")[1]}
          </Text>
        </Button>
      </Link>
    );
  };

  type KartuProps = {
    id: number;
    name: string;
    kuota: number;
    registered: number;
    logo: string;
  };

  // kartu
  const Kartu = ({ id, kuota, logo, name, registered }: KartuProps) => {
    return (
      <WrapItem>
        <Box
          onClick={() => {
            api
              .get<ResponseModel<State>>(`/state/${id}`)
              .then((res) => setStateDetails(res.data.data))
              .catch(errorHandler);
          }}
          cursor="pointer"
        >
          <Card
            w={{ base: "10rem", md: "12rem", lg: "20rem" }}
            h={{ base: "25rem", md: "20rem", lg: "30rem" }}
            align={"center"}
            borderRadius={"1rem"}
          >
            <CardBody>
              <Stack align={"center"}>
                <Image
                  src={
                    logo === "-"
                      ? "/icons/placeholder-300.png"
                      : `${import.meta.env.VITE_CDN_URL}${logo}`
                  }
                  // w={"15rem"}
                  h={{ base: "8rem", lg: "15rem" }}
                  objectFit={"contain"}
                  borderRadius="lg"
                />
                <Stack mt={4}>
                  <Heading
                    fontFamily={"Lexend"}
                    fontWeight={"semibold"}
                    size={{ base: "sm", lg: "md" }}
                    textAlign={"center"}
                  >
                    {name}
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
                    {registered}/{kuota}
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
          // flexWrap={"wrap"}
          // justify={"center"}
          overflowX={{ base: "scroll", lg: "auto" }}
          maxW={"90vw"}
        >
          {/* START Button hari ke- */}
          {days.isLoading && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="text.primary"
              size="md"
            />
          )}
          {days.data &&
            days.data.map((nomor) => (
              <BtStyle key={nomor.id} nomor={nomor.code} />
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
            STATE HARI KE - {id.split("D0")[1]}
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
            ref={wrapperRef}
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
            {states.isLoading && (
              <Stack>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="text.primary"
                  size="xl"
                />
              </Stack>
            )}
            {states.data &&
              states.data
                .filter((state) => state.day.code === id)
                .map((state) => (
                  <Kartu
                    id={state.id}
                    kuota={state.quota}
                    logo={state.logo}
                    name={state.name}
                    registered={state._count.StateRegistration}
                    key={state.id}
                  />
                ))}
          </Wrap>
        </Stack>
        {/* END card */}
      </Stack>
      {/* END MAIN */}

      {/* START modal card */}
      <Modal
        onClose={() => setStateDetails(null)}
        isOpen={!!stateDetails}
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
            <Stack p={"1rem"}>
              <Heading fontFamily={"Luthier"}>{stateDetails?.name}</Heading>
            </Stack>
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
                <Image
                  src={
                    stateDetails?.logo === "-"
                      ? "/icons/placeholder-300.png"
                      : `${import.meta.env.VITE_CDN_URL}${stateDetails?.logo}`
                  }
                  // w={"15rem"}
                  h={{ base: "8rem", lg: "15rem" }}
                  objectFit={"contain"}
                  borderRadius="lg"
                />
                <Text fontFamily={"Lexend"} fontWeight={"bold"}>
                  {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                    new Date(stateDetails?.day.date!)
                      .toLocaleDateString("id-ID", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      .replace("pukul", "-")
                  }
                </Text>
                <Text fontFamily={"Lexend"} fontWeight={"semibold"}>
                  Kuota: {stateDetails?._count.StateRegistration}/
                  {stateDetails?.quota}
                </Text>
              </Stack>
              <Stack gap={"2rem"} w={{ base: "100%", lg: "75%" }}>
                <Stack>
                  <Heading fontFamily={"Luthier"}>Detail</Heading>
                  <Text fontFamily={"Lexend"}>{stateDetails?.description}</Text>
                </Stack>
                {stateDetails?.gallery.length ? (
                  <Stack>
                    <Heading fontFamily={"Luthier"}>Foto Kegiatan</Heading>
                    <Stack
                      direction={{ base: "column", lg: "row" }}
                      gap={"1rem"}
                      overflow={"auto"}
                    >
                      {stateDetails?.gallery.map((gallery) => (
                        <Image
                          key={gallery.id}
                          src={`${import.meta.env.VITE_CDN_URL}${gallery.url}`}
                          w={{ base: "100%", lg: "45%" }}
                          h={{ base: "15rem", lg: "20rem" }}
                          objectFit={"cover"}
                          borderRadius={"lg"}
                        />
                      ))}
                    </Stack>
                  </Stack>
                ) : null}
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
                api
                  .post<ResponseModel>("/state/registration", {
                    stateId: stateDetails?.id,
                  })
                  .then(() => {
                    toast({
                      title: "Berhasil!",
                      description: `Kamu berhasil mendaftar STATE ${stateDetails?.name}`,
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    });
                    //@ts-expect-error tolol
                    nav("/state#gondola");
                  })
                  .catch(errorHandler);
              }}
            >
              Ambil
            </Button>
            <Button
              fontFamily={"Lexend"}
              onClick={() => setStateDetails(null)}
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
