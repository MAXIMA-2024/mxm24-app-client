import { Heading, Stack } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={"space-around"}
        minH={"100vh"}
        bgImage={{
          base: "/bg/welcome-page-mobile.png",
          lg: "/bg/welcome-page-desktop.png",
        }}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
      >
        <Stack align={"center"} color={"text.primary"} fontWeight={"700"}>
          <Heading
            fontFamily={"Luthier"}
            fontSize={{ base: "1.75rem", md: "4rem", lg: "6rem", xl: "7.5rem" }}
            // size={{ base: "xl", sm: "4xl" }}
          >
            Selamat Datang
          </Heading>
          <Heading
            fontFamily={"Luthier"}
            fontSize={{ base: "4rem", sm: "7.5rem" }}
            // size={"4xl"}
          >
            Maximers!
          </Heading>
        </Stack>
      </Stack>
    </>
  );
};

export default Dashboard;
