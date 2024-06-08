import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Stack>
      AuthLayout
      <Outlet />
    </Stack>
  );
};

export default AuthLayout;
