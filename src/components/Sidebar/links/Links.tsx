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
        <Link to={"/profile"}>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            pr={{ lg: 12, xl: 20 }}
            p={{ base: 5, lg: 10, xl: 20 }}
          >
            <Avatar bg={"#44002B"} size={"md"}>
              <AvatarBadge
                boxSize={{ lg: "0.75rem", xl: "1.25rem" }}
                bg="green.500"
              />
            </Avatar>
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              gap={0}
              color={"text.primary"}
              fontFamily={"Lexend"}
              fontWeight={500}
              mx={2}
              noOfLines={2}
              isTruncated={true}
              textOverflow={"ellipsis"}

              // letterSpacing={"0.1rem"}
              // textShadow={"0 0 1rem #000000"}
            >
              <Text fontSize={{ base: "x-small", md: "smaller" }}>Halo,</Text>
              <Text fontWeight={600} fontSize={{ base: "small", md: "medium" }}>
                Jonathan
              </Text>
            </Stack>
          </Stack>
        </Link>
      </motion.div>
    </Stack>
  );
};

export default Links;
