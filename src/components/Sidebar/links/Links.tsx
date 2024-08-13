import { Stack, Image, Text, Tooltip, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProfileDropDown } from "./ProfileDropDown";
import useAuth from "@/hooks/useAuth";
import useSWR from "swr";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const items = [
  {
    title: "HoME",
    icon: "/icons/home-icon.png",
    link: "/home",
  },
  {
    title: "STATE",
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
  const { data } = useSWR<Toggle[]>("/toggle");

  const homeLink = () => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "home");
      if (!check || !check.toggle) {
        return false;
      }
      return true;
    }
    return false;
  };

  const isHomeLinkActive = homeLink();

  const stateLink = () => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "state");
      if (!check || !check.toggle) {
        return false;
      }
      return true;
    }
    return false;
  };

  const isStateLinkActive = stateLink();

  return (
    <Stack as={"div"}>
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        className="links"
      >
        {/* Links */}

        {/* for unauthenticated user */}
        {auth.status === "unauthenticated" && (
          <Stack spacing={6}>
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  open: {
                    x: 0,
                    opacity: 1,
                  },
                  closed: {
                    x: -50,
                    opacity: 0,
                  },
                }}
                initial={"closed"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileInView={"open"}
                transition={{
                  duration: 0.75,
                  delay: index * 0.1,
                }}
              >
                {!isStateLinkActive && item.title === "STATE" ? (
                  <Tooltip
                    label="Silahkan Login untuk mengakses STATE"
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
                ) : !isHomeLinkActive && item.title === "HoME" ? (
                  <Tooltip
                    label="Rangkaian acara HoME akan segera dimulai"
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
        )}

        {/* for authenticated user */}
        {auth.status === "authenticated" && (
          <Stack spacing={6}>
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  open: {
                    x: 0,
                    opacity: 1,
                  },
                  closed: {
                    x: -50,
                    opacity: 0,
                  },
                }}
                initial={"closed"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileInView={"open"}
                transition={{
                  duration: 0.75,
                  delay: index * 0.1,
                }}
              >
                {!isStateLinkActive && item.title === "STATE" ? (
                  <Tooltip
                    label="Rangkaian acara STATE akan segera dimulai"
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
                ) : !isHomeLinkActive && item.title === "HoME" ? (
                  <Tooltip
                    label="Rangkaian acara HoME akan segera dimulai"
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
        )}

        <ProfileDropDown closeSidebar={closeSidebar} />
      </motion.div>
    </Stack>
  );
};

export default Links;
