import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Button,
  Input,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { z } from "zod";

interface ModalAlfagiftExternalProps {
  isOpen: boolean;
  callback: (alfagiftId: string | undefined) => void;
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

const ModalAlfagiftExternal = ({
  isOpen,
  callback,
}: ModalAlfagiftExternalProps) => {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
    setErrorMessage(null);
  };

  const handleCheckButtonClick = async () => {
    const validation = tokenSchema.safeParse(token);

    if (!validation.success) {
      setErrorMessage(validation.error.errors[0].message);
      return;
    }

    setErrorMessage(null);

    callback(token === "" ? undefined : token);
  };

  return (
    <>
      <Modal isOpen={isOpen} isCentered onClose={() => callback(undefined)}>
        <ModalOverlay />
        <ModalContent bgColor={"#e9e9c0"} m={"1rem"}>
          <ModalHeader>Punya akun Alfagift?</ModalHeader>
          <ModalBody>
            <Image src="/icons/alfagift-header.jpg" rounded={"md"}></Image>
            <Text my={"10px"} fontWeight={"bold"}>
              Ayo download & isi no membermu sekarang dan dapatkan voucher
              belanja Rp10.000 di Alfagift!
            </Text>
            <Text mb={"10px"}>Card number:</Text>
            <Input
              type="text"
              placeholder="Your Alfagift Card Number Here..."
              value={token || ""}
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
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                callback(undefined);
              }}
            >
              Saya tidak tertarik
            </Button>
            <Button colorScheme="green" mr={3} onClick={handleCheckButtonClick}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAlfagiftExternal;
