import {
  Stack,
  Menu,
  MenuButton,
  Button,
  Avatar,
  AvatarBadge,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProfileDropDown = () => {
  return (
    <Stack mb={10}>
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
                <Text fontSize={{ base: "x-small", md: "smaller" }}>Halo,</Text>
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
              <FaRegEdit color="black" fontSize={"1rem"} fontWeight={"bold"} />
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
    </Stack>
  );
};

const TopLeftProfile = () => {
  return (
    <Stack pos={"fixed"} right={-2} top={"25px"}>
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
              <FaRegEdit color="black" fontSize={"1rem"} fontWeight={"bold"} />
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
    </Stack>
  );
};

export { ProfileDropDown, TopLeftProfile };
