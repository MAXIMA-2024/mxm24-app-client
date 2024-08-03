import { Outlet } from "react-router-dom";
import MalpunBG from "@/components/animated-bg/malpun-bg";

const MalpunLayout = () => {
  return (
    <MalpunBG>
      <Outlet />
    </MalpunBG>
  );
};

export default MalpunLayout;
