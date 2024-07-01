import { Link } from "react-router-dom";
import { Stack, Text, Button } from "@chakra-ui/react";

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
        mt={"5%"}
      >
        <Text
          fontSize={{ base: "3rem", md: "3rem", lg: "3rem", xl: "6rem" }}
          fontFamily={"Luthier"}
          fontWeight={"bold"}
          color={"text.primary"}
        >
          About Us
        </Text>

        <Stack
          bgColor={"#FAF4E8"}
          px={{ base: "30px", md: "40px", lg: "50px", xl: "70px" }}
          py={{ base: "30px", lg: "30px", xl: "30px" }}
          borderRadius={"3xl"}
          alignItems={"center"}
          gap={5}
          boxShadow={"lg"}
        >
          {/* ISI CONTENT START */}
          <Text
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
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor massa id neque aliquam vestibulum morbi blandit cursus
            risus. Libero volutpat sed cras ornare arcu dui. Id diam maecenas
            ultricies mi eget mauris. Vivamus at augue eget arcu dictum varius
            duis. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Quam
            viverra orci sagittis eu volutpat odio facilisis mauris. Maecenas
            ultricies mi eget mauris pharetra et. Ultricies tristique nulla
            aliquet enim. At tellus at urna condimentum mattis pellentesque.
            Pellentesque habitant morbi tristique senectus et netus et. Nulla at
            volutpat diam ut venenatis tellus. Lacus laoreet non curabitur
            gravida arcu ac tortor. In hac habitasse platea dictumst vestibulum
            rhoncus est pellentesque elit.
          </Text>
          {/* ISI CONTENT END */}

          {ButtonData.map((button, index) => (
            <Button
              key={index}
              bgColor={"text.primary"}
              size={{ base: "sm", lg: "md", xl: "lg" }}
              h={"50px"}
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
  );
};

export default AboutUs;
