import useLoading from "@/hooks/useLoading";
import { Hide, Show, Stack } from "@chakra-ui/react";
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useEffect } from "react";

type HomeBGProps = {
  children: React.ReactNode;
};

const HoMEBG = ({ children }: HomeBGProps) => {
  const desktop = useRive({
    src: "animated/assets.riv",
    artboard: "Home_Desktop",
    stateMachines: "Main",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  const mobile = useRive({
    src: "animated/assets.riv",
    artboard: "Home_Mobile",
    stateMachines: "Main",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.TopCenter }),
  });

  const { setLoaded, isReducedMotion } = useLoading();

  const a = useStateMachineInput(desktop.rive, "Main", "IsDone", false);

  useEffect(() => {
    if (a) {
      setTimeout(() => {
        a.value = true;
      }, 2800);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [a]);

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
        base: "/bg/home-mobile.png",
        lg: "/bg/home-desktop.png",
      }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
    >
      {!isReducedMotion && (
        <>
          <Show below="md">
            {/* <Rive
          src="animated/assets.riv"
          artboard={"Home_Mobile"}
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
            {/* <RiveComponent
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
        </>
      )}

      <Stack
        minW={"100vw"}
        minH={"100vh"}
        flex={1}
        pos={"absolute"}
        // overflow={"hidden"}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default HoMEBG;
