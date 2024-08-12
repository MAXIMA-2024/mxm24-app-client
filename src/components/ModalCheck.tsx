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
} from "@chakra-ui/react";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

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
  .refine(checkToken(allowedPrefixes), {
    message: "Value does not start with an allowed prefix.",
  })
  .refine((val) => val.length === 16, {
    message: "Value must be 16 characters long.",
  });

const ModalCheck = ({ isOpen, onClose }: ModalCheckProps) => {
  //   const api = useApi();
  //   const errorHandler = useToastErrorHandler();
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  //   const isNimLengthValid = nim.trim().length === 11;

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
    setErrorMessage(null);
  };

  const handleCheckButtonClick = async () => {
    setIsLoading(true);

    const validation = tokenSchema.safeParse(token);

    if (!validation.success) {
      setErrorMessage(validation.error.errors[0].message); // Set the first error message
      setIsLoading(false);
      return;
    }

    setErrorMessage(null); // Clear the error message if validation passes
    nav("/malpun/viewticket");
    setIsLoading(false);
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
              <Text color="red.500" mt="4">
                {errorMessage}
              </Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
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
              isDisabled={!tokenSchema.safeParse(token).success}
              isLoading={isLoading}
            >
              Check
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCheck;
