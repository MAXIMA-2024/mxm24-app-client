import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "@/components/Sidebar/Sidebar.css";
import Links from "./links/Links";
import ToggleButton from "@/components/Sidebar/toggleButton/ToggleButton";
import { TopLeftProfile } from "./links/ProfileDropDown";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  // hack buat nge paksa render ulang link sidebar
  useEffect(() => {
    setId(id + 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const closeSidebar = () => {
    setOpen(false);
  };

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(27px at 49.5px 49px)",
      transition: {
        delay: 0,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebarContainer" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links closeSidebar={closeSidebar} key={id} />
      </motion.div>
      <div className="toggleButton">
        <ToggleButton setOpen={setOpen} />
      </div>
      <TopLeftProfile />
    </motion.div>
  );
};

export default Sidebar;
