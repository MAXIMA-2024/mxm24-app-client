import { Stack, Image, Button } from "@chakra-ui/react";

const boag = () => {
  return (
    <Stack w={"28rem"}>
      <Button
        w={"4rem"}
        h={"4rem"}
        top={"137"}
        left={"172"}
        rounded={"full"}
        bgColor={"#EA7E2B40"}
        textColor={"white"}
        fontWeight={"bold"}
        fontSize={"7xl"}
        justifyContent={"center"}
      >
        +
      </Button>
      <Image src="/state/boag.png" alt="boag" />+
    </Stack>
  );
};
export default boag;
