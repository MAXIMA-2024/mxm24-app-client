import {
  Stack,
  Menu,
  MenuButton,
  Button,
  Avatar,
  AvatarBadge,
  MenuList,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import React from "react";

const isLogin = false;

const user = {
  status: isLogin ? "authenticated" : "unaunthenticated",
  name: "Jonathan",
};

const ProfileDropDown = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("xs");

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );

  const handleClick = (newSize: string) => {
    toast({
      // position: "top", nanti palingan diset position nya + custom toast sekalian, karena ga custom nanti keututupan toast nya
      title: "Buy Ticket for MalPun",
      description:
        "Get your tickets and attend the Malam Puncak MAXIMA 2024 soon!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setSize(newSize);
    onClose();
    closeSidebar();
  };

  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <>
      {/* <style>
        {`
            .chakra-menu__menu-list css-13654e8 {
                padding: 0 !important;
                width: 1px !important;
            }
          `}
      </style> */}
      <Stack mb={10}>
        {user.status === "authenticated" && (
          <Menu>
            <MenuButton>
              <Button
                variant={"ghost"}
                w={"full"}
                // justifyContent={"start"}
                // p={[0, 0, 0, 2]}
                // mt={[0, 0, "0.75rem", "1rem"]}
                cursor={"default"}
                disabled={true}
                _hover={{
                  pointerEvents: "none",
                  draggable: "none",
                }}
                textAlign={"left"}
              >
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
                    <Text fontSize={{ base: "x-small", md: "smaller" }}>
                      Halo,
                    </Text>
                    <Text
                      fontWeight={600}
                      fontSize={{ base: "small", md: "medium" }}
                    >
                      Jonathan
                    </Text>
                  </Stack>
                </Stack>
              </Button>
            </MenuButton>
            <MenuList px={2} shadow={"lg"} borderRadius={"2xl"}>
              <Link to={"/auth/profile"}>
                <Button
                  // bg={"status.error"}
                  //   p={2}
                  py={0}
                  my={1}
                  mb={2}
                  fontSize={["0.8rem", "0.8rem", "0.85rem", "1rem"]}
                  borderRadius={"xl"}
                  color={"black"}
                  fontWeight={"medium"}
                  gap={2}
                  w={"full"}
                  justifyContent={"center"}
                >
                  <FaRegEdit
                    color="black"
                    fontSize={"1rem"}
                    fontWeight={"bold"}
                  />
                  Edit Profile
                </Button>
              </Link>
              <Button
                bg={"status.error"}
                p={2}
                py={0}
                my={1}
                fontSize={["0.8rem", "0.8rem", "0.85rem", "1rem"]}
                borderRadius={"xl"}
                color={"white"}
                fontWeight={"medium"}
                gap={2}
                w={"full"}
                justifyContent={"center"}
                // onClick={auth.logout}
              >
                <IoLogOutOutline
                  color="white"
                  fontSize={"1.25rem"}
                  fontWeight={"bold"}
                />
                Log Out
              </Button>
            </MenuList>
          </Menu>
        )}

        {user.status !== "authenticated" && (
          <>
            <Button
              rounded={"full"}
              bgColor={"text.primary"}
              p={"1.5rem"}
              shadow={"md"}
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <Text color={"text.tertiary"} fontWeight={"medium"}>
                Login with SSO
              </Text>
            </Button>

            <Modal
              isOpen={isOpen}
              onClose={onClose}
              size={size}
              isCentered={true}
              motionPreset="slideInBottom"
            >
              {overlay}
              <ModalContent>
                {/* <ModalHeader>Modal Title</ModalHeader> */}
                <ModalCloseButton />
                <ModalBody>
                  <Text
                    fontFamily={"Lexend"}
                    py={"3rem"}
                    textAlign={"center"}
                    fontSize={"1.6rem"}
                  >
                    Apakah kamu Mahasiswa/i UMN angkatan 2024?
                  </Text>
                </ModalBody>

                <ModalFooter justifyContent={"center"} pb={"2rem"}>
                  <Stack alignItems={"center"}>
                    <Button
                      as={Link}
                      to={`https://sso.umn.ac.id/cas/login?service=${
                        import.meta.env.VITE_FRONTEND_URL + "/auth/sso"
                      }`}
                      bgColor={"button.primary"}
                      onClick={onClose}
                      // onClick={handleClick}
                      color={"text.tertiary"}
                      _hover={{ bgColor: "#3A0025" }}
                      // fontSize={"0.3rem"}
                      w={"15rem"}
                    >
                      Iya Mahasiswa 2024
                    </Button>
                    <Button
                      variant="ghost"
                      borderWidth={1}
                      borderColor={"button.primary"}
                      color={"text.primary"}
                      as={Link}
                      to={`/malpun`}
                      // onClick={onClose}
                      onClick={() => handleClick(size)}
                      w={"15rem"}
                    >
                      Bukan Mahasiswa 2024
                    </Button>
                  </Stack>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )}
      </Stack>
    </>
  );
};

const TopLeftProfile = () => {
  return (
    <Stack pos={"fixed"} right={-2} top={"25px"}>
      {user.status === "authenticated" && (
        <Menu>
          <MenuButton>
            <Button
              variant={"ghost"}
              w={"full"}
              // justifyContent={"start"}
              // p={[0, 0, 0, 2]}
              // mt={[0, 0, "0.75rem", "1rem"]}
              cursor={"default"}
              disabled={true}
              _hover={{
                pointerEvents: "none",
                draggable: "none",
              }}
              textAlign={"left"}
            >
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                pr={{ lg: 12, xl: 20 }}
                p={{ base: 5, lg: 10, xl: 20 }}
              >
                <Avatar bg={"#44002B"} size={"md"}></Avatar>
              </Stack>
            </Button>
          </MenuButton>
          <MenuList px={2} shadow={"lg"} borderRadius={"2xl"}>
            <Link to={"/auth/profile"}>
              <Button
                // bg={"status.error"}
                p={2}
                py={0}
                my={1}
                mb={2}
                fontSize={["0.8rem", "0.8rem", "0.85rem", "1rem"]}
                borderRadius={"xl"}
                color={"black"}
                fontWeight={"medium"}
                gap={2}
                w={"full"}
                justifyContent={"center"}
                // onClick={auth.logout}
              >
                <FaRegEdit
                  color="black"
                  fontSize={"1rem"}
                  fontWeight={"bold"}
                />
                Edit Profile
              </Button>
            </Link>
            <Button
              bg={"status.error"}
              p={2}
              py={0}
              my={1}
              fontSize={["0.8rem", "0.8rem", "0.85rem", "1rem"]}
              borderRadius={"xl"}
              color={"white"}
              fontWeight={"medium"}
              gap={2}
              w={"full"}
              // justifyContent={"center"}
              // onClick={auth.logout}
            >
              <IoLogOutOutline
                color="white"
                fontSize={"1.25rem"}
                fontWeight={"bold"}
              />
              Log Out
            </Button>
          </MenuList>
        </Menu>
      )}
    </Stack>
  );
};

export { ProfileDropDown, TopLeftProfile };
