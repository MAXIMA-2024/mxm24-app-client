import { Heading, Stack, Text } from "@chakra-ui/react";

const Onboarding = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      minH={"100vh"}
      bgImage={{
        base: "/bg/onboarding-mobile.png",
        lg: "/bg/onboarding-desktop.png",
      }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
    >
      <Stack bgColor={"card.secondary"} rounded={"xl"} p={10}>
        <Heading fontFamily={"Luthier"} color={"text.primary"}>
          Register
        </Heading>
      </Stack>
      <Stack>
        {" "}
        <Text color={"text.primary"}>Nama Lengkap:</Text>
      </Stack>
    </Stack>
  );
};

export default Onboarding;
