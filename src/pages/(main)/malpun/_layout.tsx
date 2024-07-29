import { Outlet, useLocation } from "react-router-dom";
import { Stack } from "@chakra-ui/react";

const MalpunLayout = () => {
  const loct = useLocation();

  return (
    <Stack
      alignItems={"center"}
      justifyContent={{ base: "center", lg: "space-around" }}
      minH={"100vh"}
      minW={"100vw"}
      bgImage={
        loct.pathname.endsWith("malpun")
          ? {
              base: "/bg/malpun-mobile.png",
              lg: "/bg/malpun-desktop-main.png",
            }
          : {
              base: "/bg/malpun-bg-mobile.png",
              lg: "/bg/malpun-desktop-main.png",
            }
      }
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
