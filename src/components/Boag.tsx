import { Stack, Image, IconButton } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

const Boag = () => {
  return (
    <Stack direction={"column"}>
      <Image
        src="/state/boag.png"
        alt="boag"
        w={["16rem", "24rem", "24rem", "24rem", "36rem"]}
      />
      <IconButton
        isRound={true}
        variant="solid"
        bgColor={"#EA7E2B40"}
        textColor={"white"}
        aria-label="Done"
        fontSize="100px"
        left={["97", "143", "143", "143", "215"]}
        bottom={["55.5", "82", "82", "82", "120"]}
        // size={"lg"}
        w={["2rem", "4rem", "4rem", "4rem", "6rem"]}
        h={["2.5rem", "4rem", "4rem", "4rem", "6rem"]}
        icon={<MdAdd />}
      />
    </Stack>
  );
};
export default Boag;
