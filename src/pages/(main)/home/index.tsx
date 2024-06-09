import { Stack, Text } from "@chakra-ui/react";

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
    >
      {/* <Text>HoME</Text> */}
    </Stack>
  );
};

export default Home;
