import { useDvdScreensaver } from "@/hooks/useDvdScreenSaver";
import { Image, Stack, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const DylanEasterEgg = () => {
  const { containerRef, elementRef, impactCount } = useDvdScreensaver({
    // freezeOnHover: true,
    speed: 4,
  });
  const toast = useToast();

  const [color, setColor] = useState<number>(0);

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
    const bgAudio = new Audio("/easteregg/skibidi.mp3");
    bgAudio.loop = true;
    bgAudio.play();

    toast({
      title: "Wild Dylan appeared! 🦁",
      description:
        "Haii, buat siapapun kamu yang berhasil nemuin page ini selamat yaa! 🎉. Website MAXIMA 2024 di buat dengan cinta yang dalam oleh divisi CHARTA. Bikin web ini susah banget, jadi diharapkan kamu ikut menjadi divisi Website di MAXIMA 2025",
      status: "success",
      duration: 15000,
      isClosable: true,
    });

    return () => {
      bgAudio.pause();
      bgAudio.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DylanEasterEgg;
