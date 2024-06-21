import {
  Heading,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Link,
  Select,
} from "@chakra-ui/react";

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
      <Stack
        bgColor={"card.secondary"}
        rounded={"xl"}
        px={["2rem", "4rem", "8rem", "6rem", "10rem"]}
        py={"3rem"}
        w={"75%"}
        align={"center"}
      >
        <Text
          justifyContent={"center"}
          fontFamily={"Luthier"}
          color={"text.primary"}
          fontWeight={"bold"}
          fontSize={["3xl", "4xl", "5xl", "6xl", "6xl"]}
        >
          Register
        </Text>
        <FormControl>
          <FormLabel
            fontFamily={"Luthier"}
            color={"text.primary"}
            fontWeight={"bold"}
            fontSize={["sm", "md", "lg", "xl", "xl"]}
          >
            Nama Lengkap
          </FormLabel>
          <Input
            bgColor={"white"}
            rounded={"xl"}
            size={["sm", "sm", "md", "md", "md"]}
          />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <Stack
          direction={["column", "column", "column", "row", "row"]}
          w={"100%"}
          justify={"space-between"}
        >
          <Stack w={["100%", "100%", "100%", "40%", "40%"]}>
            <FormControl>
              <FormLabel
                fontFamily={"Luthier"}
                color={"text.primary"}
                fontWeight={"bold"}
                fontSize={["sm", "md", "lg", "xl", "xl"]}
              >
                NIM
              </FormLabel>
              <Input
                bgColor={"white"}
                rounded={"xl"}
                size={["sm", "sm", "md", "md", "md"]}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Luthier"}
                color={"text.primary"}
                fontWeight={"bold"}
                fontSize={["sm", "md", "lg", "xl", "xl"]}
              >
                Program Studi
              </FormLabel>
              <Select
                bgColor={"white"}
                rounded={"xl"}
                size={["sm", "sm", "md", "md", "md"]}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Luthier"}
                color={"text.primary"}
                fontWeight={"bold"}
                fontSize={["sm", "md", "lg", "xl", "xl"]}
              >
                Whatsapp
              </FormLabel>
              <Input
                bgColor={"white"}
                rounded={"xl"}
                size={["sm", "sm", "md", "md", "md"]}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
          </Stack>
          <Stack w={["100%", "100%", "100%", "40%", "40%"]}>
            <FormControl>
              <FormLabel
                fontFamily={"Luthier"}
                color={"text.primary"}
                fontWeight={"bold"}
                fontSize={["sm", "md", "lg", "xl", "xl"]}
              >
                Email Student
              </FormLabel>
              <Input
                bgColor={"white"}
                rounded={"xl"}
                size={["sm", "sm", "md", "md", "md"]}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Luthier"}
                color={"text.primary"}
                fontWeight={"bold"}
                fontSize={["sm", "md", "lg", "xl", "xl"]}
              >
                Angkatan
              </FormLabel>
              <Select
                bgColor={"white"}
                rounded={"xl"}
                size={["sm", "sm", "md", "md", "md"]}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Luthier"}
                color={"text.primary"}
                fontWeight={"bold"}
                fontSize={["sm", "md", "lg", "xl", "xl"]}
              >
                ID Line
              </FormLabel>
              <Input
                bgColor={"white"}
                rounded={"xl"}
                size={["sm", "sm", "md", "md", "md"]}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
          </Stack>
        </Stack>
        <Text
          fontFamily={"Luthier"}
          color={"text.primary"}
          fontWeight={"bold"}
          my={"0.25rem"}
        >
          Wrong account?
          <Link fontFamily={"Luthier"} color={"#FFBE00"} fontWeight={"bold"}>
            Log Out
          </Link>
        </Text>
        <Button
          py={"1.5rem"}
          bgColor={"text.primary"}
          textColor={"white"}
          fontSize={"xl"}
          w={["8rem", "10rem", "16rem", "16rem", "16rem"]}
          rounded={"2xl"}
        >
          Continue
        </Button>
      </Stack>
    </Stack>
  );
};

export default Onboarding;
