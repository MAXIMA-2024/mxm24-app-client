import { useDvdScreensaver } from "@/hooks/useDvdScreenSaver";
import { Image, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const DylanEasterEgg = () => {
  const { containerRef, elementRef, impactCount } = useDvdScreensaver({
    // freezeOnHover: true,
    speed: 4,
  });

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
  }, [impactCount]);

  useEffect(() => {
    const bgAudio = new Audio("/easteregg/skibidi.mp3");
    bgAudio.loop = true;
    bgAudio.play();

    return () => {
      bgAudio.pause();
      bgAudio.remove();
    };
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
