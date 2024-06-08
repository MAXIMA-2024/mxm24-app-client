import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Stack>
      <Outlet />
    </Stack>
  );
};

export default MainLayout;
