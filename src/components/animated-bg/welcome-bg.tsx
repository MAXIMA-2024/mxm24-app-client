import { Hide, Show, Stack } from "@chakra-ui/react";
import Rive, { Alignment, Fit, Layout } from "@rive-app/react-canvas";

type WelcomeBGProps = {
  children: React.ReactNode;
};

const WelcomeBG = ({ children }: WelcomeBGProps) => {
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
      <Show below="md">
        <Rive
          src="animated/assets.riv"
          artboard={"Landing_Mobile"}
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
          src="animated/assets.riv"
          artboard={"Landing_Desktop"}
          stateMachines="Main"
          layout={new Layout({ fit: Fit.Cover, alignment: Alignment.Center })}
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
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default WelcomeBG;
