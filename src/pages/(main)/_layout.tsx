import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Stack>
      MainLayout
      <Outlet />
    </Stack>
  );
};

export default MainLayout;
