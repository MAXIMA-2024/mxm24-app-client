import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import ModalHimbauan from "./ModalHimbauan";
import useApi, { ResponseModel, useToastErrorHandler } from "@/hooks/useApi";

type TicketResponse = {
  id: number;
  code: string;
  mahasiswaId: number;
  attendance: boolean;
  attendanceTime: Date | null;
  alfagiftId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

interface ModalCheckProps {
  isOpen: boolean;
  onClose: () => void;
}

const allowedPrefixes = ["999999", "999001", "999004", "999003", "99902000"];

const checkToken = (allowedPrefixes: string[]) => (val: string) => {
  return allowedPrefixes.some((prefix) => val.startsWith(prefix));
};

const tokenSchema = z
  .string()
  .length(16, { message: "Value must be 16 characters long" })
  .refine(checkToken(allowedPrefixes), {
    message: "Value does not start with an allowed prefix.",
  });

const ModalCheck = ({ isOpen, onClose }: ModalCheckProps) => {
  const api = useApi();
  const errorHandler = useToastErrorHandler();
  const toast = useToast();
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHimbauanClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseHimbauanModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
    setErrorMessage(null);
  };

  const handleCheckButtonClick = async () => {
    setIsLoading(true);

    const validation = tokenSchema.safeParse(token);

    if (!validation.success) {
      setErrorMessage(validation.error.errors[0].message);
      setIsLoading(false);
      return;
    }

    setErrorMessage(null);

    api
      .post<ResponseModel<TicketResponse>>("/malpun/internal", {
        alfagiftId: validation.data,
      })
      .then((res) => {
        toast({
          title: "Success!",
          description: "Berhasil mengklaim tiket Malam Puncak.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        nav(`/malpun/viewticket?order_id=${res.data.data.code}`);
      })
      .catch(errorHandler)
      .finally(() => {
        setIsLoading(false);
        onClose();
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"#e9e9c0"} m={"1rem"}>
          <ModalHeader>Enter your Alfagift card number</ModalHeader>
          <ModalBody>
            <Text mb={"10px"}>Card number:</Text>
            <Input
              type="text"
              placeholder="Your Alfagift Card Number Here..."
              value={token}
              onChange={handleTokenChange}
              isRequired
              pattern="[0-9]*"
              border={"2px solid #00000095"}
            />
            {errorMessage && (
              <Text color="red.500" mt={2} fontSize={"xs"}>
                {errorMessage}
              </Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleHimbauanClick}>
              Close
            </Button>
            <Button
              // colorScheme="teal"
              bgColor={"#F59D00"}
              color={"white"}
              _hover={{
                bgColor: "#E79200",
              }}
              onClick={handleCheckButtonClick}
              isLoading={isLoading}
            >
              Check
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ModalHimbauan isOpen={isModalOpen} onClose={handleCloseHimbauanModal} />
    </>
  );
};

export default ModalCheck;
