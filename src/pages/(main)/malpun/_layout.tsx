import { Outlet, useNavigate } from "react-router-dom";
import MalpunBG from "@/components/animated-bg/malpun-bg";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import useSWR from "swr";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const MalpunLayout = () => {
  const { data } = useSWR<Toggle[]>("/toggle");
  const toast = useToast();
  const nav = useNavigate();

  useEffect(() => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "malpun");
      if (!check || !check.toggle) {
        toast({
          title: "Access denied!",
          description: "Malam Puncak akan segera dimulai",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        nav("/");
      }
    }
  }, [data]);

  return (
    <MalpunBG>
      <Outlet />
    </MalpunBG>
  );
};

export default MalpunLayout;
