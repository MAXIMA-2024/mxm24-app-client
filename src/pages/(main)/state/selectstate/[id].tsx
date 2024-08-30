import {
  Heading,
  Stack,
  Text,
  Button,
  Card,
  CardBody,
  Image,
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
import { Prose } from "@nikolovlazar/chakra-ui-prose";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

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
  const { data } = useSWR<Toggle[]>("/toggle");
  const toast = useToast();
  const nav = useNavigate();
  const api = useApi();
  const errorHandler = useToastErrorHandler();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { id } = useParams("/state/selectstate/:id");
  // const ref = useRef<HTMLDivElement | null>(null);
  const [stateDetails, setStateDetails] = useState<State | null>(null);
  const states = useSWR<AllState[]>("/state/");
  const days = useSWR<Day[]>("/state/enum/dayManagement/");

  useEffect(() => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "state-registration");
      if (!check || !check.toggle) {
        toast({
          title: "Access denied!",
          description: "Registrasi STATE akan segera dibuka.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        nav("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

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
    scrollToTop();
  }, []);

  console.log("abc", stateDetails);

  // button atas
  const BtStyle = ({ nomor }: { nomor: string }) => {
    const isActive = id === nomor;

    const handleClick = () => {
      wrapperRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <Link to={`/state/selectstate/${nomor}`} onClick={handleClick}>
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
            h={{ base: "20rem", md: "20rem", lg: "30rem" }}
            align={"center"}
            borderRadius={"1rem"}
            bgColor={registered >= kuota ? "#B20034" : "white"}
          >
            <CardBody>
              <Stack align={"center"}>
                <Image
                  src={
                    logo === "-"
                      ? "/myicons/placeholder-300.png"
                      : `${import.meta.env.VITE_CDN_URL}${logo}`
                  }
                  // w={"15rem"}
                  h={{ base: "8rem", lg: "15rem" }}
                  objectFit={"contain"}
                  borderRadius="lg"
                />
                <Stack mt={"1rem"}>
                  <Heading
                    fontFamily={"Lexend"}
                    fontWeight={"semibold"}
                    size={{ base: "sm", lg: "md" }}
                    textAlign={"center"}
                    textColor={registered >= kuota ? "white" : "#44002B"}
                  >
                    {name}
                  </Heading>
                </Stack>
              </Stack>

              <Stack
                direction={"row"}
                gap={"0"}
                pt={{ base: "1rem", lg: "2rem" }}
                pb={"1.5rem"}
                align={"center"}
                justify={"center"}
              >
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
            </CardBody>
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
            src="/myicons/LOGO-MAXIMA-OFFICIAL.png"
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
            {days.data &&
              (() => {
                const dayObj = days.data.find((day) => day.code === id);
                if (dayObj) {
                  const date = new Date(dayObj.date);
                  const options: Intl.DateTimeFormatOptions = {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  };
                  return date.toLocaleDateString("id-ID", options);
                }
                return null;
              })()}
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
        scrollBehavior={"outside"}
        // size={{ base: "sm", lg: "xl" }}
      >
        <ModalOverlay backdropFilter="auto" backdropBlur="3px" />
        <ModalContent
          py={"2rem"}
          px={{ base: "1rem", md: "2rem" }}
          // mt={{ base: "4rem", md: "5rem", lg: "7rem" }}
          maxH={{ lg: "90vh" }}
          maxW="90vw"
        >
          {/* <ModalHeader>Nama Organisator</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody
            overflow={"auto"}
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
            <Stack p={"1rem"}>
              <Heading fontFamily={"Luthier"} textAlign="center">
                {stateDetails?.name}
              </Heading>
            </Stack>
            <Stack
              direction={{ base: "column", lg: "row" }}
              gap={{ base: "2.5rem", lg: "5rem" }}
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
                      ? "/myicons/placeholder-300.png"
                      : `${import.meta.env.VITE_CDN_URL}${stateDetails?.logo}`
                  }
                  // w={"15rem"}
                  h={{ base: "12.5rem", lg: "20rem" }}
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
              <Stack
                gap={"2rem"}
                w={{ base: "100%", lg: "75%" }}
                maxH={{ base: "auto", lg: "25rem" }}
                p={{ base: 0, md: "1rem" }}
                overflow={"auto"}
                css={{
                  "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar:horizontal": {
                    height: "8px", // Horizontal scrollbar height
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
                <Stack>
                  <Heading
                    fontFamily={"Luthier"}
                    alignSelf={{ base: "center", lg: "auto" }}
                  >
                    Detail
                  </Heading>
                  {/* <Text
                    fontFamily={"Lexend"}
                    // alignSelf={{ base: "center", lg: "auto" }}
                    align={"justify"}
                  > */}
                  <Prose>
                    <div
                      dangerouslySetInnerHTML={{
                        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                        __html: stateDetails?.description!,
                      }}
                    ></div>
                  </Prose>

                  {/* </Text> */}
                </Stack>
                {stateDetails?.gallery.length ? (
                  <Stack>
                    <Heading
                      fontFamily={"Luthier"}
                      alignSelf={{ base: "center", lg: "auto" }}
                    >
                      Foto Kegiatan
                    </Heading>
                    <Stack
                      direction={{ base: "column", lg: "row" }}
                      gap={"1rem"}
                      overflow={"auto"}
                      align={{ base: "center", lg: "auto" }}
                      // maxH={"10rem"}
                      css={{
                        "&::-webkit-scrollbar": {
                          width: "8px",
                        },
                        "&::-webkit-scrollbar:horizontal": {
                          height: "8px", // Horizontal scrollbar height
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
                      {stateDetails?.gallery.map((gallery) => (
                        <Image
                          key={gallery.id}
                          src={`${import.meta.env.VITE_CDN_URL}${gallery.url}`}
                          w={{ base: "100%", lg: "45%" }}
                          h={{ base: "100%", lg: "20rem" }}
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
              isDisabled={
                // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                stateDetails?._count.StateRegistration! >= stateDetails?.quota!
              }
            >
              {
                // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                stateDetails?._count.StateRegistration! >= stateDetails?.quota!
                  ? "Penuh"
                  : "Ambil"
              }
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
