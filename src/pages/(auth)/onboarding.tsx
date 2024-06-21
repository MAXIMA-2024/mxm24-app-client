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
        px={"10rem"}
        py={"3rem"}
        w={"75%"}
        align={"center"}
      >
        <Text
          justifyContent={"center"}
          fontFamily={"Luthier"}
          color={"text.primary"}
          fontWeight={"bold"}
          fontSize={"6xl"}
        >
          Register
        </Text>
        <FormControl>
          <FormLabel
            fontFamily={"Luthier"}
            color={"text.primary"}
            fontWeight={"bold"}
            fontSize={"xl"}
          >
            Nama Lengkap
          </FormLabel>
          <Input bgColor={"white"} rounded={"xl"} />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <Stack direction={"row"} w={"100%"} gap={"12rem"}>
          <Stack w={"100%"}>
            <FormControl>
              <FormLabel
                fontFamily={"Luthier"}
                color={"text.primary"}
                fontWeight={"bold"}
                fontSize={"xl"}
              >
                NIM
              </FormLabel>
              <Input bgColor={"white"} rounded={"xl"} />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Luthier"}
                color={"text.primary"}
                fontWeight={"bold"}
                fontSize={"xl"}
              >
                Program Studi
              </FormLabel>
              <Select bgColor={"white"} rounded={"xl"} />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Luthier"}
                color={"text.primary"}
                fontWeight={"bold"}
                fontSize={"xl"}
              >
                Whatsapp
              </FormLabel>
              <Input bgColor={"white"} rounded={"xl"} />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
          </Stack>
          <Stack w={"100%"}>
            <FormControl>
              <FormLabel
                fontFamily={"Luthier"}
                color={"text.primary"}
                fontWeight={"bold"}
                fontSize={"xl"}
              >
                Email Student
              </FormLabel>
              <Input bgColor={"white"} rounded={"xl"} />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Luthier"}
                color={"text.primary"}
                fontWeight={"bold"}
                fontSize={"xl"}
              >
                Angkatan
              </FormLabel>
              <Select bgColor={"white"} rounded={"xl"} />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Luthier"}
                color={"text.primary"}
                fontWeight={"bold"}
                fontSize={"xl"}
              >
                ID Line
              </FormLabel>
              <Input bgColor={"white"} rounded={"xl"} />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
          </Stack>
        </Stack>
        <Text fontFamily={"Luthier"} color={"text.primary"} fontWeight={"bold"}>
          Wrong account?
          <Link fontFamily={"Luthier"} color={"#FFBE00"} fontWeight={"bold"}>
            Log Out
          </Link>
        </Text>
        <Button bgColor={"text.primary"} textColor={"white"}>
          Continue
        </Button>
      </Stack>
    </Stack>
  );
};

export default Onboarding;
