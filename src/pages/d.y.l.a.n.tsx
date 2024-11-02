import useAuth from "@/hooks/useAuth";
import { useDvdScreensaver } from "@/hooks/useDvdScreenSaver";
import useLoading from "@/hooks/useLoading";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const DylanEasterEgg = () => {
  const { containerRef, elementRef, impactCount } = useDvdScreensaver({
    // freezeOnHover: true,
    speed: 4,
  });

  const [color, setColor] = useState<number>(0);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isLoaded } = useLoading();
  const { status } = useAuth();

  useEffect(() => {
    // random hue degree
    const hue = Math.floor(Math.random() * 360);
    setColor(hue);
  }, [impactCount]);

  //   play sound on impact
  useEffect(() => {
    if (impactCount > 0) {
      const audio = new Audio("/easteregg/boom.mp3");
      audio.play();
      audio.volume = 0.5;
      audio.remove();

      return () => {
        audio.pause();
        audio.remove();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [impactCount]);

  useEffect(() => {
    if (isLoaded && status !== "loading") {
      const bgAudio = new Audio("/easteregg/skibidi.mp3");
      bgAudio.loop = true;
      bgAudio.autoplay = false;

      bgAudio.play();

      onOpen();

      return () => {
        bgAudio.pause();
        bgAudio.remove();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, status]);

  return (
    <Stack
      minW={"100vw"}
      minH={"100vh"}
      bgColor={"red"}
      gap={0}
      bgImage={"/easteregg/bg.jpg"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      <Stack ref={containerRef} flex={1} gap={0}>
        <Stack ref={elementRef} w={"max-content"} gap={0}>
          <Image
            src="/easteregg/dylanlion.png"
            w={"10rem"}
            filter={`hue-rotate(${color}deg)`}
            onClick={onOpen}
            cursor={"pointer"}
          />
        </Stack>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose} size={"md"} isCentered>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent m={"1.5rem"}>
          <ModalHeader>
            Ucapan Terima Kasih dari Charta MAXIMA UMN 2024
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack gap={"1rem"}>
              <Text>
                Kepada seluruh <b>NOBLES</b>, panitia MAXIMA UMN 2024 yang luar
                biasa,
              </Text>
              <Text>
                Kami dari Charta,{" "}
                <b>mengucapkan terima kasih yang sebesar-besarnya</b> atas
                dedikasi, kerja keras, dan kebersamaan yang kalian tunjukkan
                dalam menyukseskan MAXIMA tahun ini. Tanpa kontribusi kalian
                yang luar biasa, acara ini tidak akan mencapai kesuksesan dan
                kemeriahan yang kita lihat bersama.
              </Text>
              <Text>
                Kini, tibalah saatnya bagi kami untuk berpamit. Semoga semangat
                dan kenangan indah yang kita bangun di MAXIMA 2024 menjadi
                fondasi untuk acara-acara hebat selanjutnya.{" "}
                <b>Tetaplah bersemangat dan terus berkarya!</b>
              </Text>
              <Text>
                Salam hangat,
                <br />
                <b>Charta MAXIMA UMN 2024</b>
              </Text>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default DylanEasterEgg;
