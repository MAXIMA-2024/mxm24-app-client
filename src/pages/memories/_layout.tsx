import { Hide, Show, Stack } from "@chakra-ui/react";
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useEffect } from "react";
import useLoading from "@/hooks/useLoading";

const MemoriesLayout = () => {
  const desktop = useRive({
    src: "animated/memories.riv",
    artboard: "DesktopLandingPage",
    stateMachines: "Main",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  const mobile = useRive({
    src: "animated/memories.riv",
    artboard: "MobileLandingPage",
    stateMachines: "Main",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
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
    <>
      <Stack
        minW={"100vw"}
        minH={"100vh"}
        position={"relative"}
        bgColor={"white"}
        bgPosition={"center"}
      >
        <Show below="md">
          <mobile.RiveComponent style={{ flex: 1 }} />
        </Show>
        <Hide below="md">
          <desktop.RiveComponent style={{ flex: 1 }} />
        </Hide>
      </Stack>
    </>
  );
};

export default MemoriesLayout;
