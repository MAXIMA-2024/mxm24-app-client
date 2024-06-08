import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const GlobalLayout = () => {
  return (
    <Stack minW={"100vw"} minH={"100vh"}>
      <Outlet />
    </Stack>
  );
};

export default GlobalLayout;
