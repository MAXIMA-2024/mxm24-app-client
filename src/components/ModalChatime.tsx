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

interface ModalChatimeProps {
  isOpen: boolean;
  onClose: () => void;
  setChatimeBundling: (value: boolean) => void;
}

const ModalChatime = ({
  isOpen,
  onClose,
  setChatimeBundling,
}: ModalChatimeProps) => {
  return (
    <>
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"#e9e9c0"} m={"1rem"}>
          <ModalHeader>Bundling Chatime</ModalHeader>
          <ModalBody>
            <Text mb={"10px"}>Apakah kamu ingin membeli bundling Chatime?</Text>
            <Text>
              <b>• Dengan menambah Rp. 5000,-</b> kamu bisa mendapatkan tiket
              dan minuman spesial dari Chatime!
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Tidak, terima kasih
            </Button>
            <Button
              colorScheme="green"
              mr={3}
              onClick={() => {
                setChatimeBundling(true);

                onClose();
              }}
            >
              Iya, saya ingin!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalChatime;
