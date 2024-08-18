import useLoading from "@/hooks/useLoading";
import { Hide, Show, Stack } from "@chakra-ui/react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";

type MalpunBGProps = {
  children: React.ReactNode;
};

const MalpunBG = ({ children }: MalpunBGProps) => {
  const desktop = useRive({
    src: "/animated/assets.riv",
    artboard: "Malpun_Desktop",
    stateMachines: "Main",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.BottomCenter }),
  });

  const mobile = useRive({
    src: "/animated/assets.riv",
    artboard: "Malpun_Mobile",
    stateMachines: "Main",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.BottomCenter }),
  });

  const { setLoaded } = useLoading();

  useEffect(() => {
    if (desktop.rive && desktop.rive.isPlaying) {
      setLoaded(true);
    }

    if (mobile.rive && mobile.rive.isPlaying) {
      setLoaded(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desktop.rive, mobile.rive]);

  return (
    <Stack
      minW={"100vw"}
      minH={"100vh"}
      flex={1}
      pos={"relative"}
      bgImage={{
        base: "/bg/malpun-mobile.png",
        lg: "/bg/malpun-desktop.png",
      }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
    >
      <Show below="md">
        {/* <Rive
          src="/animated/assets.riv"
          artboard={"Malpun_Mobile"}
          stateMachines="Main"
          layout={
            new Layout({ fit: Fit.Cover, alignment: Alignment.BottomCenter })
          }
          style={{
            flex: 1,
          }}
        /> */}

        <mobile.RiveComponent
          style={{
            flex: 1,
          }}
        />
      </Show>

      <Hide below="md">
        {/* <Rive
          src="/animated/assets.riv"
          artboard={"Malpun_Desktop"}
          stateMachines="Main"
          layout={
            new Layout({ fit: Fit.Cover, alignment: Alignment.BottomCenter })
          }
          style={{
            flex: 1,
          }}
        /> */}
        <desktop.RiveComponent
          style={{
            flex: 1,
          }}
        />
      </Hide>

      <Stack
        minW={"100vw"}
        minH={"100vh"}
        flex={1}
        pos={"absolute"}
        overflow={"hidden"}
        alignItems={"center"}
        justifyContent={{ base: "center", lg: "space-around" }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default MalpunBG;
