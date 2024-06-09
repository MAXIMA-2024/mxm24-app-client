import { Stack, Image, Text, Avatar, AvatarBadge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  return (
    <Stack>
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={variants}
        className="links"
      >
        <Stack spacing={6}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.link} onClick={closeSidebar}>
                <Stack
                  className="a"
                  direction="row"
                  alignItems="center"
                  spacing={6}
                >
                  <Image
                    src={item.icon}
                    w={
                      item.title !== "State" && item.title !== "FAQ"
                        ? "1rem"
                        : "1.25rem"
                    }
                    h={"1rem"}
                  />
                  <Text fontFamily={"Lexend"}>{item.title}</Text>
                </Stack>
              </Link>
            </motion.div>
          ))}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          pr={{ lg: 12, xl: 20 }}
          p={{ base: 5, lg: 10, xl: 20 }}
        >
          <Avatar>
            <AvatarBadge
              boxSize={{ lg: "0.75rem", xl: "1.25rem" }}
              bg="green.500"
            />
          </Avatar>
          <Text
            color={"text.secondary"}
            fontFamily={"Lexend"}
            fontSize={{ base: "small", lg: "smaller", xl: "larger" }}
            ml={{ base: 1, xl: 5 }}
            // letterSpacing={"0.05rem"}
          >
            NAMA LENGKAP
          </Text>
        </Stack>
      </motion.div>
    </Stack>
  );
};

export default Links;
