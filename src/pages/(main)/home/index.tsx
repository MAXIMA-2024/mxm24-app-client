import HoMEBG from "@/components/animated-bg/home-bg";
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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

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
  const { data } = useSWR<Toggle[]>("/toggle");
  const toast = useToast();
  const nav = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "home");
      if (!check || !check.toggle) {
        toast({
          title: "Access denied!",
          description: "Rangkaian acara HoME akan segera dimulai",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        nav("/");
      }
    }
  });

  return (
    <HoMEBG>
      <Stack minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Stack
          direction={"row"}
          gap={5}
          mt={{ base: "12rem", lg: "25rem" }}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {CardData.map((card, index) => (
            <Button
              as={motion.button}
              flexDirection={{ base: "row", lg: "column" }}
              variant={"ghost"}
              key={index}
              bgColor={"card.primary"}
              p={{ base: 3, lg: 5 }}
              rounded={"xl"}
              justifyContent={"center"}
              alignItems={"center"}
              w={"14rem"}
              h={{ base: "7rem", lg: "9rem" }}
              gap={4}
              onClick={card.title === "Challenge" ? onOpen : undefined}
              variants={{
                initial: {
                  opacity: 0,
                  y: -100,
                },
                enter: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.25 * index,
                    easings: "backOut",
                  },
                },
                hover: {
                  scale: 1.05,
                  transition: {
                    duration: 0.2,
                  },
                },
              }}
              initial={"initial"}
              whileInView={"enter"}
              whileHover={"hover"}
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
          size={{ base: "sm", lg: "2xl" }}
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
              fontSize={{ base: "2rem", lg: "2.5rem" }}
              pt={{ base: 8, lg: 10 }}
            >
              Nama Challenge
            </ModalHeader>
            <ModalBody p={{ base: 2, lg: 10 }} mx={{ base: 4, lg: 16 }}>
              <Text
                textAlign={"justify"}
                fontFamily={"Lexend"}
                mb={{ base: 3, lg: 5 }}
                fontSize={{ base: "0.75rem", lg: "1rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Porttitor massa id neque aliquam vestibulum morbi blandit cursus
                risus. Libero volutpat sed cras ornare arcu dui. Id diam
                maecenas ultricies mi eget mauris. Vivamus at augue eget arcu
                dictum varius duis. Ipsum nunc aliquet bibendum enim facilisis
                gravida neque. Quam viverra orci sagittis eu volutpat odio
                facilisis mauris. Maecenas ultricies mi eget mauris pharetra et.
                Ultricies tristique nulla aliquet enim. At tellus at urna
                condimentum mattis pellentesque. Pellentesque habitant morbi
                tristique senectus et netus et. Nulla at volutpat diam ut
                venenatis tellus. Lacus laoreet non curabitur gravida arcu ac
                tortor. In hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque elit.
              </Text>
            </ModalBody>
            <ModalFooter pb={10}>
              <Button
                variant={"ghost"}
                bgColor={"button.primary"}
                color={"text.tertiary"}
                p={{ base: 6, lg: 7 }}
                px={{ base: 8, lg: 10 }}
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
    </HoMEBG>
  );
};

export default Home;
