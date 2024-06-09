import { useState } from "react";
import { motion } from "framer-motion";
import "@/components/Sidebar/Sidebar.css";
import Links from "./links/Links";
import ToggleButton from "@/components/Sidebar/toggleButton/ToggleButton";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

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
      clipPath: "circle(30px at 50px 50px)",
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
        <Links closeSidebar={closeSidebar} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
