import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Button,
  Image,
  ModalCloseButton,
} from "@chakra-ui/react";

interface ModalChatimeProps {
  isOpen: boolean;
  onClose: () => void;
  setChatimeBundling: (value: boolean) => void;
  closeModal: () => void;
}

const ModalChatime = ({
  isOpen,
  onClose,
  setChatimeBundling,
  closeModal,
}: ModalChatimeProps) => {
  return (
    <>
      <Modal isOpen={isOpen} isCentered onClose={closeModal}>
        <ModalOverlay />
        <ModalContent bgColor={"#e9e9c0"} m={"1rem"}>
          <ModalHeader>Bundling Chatime</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src="/myicons/bundling-chatime-header.png" />
            <Text fontWeight={"bold"} my={"12.5px"}>
              Apakah kamu ingin membeli bundling Chatime?
            </Text>
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
