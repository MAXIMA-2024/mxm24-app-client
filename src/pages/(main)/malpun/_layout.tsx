import { Outlet } from "react-router-dom";
import { Stack } from "@chakra-ui/react";

const MalpunLayout = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={{ base: "center", lg: "space-around" }}
      minH={"100vh"}
      minW={"100vw"}
      bgImage={{
        base: "/bg/malpun-bg-mobile.png",
        lg: "/bg/malpun-bg-desktop.png",
      }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={{ base: "", md: "center" }}
      // pt={{ base: "5rem", lg: "5rem" }}
    >
      <Outlet />
    </Stack>
  );
};

export default MalpunLayout;
