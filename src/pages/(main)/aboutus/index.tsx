import { Link } from "react-router-dom";
import { Stack, Text, Button, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ButtonData = [
  {
    content: "HoME (Hall of Maxima Exhibition)",
    link: "/home",
  },
  {
    content: "STATE (Student Activities Unit Explore)",
    link: "/state",
  },
  {
    content: "Malam Puncak",
    link: "/malpun",
  },
];

const AboutUs = () => {
  return (
    <Stack
      bgImage={{
        base: "/bg/state-mobile.png",
        lg: "/bg/state-desktop.png",
      }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        direction={"column"}
        gap={5}
        alignItems={"center"}
        mx={"20%"}
        mt={{ base: "10rem", lg: "5rem" }}
        position={"relative"}
      >
        <Image
          src="/bg/maxi.svg"
          alt="test aja"
          h={{ base: "4rem", md: "7rem" }}
          position={"absolute"}
          left={{ base: "0.8rem", md: "1.5rem", lg: "2rem", xl: "2rem" }}
          top={{ base: "4.75rem", md: "0.45rem", lg: "0.5rem", xl: "2.7rem" }}
        ></Image>

        <Image
          src="/bg/xima.svg"
          alt="test aja"
          h={{ base: "4rem", md: "7rem" }}
          position={"absolute"}
          left={{ base: "13.5rem", md: "32.5rem", lg: "41.5rem", xl: "60rem" }}
          top={{ base: "4.55rem", md: "0.15rem", lg: "0.1rem", xl: "2.4rem" }}
        ></Image>

        <Text
          fontSize={{ base: "3rem", md: "3rem", lg: "3rem", xl: "4.5rem" }}
          fontFamily={"Luthier"}
          fontWeight={"bold"}
          color={"text.primary"}
          mb={{ base: "2rem", md: "0rem" }}
        >
          About Us
        </Text>

        <Stack
          bgColor={"#FAF4E8"}
          w={{ base: "350px", md: "750px", lg: "900px", xl: "1200px" }}
          px={{ base: "30px", md: "60px", lg: "50px", xl: "70px" }}
          py={{ base: "30px", lg: "30px", xl: "30px" }}
          borderRadius={"3xl"}
          alignItems={"center"}
          gap={5}
          boxShadow={"lg"}
          mb={{ base: 10, lg: 0 }}
        >
          {/* ISI CONTENT START */}
          <Text
            as={motion.div}
            fontSize={{
              // base: "1rem",
              // md: "1rem",
              base: "1rem",
              xl: "1rem",
            }}
            fontFamily={"Luthier"}
            color={"text.primary"}
            textAlign={"justify"}
            mt={{ base: "40px", lg: "40px", xl: "40px" }}
            mb={8}
            // key={activeContent}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={"0.3 ease-in-out"}
          >
            MAXIMA (Malam Expresi Mahasiswa) merupakan sebuah kegiatan tahunan
            terbesar di Universitas Multimedia Nusantara yang berada di bawah
            naungan BEM. MAXIMA merupakan kegiatan yang bertujuan untuk
            memperkenalkan berbagai UKM/Organisasi/LSO/Media Kampus yang ada di
            UMN kepada para mahasiswa baru. MAXIMA 2024 mengusung tema “Passion
            Quest Unleashed” dan memiliki tagline yaitu “Express Your Uniqueness
            Show It To Shine”. Melalui kegiatan MAXIMA, diharapkan para
            mahasiswa baru dapat menemukan potensi dirinya dan mengekspresikan
            bakatnya agar semakin bersinar.
          </Text>
          {/* ISI CONTENT END */}

          <Stack direction={{ base: "column", md: "row" }} gap={5}>
            {ButtonData.map((button, index) => (
              <Button
                key={index}
                bgColor={"text.primary"}
                size={{ base: "sm", lg: "md", xl: "lg" }}
                fontFamily={"Lexend"}
                color={"white"}
                fontWeight={"base"}
                borderRadius={"xl"}
                _hover={{
                  color: "text.primary",
                  transform: "scale(0.95)",
                  transition: "all 0.2s ease-in-out",
                  bgColor: "#FAF4E8",
                  border: "1px",
                  borderColor: "text.primary",
                }}
              >
                <Link to={button.link}>{button.content}</Link>
              </Button>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutUs;
