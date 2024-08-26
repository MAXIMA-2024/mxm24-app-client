import ModalCheck from "@/components/ModalCheck";
import useAuth from "@/hooks/useAuth";
import {
  Stack,
  Text,
  Button,
  Image,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const ClaimTicket = () => {
  const { data } = useSWR<Toggle[]>("/toggle");
  const toast = useToast();
  const nav = useNavigate();
  const auth = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure(); // For chakra modal

  const handleCheckButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "malpun-internal");
      if (!check || !check.toggle) {
        toast({
          title: "Access denied!",
          description: "Anda belum bisa mengklaim tiket Malam Puncak saat ini.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        nav("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (auth.status !== "authenticated" && auth.user?.role !== "mahasiswa") {
      toast({
        title: "Access denied!",
        description: "Ikuti step-by-step klaim tiket malpun!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      nav("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <>
      <Stack
        align={"center"}
        color={"text.primary"}
        fontWeight={"900"}
        gap={{ base: 0, lg: 2 }}
        w={"100%"}
        pt={{ base: "2rem", md: "2rem", lg: "7rem" }}
      >
        <Stack
          direction={"column"}
          flex={1}
          bg={"linear-gradient(180deg, #47002D 0%, #FFBE00 100%)"}
          p={{ base: "1rem", lg: "1rem" }}
          px={{ base: "1rem", lg: "1rem" }}
          rounded={"xl"}
        >
          {/* LEFT IMAGE */}
          <Stack
            alignItems={{ base: "center", lg: "center" }}
            justifyContent={{ lg: "center" }}
            mb={{ base: "1rem", lg: 0 }}
            onClick={onOpen} // Open modal when image is clicked
          >
            <Image
              src="/poster/poster-internal.jpg"
              w={{ base: "20rem", md: "23rem", lg: "20rem" }}
              rounded={"xl"}
              cursor="pointer"
            ></Image>
          </Stack>
          <Stack alignItems={"center"} mt={{ base: 0, lg: "0.5rem" }}>
            <Button
              bgColor={"button.primary"}
              w={{ base: "6rem", md: "8rem", lg: "8rem" }}
              variant={"ghost"}
              transition={"0.3s"}
              color={"text.tertiary"}
              rounded={"xl"}
              _hover={{ bgColor: "#3A0025", transform: "scale(1.1)" }}
              onClick={handleCheckButtonClick}
            >
              <Text
                fontFamily={"Lexend"}
                fontWeight={"400"}
                fontSize={{ base: "small", md: "medium", lg: "large" }}
              >
                Klaim
              </Text>
            </Button>
          </Stack>
        </Stack>
      </Stack>

      {/* Image Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt={"2.5rem"} mb={"1rem"}>
            <Image
              src="/poster/poster-internal.jpg"
              w="100%"
              h="100%"
              objectFit="contain"
              rounded={"lg"}
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      <ModalCheck isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ClaimTicket;
