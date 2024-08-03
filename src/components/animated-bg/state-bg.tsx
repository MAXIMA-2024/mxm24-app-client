import { Hide, Show, Stack } from "@chakra-ui/react";
import Rive, { Alignment, Fit, Layout } from "@rive-app/react-canvas";

type StateBGProps = {
  children: React.ReactNode;
};

const StateBG = ({ children }: StateBGProps) => {
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
        <Rive
          src="/animated/assets.riv"
          artboard={"STATE_Mobile"}
          stateMachines="Main"
          layout={
            new Layout({ fit: Fit.Cover, alignment: Alignment.TopCenter })
          }
          style={{
            flex: 1,
          }}
        />
      </Show>

      <Hide below="md">
        <Rive
          src="/animated/assets.riv"
          artboard={"STATE_Desktop"}
          stateMachines="Main"
          layout={new Layout({ fit: Fit.Cover, alignment: Alignment.Center })}
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
