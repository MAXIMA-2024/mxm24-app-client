import { Stack, Image, Text, Tooltip, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProfileDropDown } from "./ProfileDropDown";
import useAuth from "@/hooks/useAuth";

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const items = [
  {
    title: "HoME",
    icon: "/icons/home-icon.png",
    link: "/home",
  },
  {
    title: "State",
    icon: "/icons/state-icon.png",
    link: "/state",
  },
  {
    title: "MalPun",
    icon: "/icons/malpun-icon.png",
    link: "/malpun",
  },
  {
    title: "FAQ",
    icon: "/icons/faq-icon.png",
    link: "/faq",
  },
  {
    title: "About Us",
    icon: "/icons/aboutus-icon.png",
    link: "/aboutus",
  },
];

const Links = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const auth = useAuth();
  return (
    <Stack as={"div"}>
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={variants}
        className="links"
      >
        {/* Links */}
        <Stack spacing={6}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.title === "State" && auth.status !== "authenticated" ? (
                <Tooltip
                  label="Please login to access State"
                  aria-label="A tooltip"
                  bgColor={"button.primary"}
                  rounded={"lg"}
                  mx={"0.3rem"}
                  py={"0.5rem"}
                  shadow={"lg"}
                >
                  <Button
                    variant="link"
                    onClick={(e) => e.preventDefault()}
                    style={{ cursor: "not-allowed" }}
                    sx={{
                      textDecoration: "none",
                      color: "text.primary",
                      _hover: { textDecoration: "none" },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={6}>
                      <Image src={item.icon} w="1.25rem" h="1rem" />
                      <Text fontFamily={"Lexend"} fontWeight={400}>
                        {item.title}
                      </Text>
                    </Stack>
                  </Button>
                </Tooltip>
              ) : (
                <Link to={item.link} onClick={closeSidebar}>
                  <Stack direction="row" alignItems="center" spacing={6}>
                    <Image
                      src={item.icon}
                      w={
                        item.title !== "State" && item.title !== "FAQ"
                          ? "1rem"
                          : "1.25rem"
                      }
                      h={"1rem"}
                    />
                    <Text fontFamily={"Lexend"} color={"text.primary"}>
                      {item.title}
                    </Text>
                  </Stack>
                </Link>
              )}
            </motion.div>
          ))}
        </Stack>
        {/* Dropdown Profile */}
        <ProfileDropDown closeSidebar={closeSidebar} />
      </motion.div>
    </Stack>
  );
};

export default Links;
