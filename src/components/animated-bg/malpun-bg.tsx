import { Hide, Show, Stack } from "@chakra-ui/react";
import Rive, { Alignment, Fit, Layout } from "@rive-app/react-canvas";

type MalpunBGProps = {
  children: React.ReactNode;
};

const MalpunBG = ({ children }: MalpunBGProps) => {
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
        <Rive
          src="/animated/assets.riv"
          artboard={"Malpun_Mobile"}
          stateMachines="Main"
          layout={
            new Layout({ fit: Fit.Cover, alignment: Alignment.BottomCenter })
          }
          style={{
            flex: 1,
          }}
        />
      </Show>

      <Hide below="md">
        <Rive
          src="/animated/assets.riv"
          artboard={"Malpun_Desktop"}
          stateMachines="Main"
          layout={
            new Layout({ fit: Fit.Cover, alignment: Alignment.BottomCenter })
          }
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
