import {
  Stack,
  Text,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

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
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            onClick={card.title === "Challenge" ? onOpen : () => {}}
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
      {/* Modal Challenge */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size={"2xl"}
      >
        <ModalOverlay />
        <ModalContent
          alignItems={"center"}
          bgImage={"bg/modal-bg.png"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
        >
          <ModalHeader
            fontFamily={"Luthier"}
            color={"text.primary"}
            fontSize={"2.5rem"}
            pt={10}
          >
            Nama Challenge
          </ModalHeader>
          <ModalBody p={10} mx={16}>
            <Text textAlign={"justify"} fontFamily={"Lexend"} mb={5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Porttitor massa id neque aliquam vestibulum morbi blandit cursus
              risus. Libero volutpat sed cras ornare arcu dui. Id diam maecenas
              ultricies mi eget mauris. Vivamus at augue eget arcu dictum varius
              duis. Ipsum nunc aliquet bibendum enim facilisis gravida neque.
              Quam viverra orci sagittis eu volutpat odio facilisis mauris.
              Maecenas ultricies mi eget mauris pharetra et. Ultricies tristique
              nulla aliquet enim. At tellus at urna condimentum mattis
              pellentesque. Pellentesque habitant morbi tristique senectus et
              netus et. Nulla at volutpat diam ut venenatis tellus. Lacus
              laoreet non curabitur gravida arcu ac tortor. In hac habitasse
              platea dictumst vestibulum rhoncus est pellentesque elit.
            </Text>
          </ModalBody>
          <ModalFooter pb={10}>
            <Button
              variant={"ghost"}
              bgColor={"button.primary"}
              color={"text.tertiary"}
              p={7}
              px={10}
              mr={3}
              onClick={onClose}
              _hover={{
                transform: "scale(0.95)",
                transition: "all 0.2s ease-in-out",
                bgColor: "#3A0025",
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default Home;
