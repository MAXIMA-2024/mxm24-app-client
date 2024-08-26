import useLoading from "@/hooks/useLoading";
import { Hide, Show, Stack } from "@chakra-ui/react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";

type WelcomeBGProps = {
  children: React.ReactNode;
};

const WelcomeBG = ({ children }: WelcomeBGProps) => {
  const desktop = useRive({
    src: "/animated/assets.riv",
    artboard: "Landing_Desktop",
    stateMachines: "Main",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  const mobile = useRive({
    src: "/animated/assets.riv",
    artboard: "Landing_Mobile",
    stateMachines: "Main",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.TopCenter }),
  });

  const { setLoaded, isReducedMotion } = useLoading();

  useEffect(() => {
    if (isReducedMotion || (desktop.rive && desktop.rive.isPlaying)) {
      setLoaded(true);
    }

    if (isReducedMotion || (mobile.rive && mobile.rive.isPlaying)) {
      setLoaded(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desktop.rive, mobile.rive, isReducedMotion]);

  return (
    <Stack
      minW={"100vw"}
      minH={"100vh"}
      flex={1}
      pos={"relative"}
      bgImage={{
        base: "/bg/welcome-page-mobile.png",
        lg: "/bg/welcome-page-desktop.png",
      }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
    >
      {!isReducedMotion && (
        <>
          <Show below="md">
            <mobile.RiveComponent
              style={{
                flex: 1,
              }}
            />
          </Show>

          <Hide below="md">
            <desktop.RiveComponent
              style={{
                flex: 1,
              }}
            />
          </Hide>
        </>
      )}

      <Stack
        minW={"100vw"}
        minH={"100vh"}
        flex={1}
        pos={"absolute"}
        overflow={"hidden"}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default WelcomeBG;
