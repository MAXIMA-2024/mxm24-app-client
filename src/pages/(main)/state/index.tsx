import {
  Button,
  Heading,
  Image,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Show,
  Spinner,
  Stack,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import Boag from "@/components/Boag";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import StateBG from "@/components/animated-bg/state-bg";
import useAuth from "@/hooks/useAuth";
import useSWR from "swr";
import useApi, { ResponseModel, useToastErrorHandler } from "@/hooks/useApi";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { MdQrCodeScanner } from "react-icons/md";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type ClaimedState = {
  StateRegistration: {
    id: number;
    state: {
      id: number;
      name: string;
      logo: string;
    };
    firstAttendance: boolean;
    lastAttendance: boolean;
  }[];
  _count: {
    StateRegistration: number;
  };
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

const State = () => {
  const { data: toggle } = useSWR<Toggle[]>("/toggle");
  const bottomRef = useRef<HTMLDivElement>(null);
  const loc = useLocation();
  const auth = useAuth();
  const { data, isLoading, mutate } = useSWR<ClaimedState>(
    "/state/registration"
  );
  const api = useApi();
  const toast = useToast();
  const errorHandler = useToastErrorHandler();

  const [stateDetails, setStateDetails] = useState<State | null>(null);

  const stateRegistration = () => {
    if (toggle) {
      const check = toggle.find(
        (toggle) => toggle.name === "state-registration"
      );
      if (!check || !check.toggle) {
        return false;
      }
      return true;
    }
    return false;
  };

  const isStateRegistrationActive = stateRegistration();

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  console.log(loc.hash);

  useEffect(() => {
    if (loc.hash === "#gondola" && auth.status !== "loading") {
      setTimeout(scrollToBottom, 5000);
    }
  }, [loc, bottomRef, auth]);

  useEffect(() => {
    if (loc.hash !== "#gondola") {
      scrollToTop();
    }
  }, [loc.hash]);

  return (
    <>
      <Show breakpoint="(max-width: 1023px)">
        {/*mobile layout */}
        <StateBG>
          <>
            <Stack
              align={"center"}
              // justify={"center"}
              gap={["20rem", "2rem"]}
              mt={"6rem"}
              flex={1}
            >
              <Img src={"/state/banner.png"} w={["16rem", "24rem"]} />
              <Stack>
                {isStateRegistrationActive ? (
                  <Link to="/state/selectstate/D01">
                    <Button
                      w={{ base: "16rem", md: "20rem" }}
                      bgColor={"#44002B"}
                      textColor={"white"}
                      fontFamily={"Lexend"}
                      fontWeight={"light"}
                      fontSize={"lg"}
                    >
                      Pilih UKM dan Komunitas
                    </Button>
                  </Link>
                ) : (
                  <Tooltip
                    label="Masa registrasi STATE ditutup"
                    aria-label="A tooltip"
                    bgColor={"button.primary"}
                    rounded={"lg"}
                    px={"0.8rem"}
                    py={"0.5rem"}
                    shadow={"lg"}
                    placement={"top"}
                  >
                    <Button
                      w={{ base: "16rem", md: "20rem" }}
                      bgColor={"#44002B"}
                      textColor={"white"}
                      fontFamily={"Lexend"}
                      fontWeight={"light"}
                      fontSize={"lg"}
                      cursor={"not-allowed"}
                    >
                      Pilih UKM dan Komunitas
                    </Button>
                  </Tooltip>
                )}
                <Button
                  w={{ base: "16rem", md: "20rem" }}
                  bgColor={"#44002B"}
                  textColor={"white"}
                  fontFamily={"Lexend"}
                  fontWeight={"light"}
                  fontSize={"lg"}
                  // display={{ base: "none", lg: "flex" }}
                  onClick={scrollToBottom}
                >
                  Lihat STATE Pilihanmu!
                </Button>
                <Link to="/profile">
                  <Button
                    w={{ base: "16rem", md: "20rem" }}
                    bgColor={"#44002B"}
                    textColor={"white"}
                    fontFamily={"Lexend"}
                    fontWeight={"light"}
                    fontSize={"lg"}
                    gap={"0.5rem"}
                  >
                    <MdQrCodeScanner size={28} />
                    Buka QR Code Absensi
                  </Button>
                </Link>
              </Stack>
            </Stack>
            <Stack
              flex={1}
              direction={"row"}
              px={["0rem", "0rem", "6rem", "6rem", "6rem"]}
              flexWrap={"wrap"}
              justify={"space-around"}
              align={"end"}
            >
              {isLoading && (
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
              {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                data &&
                  Array.from({ length: 3 }).map((_, i) => (
                    <Boag
                      data={
                        data.StateRegistration[i]
                          ? {
                              id: data.StateRegistration[i].state.id,
                              image: data.StateRegistration[i].state.logo,
                              stateName: data.StateRegistration[i].state.name,
                              isFirstAttendance:
                                data.StateRegistration[i].firstAttendance,
                              isLastAttendance:
                                data.StateRegistration[i].lastAttendance,
                              setState: (id) => {
                                const state = data.StateRegistration.find(
                                  (sr) => sr.state.id === id
                                );
                                if (state) {
                                  api
                                    .get<ResponseModel<State>>(
                                      `/state/${state.state.id}`
                                    )
                                    .then((res) => {
                                      setStateDetails(res.data.data);
                                    })
                                    .catch(errorHandler);
                                }
                              },
                            }
                          : undefined
                      }
                      isStateRegistrationActive={isStateRegistrationActive}
                    />
                  ))
              }
            </Stack>
            <div
              ref={bottomRef}
              style={{ height: "1px", visibility: "hidden" }}
            />
          </>
        </StateBG>
      </Show>

      <Show breakpoint="(min-width: 1023px)">
        {/*desktop layout */}
        <StateBG>
          <Stack
            flex={1}
            w={"100%"}
            h={"100vh"}
            pt={"12rem"}
            pr={[0, 0, "0rem", "4rem", "6rem"]}
            align={{ base: "center", lg: "end" }}
            // bgColor={"blue.200"}
          >
            <Stack
              w={["32rem", "32rem", "46rem", "24rem", "46rem"]}
              align={"center"}
            >
              <Img
                src={"/state/banner.png"}
                w={["16rem", "24rem", "32rem", "32rem", "32rem"]}
                pb={["24rem", "16rem", "10rem", 0, 0]}
              />
              {isStateRegistrationActive ? (
                <Link to="/state/selectstate/D01">
                  <Button
                    w={{ base: "16rem", md: "20rem" }}
                    bgColor={"#44002B"}
                    textColor={"white"}
                    fontFamily={"Lexend"}
                    fontWeight={"light"}
                    fontSize={"lg"}
                  >
                    Pilih UKM dan Komunitas
                  </Button>
                </Link>
              ) : (
                <Tooltip
                  label="Masa registrasi STATE ditutup"
                  aria-label="A tooltip"
                  bgColor={"button.primary"}
                  rounded={"lg"}
                  px={"0.8rem"}
                  py={"0.5rem"}
                  shadow={"lg"}
                  placement={"top"}
                >
                  <Button
                    w={{ base: "16rem", md: "20rem" }}
                    bgColor={"#44002B"}
                    textColor={"white"}
                    fontFamily={"Lexend"}
                    fontWeight={"light"}
                    fontSize={"lg"}
                    cursor={"not-allowed"}
                  >
                    Pilih UKM dan Komunitas
                  </Button>
                </Tooltip>
              )}
              <Button
                w={{ base: "16rem", md: "20rem" }}
                bgColor={"#44002B"}
                textColor={"white"}
                fontFamily={"Lexend"}
                fontWeight={"light"}
                fontSize={"lg"}
                // display={{ base: "none", lg: "flex" }}
                onClick={scrollToBottom}
              >
                Lihat STATE Pilihanmu!
              </Button>
              <Link to="/profile">
                <Button
                  w={{ base: "16rem", md: "20rem" }}
                  bgColor={"#44002B"}
                  textColor={"white"}
                  fontFamily={"Lexend"}
                  fontWeight={"light"}
                  fontSize={"lg"}
                  gap={"1rem"}
                >
                  <MdQrCodeScanner size={24} />
                  Buka QR Code Absensi
                </Button>
              </Link>
            </Stack>
          </Stack>
          <Stack
            flex={1}
            align={"center"}
            direction={"row"}
            flexWrap={"wrap"}
            justify={"space-around"}
            pt={"12rem"}
            id="gondola"
          >
            {isLoading && (
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

            {data &&
              Array.from({ length: 3 }).map((_, i) => (
                <Boag
                  data={
                    data.StateRegistration[i]
                      ? {
                          id: data.StateRegistration[i].state.id,
                          stateName: data.StateRegistration[i].state.name,
                          isFirstAttendance:
                            data.StateRegistration[i].firstAttendance,
                          isLastAttendance:
                            data.StateRegistration[i].lastAttendance,
                          image: data.StateRegistration[i].state.logo,
                          setState: (id) => {
                            const state = data.StateRegistration.find(
                              (sr) => sr.state.id === id
                            );
                            if (state) {
                              api
                                .get<ResponseModel<State>>(
                                  `/state/${state.state.id}`
                                )
                                .then((res) => {
                                  setStateDetails(res.data.data);
                                })
                                .catch(errorHandler);
                            }
                          },
                        }
                      : undefined
                  }
                  isStateRegistrationActive={isStateRegistrationActive}
                />
              ))}
          </Stack>
          <div
            ref={bottomRef}
            style={{ height: "1px", visibility: "hidden" }}
          />
        </StateBG>
      </Show>
      {/* START modal card */}
      <Modal
        onClose={() => setStateDetails(null)}
        isOpen={!!stateDetails}
        isCentered
        motionPreset="slideInBottom"
        scrollBehavior="outside"
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
                  {stateDetails?.location}{" "}
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
                  >
                    {stateDetails?.description}
                  </Text> */}
                  <Prose>
                    <div
                      dangerouslySetInnerHTML={{
                        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                        __html: stateDetails?.description!,
                      }}
                    ></div>
                  </Prose>
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
            <Tooltip
              label="Masa registrasi STATE ditutup"
              aria-label="A tooltip"
              bgColor={"button.primary"}
              rounded={"lg"}
              px={"0.8rem"}
              py={"0.5rem"}
              shadow={"lg"}
              isDisabled={isStateRegistrationActive}
            >
              <Button
                fontFamily={"Lexend"}
                bgColor={"#AF1648"}
                color="white"
                mr={3}
                _hover={{ bg: "#FFB1C9", color: "white" }}
                isDisabled={!isStateRegistrationActive}
                onClick={() => {
                  api
                    .delete<ResponseModel>(
                      `/state/registration/${stateDetails?.id}`,
                      {
                        data: { stateId: stateDetails?.id },
                      }
                    )
                    .then((res) => {
                      toast({
                        title: "Berhasil",
                        description: res.data.message,
                        status: "success",
                      });
                      setStateDetails(null);
                    })
                    .catch(errorHandler)
                    .finally(() => mutate());
                }}
              >
                Hapus
              </Button>
            </Tooltip>
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
    </>
  );
};

export default State;
