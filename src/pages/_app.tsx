import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const GlobalLayout = () => {
  return (
    <Stack minH={"100vh"} minW={"100vw"}>
      <Outlet />
    </Stack>
  );
};

export default GlobalLayout;
