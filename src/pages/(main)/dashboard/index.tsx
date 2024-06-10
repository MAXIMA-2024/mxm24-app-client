import { Heading, Stack } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        minH={"100vh"}
        bgImage={{
          base: "/bg/welcome-page-mobile.png",
          lg: "/bg/welcome-page-desktop.png",
        }}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
      >
        <Stack
          align={"center"}
          color={"text.primary"}
          fontWeight={"700"}
          pb={{ base: "15rem", md: "22.5rem", lg: "20rem", xl: "25rem" }}
          gap={{ base: 0, lg: 2 }}
        >
          <Heading
            fontFamily={"Luthier"}
            fontSize={{ base: "2rem", md: "4rem", lg: "6rem", xl: "7.5rem" }}
            textShadow={"0 0 5rem #000000"}
          >
            Selamat Datang
          </Heading>
          <Heading
            fontFamily={"Luthier"}
            fontSize={{ base: "2rem", md: "4rem", lg: "6rem", xl: "7.5rem" }}
            textShadow={"0 0 5rem #000000"}
          >
            Maximers!
          </Heading>
        </Stack>
      </Stack>
    </>
  );
};

export default Dashboard;
