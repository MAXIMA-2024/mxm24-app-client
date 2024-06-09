import { Stack, Text, Image, Button } from "@chakra-ui/react";

const CardData = [
  {
    title: "Challenge",
    icon: "/icons/challenge-icon.png",
  },
  {
    title: "Handbook",
    icon: "/icons/handbook-icon.png",
  },
  {
    title: "Twibbon",
    icon: "/icons/twibbon-icon.png",
  },
];

const Home = () => {
  return (
    <Stack
      bgImage={{
        base: "/bg/home-mobile.png",
        lg: "/bg/home-desktop.png",
      }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack direction={"row"} gap={5} mt={"25rem"}>
        {CardData.map((card, index) => (
          <Button
            flexDirection={"column"}
            variant={"ghost"}
            key={index}
            bgColor={"card.primary"}
            p={5}
            rounded={"xl"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"14rem"}
            h={"9rem"}
            gap={4}
            _hover={{
              bgColor: "text.tertiary",
              transform: "scale(0.95)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <Image src={card.icon} w={"2.5rem"} h={"2.5rem"} />
            <Text fontFamily={"Lexend"} fontSize={"1.3rem"} fontWeight={400}>
              {card.title}
            </Text>
          </Button>
        ))}
      </Stack>
      {/* <Text>HoME</Text> */}
    </Stack>
  );
};

export default Home;
