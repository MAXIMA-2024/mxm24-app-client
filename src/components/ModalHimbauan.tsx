import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Button,
} from "@chakra-ui/react";

interface ModalHimbauanProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalHimbauan = ({ isOpen, onClose }: ModalHimbauanProps) => {
  return (
    <>
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"#e9e9c0"} m={"1rem"}>
          <ModalHeader>Alfagift Card Number</ModalHeader>
          <ModalBody>
            <Text mb={"10px"}>
              Membuat akun Alfagift diharuskan untuk dapat klaim tiket MalPun.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalHimbauan;
