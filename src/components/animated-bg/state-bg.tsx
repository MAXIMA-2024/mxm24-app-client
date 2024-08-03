import useLoading from "@/hooks/useLoading";
import { Hide, Show, Stack } from "@chakra-ui/react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";

type StateBGProps = {
  children: React.ReactNode;
};

const StateBG = ({ children }: StateBGProps) => {
  const desktop = useRive({
    src: "/animated/assets.riv",
    artboard: "STATE_Desktop",
    stateMachines: "Main",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  const mobile = useRive({
    src: "/animated/assets.riv",
    artboard: "STATE_Mobile",
    stateMachines: "Main",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.TopCenter }),
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
      minH={"200vh"}
      flex={1}
      pos={"relative"}
      bgImage={{
        base: "/bg/waves-mobile.png",
        lg: "/bg/waves-desktop.png",
      }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
    >
      <Show below="md">
        {/* <Rive
          src="/animated/assets.riv"
          artboard={"STATE_Mobile"}
          stateMachines="Main"
          layout={
            new Layout({ fit: Fit.Cover, alignment: Alignment.TopCenter })
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
          artboard={"STATE_Desktop"}
          stateMachines="Main"
          layout={new Layout({ fit: Fit.Cover, alignment: Alignment.Center })}
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
        minH={"200vh"}
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

export default StateBG;
