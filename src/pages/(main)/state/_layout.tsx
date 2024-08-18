import useAuth from "@/hooks/useAuth";
import { useNavigate } from "@/router";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useSWR from "swr";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const StateLayout = () => {
  const { data } = useSWR<Toggle[]>("/toggle");
  const toast = useToast();
  const nav = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "state");
      if (!check || !check.toggle) {
        toast({
          title: "Access denied!",
          description: "STATE belum dibuka untuk saat ini.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        nav("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (auth.status === "unauthenticated") {
      toast({
        title: "Access denied!",
        description: "STATE hanya bisa diakses setelah login.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      nav("/");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default StateLayout;
