import HoMEBG from "@/components/animated-bg/home-bg";
import {
  Stack,
  Text,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  useToast,
  ModalCloseButton,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const ButtonData = [
  {
    content: "MAXION",
    link: "https://drive.google.com/file/d/1CtlrRQtJi57Pjg5axS6MOLuUME2eDi1r/view?usp=drive_link",
  },
  {
    content: "MAXELENT",
    link: "https://drive.google.com/file/d/1ChDcA5Ghh47B3Mpv0y_2ukyUZxXTLWdY/view?usp=drive_link",
  },
  {
    content: "MAXCAM",
    link: "https://drive.google.com/file/d/1Cmo5bBNChUCTSpJZXgfTcw48cDnyYgdy/view?usp=drive_link",
  },
];

const CardData = [
  {
    title: "Challenge",
    icon: "/myicons/challenge-icon.png",
  },
  {
    title: "Handbook",
    icon: "/myicons/handbook-icon.png",
    link: "https://drive.google.com/drive/folders/1CfFRlRn3iHXeyGTSBJu0DQLf0zxyNG5D",
  },
  {
    title: "Twibbon",
    icon: "/myicons/twibbon-icon.png",
    link: "https://docs.google.com/document/d/177pdoVR_PlheKd6Hm2ed0Epv0YyM28HjSni8Te3_A0k/edit",
  },
];

const Home = () => {
  const { data } = useSWR<Toggle[]>("/toggle");
  const toast = useToast();
  const nav = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [activeContent, setActiveContent] = useState("MAXION");

  useEffect(() => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "home");
      if (!check || !check.toggle) {
        toast({
          title: "Access denied!",
          description: "Rangkaian acara HoME akan segera dimulai",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        nav("/");
      }
    }
  });

  const renderContentChallenge = () => {
    switch (activeContent) {
      case "MAXION":
        return (
          <Text
            fontSize={{ base: "1rem", xl: "1rem" }}
            fontFamily={"Lexend"}
            color={"text.primary"}
            textAlign={"justify"}
            mt={2}
            mb={4}
          >
            <b>MAXION (MAXIMA PASSION)</b> Challenge, dalam challenge ini akan
            ada dua hal yang akan dilakukan oleh MAXIMERS. Pertama, MAXIMERS
            akan mengunggah Twibbon di akun instagram PRIBADI masing-masing.
            Selanjutnya, MAXIMERS akan menulis di sebuah papan yang disebut
            Inspiration Board (Insboard) yang bisa ditemukan di HoME yang
            terdapat di Function Hall Universitas Multimedia Nusantara. MAXIMERS
            dapat mengikuti MAXION Challenge pada saat pelaksanaan rangkain HoME
            tepatnya di tanggal 26 – 28 Agustus 2024. MAXIMERS yang mengikuti
            MAXION Challenge (Twibbon & Insboard) akan mendapat
            <b> +1 SKKM Minat dan Bakat.</b>
          </Text>
        );
      case "MAXELENT":
        return (
          <Text
            fontSize={{ base: "1rem", xl: "1rem" }}
            fontFamily={"Lexend"}
            color={"text.primary"}
            textAlign={"justify"}
            mt={2}
            mb={4}
          >
            <b>MAXELENT (MAXIMA eXpress Talent),</b> berdasarkan judul
            challenge, "MAX" berarti MAXIMA dimana huruf "X" juga berarti
            "eXpress" yang memiliki arti mengekspresikan atau menunjukkan.
            Sedangkan "ELENT" berasal dari kata "Talent" yang berarti bakat.
            Dalam MAXELENT, MAXIMERS akan menunjukkan bakat dan minat yang
            kalian miliki dalam bentuk video dan mengunggahnya di akun Instagram
            pribadi sebagai tanda pengeskpresian diri MAXIMERS. MAXIMERS yang
            mengikuti MAXELENT akan mendapat<b> +1 SKKM Minat dan Bakat,</b> ,
            serta untuk 5 orang MAXIMERS dengan video terbaik akan mendapatkan
            <b> +2 SKKM Minat dan Bakat.</b>
          </Text>
        );
      case "MAXCAM":
        return (
          <Text
            fontSize={{ base: "1rem", xl: "1rem" }}
            fontFamily={"Lexend"}
            color={"text.primary"}
            textAlign={"justify"}
            mt={2}
            mb={4}
          >
            <b>MAXCAM (MAXima CAMera),</b> berdasarkan nama challenge, “MAX”
            berarti MAXIMA dan kata “CAM” diambil dari Camera yang berarti
            mengajak mahasiswa baru untuk mengabadikan momen serta keseruan
            dalam Malam Puncak (MalPun). MAXCAM akan mengajak MAXIMERS untuk
            mengunggah video Reels Instagram dengan footage kegiatan Malam
            Puncak (MalPun) MAXIMA 2024. MAXCAM memiliki tujuan untuk membuat
            MAXIMERS dapat mengingat moment indah perjalanan MAXIMERS selama
            Malam Puncak MAXIMA 2024. MAXIMERS yang mengikuti MAXCAM akan
            mendapat <b>+1 SKKM Minat dan Bakat,</b> serta untuk 5 orang
            MAXIMERS dengan video terbaik akan mendapatkan
            <b> +2 SKKM Minat dan Bakat.</b>
          </Text>
        );
      default:
        return null;
    }
  };

  return (
    <HoMEBG>
      <Stack minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Stack
          direction={"row"}
          gap={5}
          mt={{ base: "12rem", lg: "25rem" }}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {CardData.map((card, index) => (
            <a href={card.link} target="_blank">
              <Button
                as={motion.button}
                flexDirection={{ base: "row", lg: "column" }}
                variant={"ghost"}
                key={index}
                bgColor={"card.primary"}
                p={{ base: 3, lg: 5 }}
                rounded={"xl"}
                justifyContent={"center"}
                alignItems={"center"}
                w={"14rem"}
                h={{ base: "7rem", lg: "9rem" }}
                gap={4}
                onClick={card.title === "Challenge" ? onOpen : undefined}
                variants={{
                  initial: {
                    opacity: 0,
                    y: -100,
                  },
                  enter: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.25 * index,
                      easings: "backOut",
                    },
                  },
                  hover: {
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                    },
                  },
                }}
                initial={"initial"}
                whileInView={"enter"}
                whileHover={"hover"}
              >
                <Image src={card.icon} w={"2.5rem"} h={"2.5rem"} />
                <Text
                  fontFamily={"Lexend"}
                  fontSize={"1.3rem"}
                  fontWeight={400}
                >
                  {card.title}
                </Text>
              </Button>
            </a>
          ))}
        </Stack>
        {/* Modal Challenge */}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          motionPreset="slideInBottom"
          size={{ base: "sm", lg: "2xl" }}
        >
          <ModalOverlay />
          <ModalContent
            alignItems={"center"}
            bgImage={"bg/modal-bg.png"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
            px={{ base: 4, lg: 10 }}
          >
            <ModalHeader
              fontFamily={"Luthier"}
              color={"text.primary"}
              fontSize={{ base: "2rem", lg: "2.5rem" }}
              pt={{ base: 8, lg: 10 }}
            >
              CHALLENGE
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody p={2} mx={{ base: 4, lg: 14 }}>
              <Stack
                // px={{ base: "30px", md: "40px", lg: "50px", xl: "70px" }}
                // py={{ base: "30px", lg: "30px", xl: "30px" }}
                alignItems={"start"}
                gap={5}
                // boxShadow={"lg"}
              >
                <Stack
                  bgColor={"text.primary"}
                  direction={"row"}
                  gap={5}
                  p={"15px"}
                  borderRadius={"full"}
                  mt={"1rem"}
                >
                  {ButtonData.map((button) => (
                    <Button
                      key={button.content}
                      borderRadius={"full"}
                      fontFamily={"Lexend"}
                      fontSize={{ base: "0.8rem", lg: "1.2rem" }}
                      color={
                        activeContent === button.content
                          ? "#B20034"
                          : "text.primary"
                      }
                      bgColor={
                        activeContent === button.content
                          ? "button.yellow"
                          : "white"
                      }
                      boxShadow={"inset 0 0 5px rgba(0, 0, 0, 0.5)"}
                      _hover={{
                        transform: "scale(0.95)",
                        transition: "all 0.2s ease-in-out",
                      }}
                      onClick={() => setActiveContent(button.content)}
                    >
                      {button.content}
                    </Button>
                  ))}
                </Stack>
                <motion.div
                  key={activeContent}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContentChallenge()}
                </motion.div>
              </Stack>
            </ModalBody>
            <ModalFooter pb={10} gap={5}>
              <Stack direction={{ base: "column", lg: "row" }}>
                {ButtonData.map((button) => (
                  <a href={button.link} target="_blank">
                    {button.content === activeContent && (
                      <Button
                        variant={"ghost"}
                        bg={"transparent"}
                        border={"2px solid #44002B"}
                        color={"#44002B"}
                        p={{ base: 6, lg: 7 }}
                        px={{ base: 8, lg: 10 }}
                        _hover={{
                          transform: "scale(0.95)",
                          transition: "all 0.2s ease-in-out",
                          bgColor: "#3A0025",
                          color: "text.tertiary",
                        }}
                      >
                        Open Handbook {activeContent} →
                      </Button>
                    )}
                  </a>
                ))}
                <Button
                  variant={"ghost"}
                  bgColor={"button.primary"}
                  color={"text.tertiary"}
                  p={{ base: 6, lg: 7 }}
                  px={{ base: 8, lg: 10 }}
                  mr={3}
                  border={"2px solid #44002B"}
                  onClick={onClose}
                  _hover={{
                    transform: "scale(0.95)",
                    transition: "all 0.2s ease-in-out",
                    bgColor: "#3A0025",
                  }}
                >
                  Close
                </Button>
              </Stack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    </HoMEBG>
  );
};

export default Home;
