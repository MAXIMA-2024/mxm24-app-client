import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      minH={"100vh"}
      bgImage={{
        base: "/bg/onboarding-mobile.png",
        md: "/bg/onboarding-desktop.png",
      }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
    >
      <Outlet />
    </Stack>
  );
};

export default AuthLayout;
