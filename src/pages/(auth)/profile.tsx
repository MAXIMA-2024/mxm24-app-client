import {
  Stack,
  Image,
  Text,
  Input,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Stack bgColor={"#FAF4E8"} minH={"100vh"} align={"center"} padding={"5rem"}>
      {/* Back button */}
      <Stack w={"75%"}>
        <Link to={"/home"}>
          <Stack w={"5rem"}>
            <Image
              src="/icons/back-icon.png"
              w={"5rem"}
              transition={"all 0.2s ease-in-out"}
              _hover={{ w: "4.5rem", transformOrigin: "center" }}
            />
          </Stack>
        </Link>
      </Stack>

      {/* Ticket */}
      <Stack align={"center"} gap={"0rem"}>
        {/* Header Ticket */}
        <Stack direction={"row"} gap={"0rem"} w={"75%"} justify={"center"}>
          <Stack
            bgGradient="linear(to-r, #350025, #980538)"
            direction={"row"}
            alignItems={"end"}
            justify={"center"}
            paddingX={"5rem"}
            paddingY={"1rem"}
            borderTopRadius={"1rem"}
            w={"60%"}
          >
            <Image
              src="/icons/ticket-logo-maxima.png"
              alt="Logo"
              boxSize="50px"
            />
            <Heading
              flex="1"
              textAlign="center"
              fontFamily={"Luthier"}
              fontWeight={"Bold"}
              color={"white"}
              fontSize={"3xl"}
            >
              Hai, NAMA LENGKAP
            </Heading>
            <Box boxSize="50px" />
          </Stack>

          <Stack
            bgGradient="linear(to-r, #980538, #350025)"
            direction={"row"}
            alignItems={"end"}
            justify={"center"}
            paddingX={"5rem"}
            paddingY={"1rem"}
            marginX={"0"}
            borderTopRadius={"1rem"}
            w={"40%"}
          >
            <Heading
              textAlign={"justify"}
              fontFamily={"Luthier"}
              fontWeight={"Bold"}
              color={"white"}
              fontSize={"3xl"}
            >
              ENTRY CODE
            </Heading>
          </Stack>
        </Stack>

        {/* Footer Ticket */}
        <Stack
          bgColor={"yellow"}
          bgGradient="linear(to-r, #87001D, #B6154B, #87001D)"
          w={"75%"}
          direction={"row"}
          gap={"0rem"}
          borderBottomRadius={"1rem"}
        >
          <Stack
            w={"60%"}
            padding={"2rem"}
            paddingX={"3rem"}
            direction={"row"}
            spacing={10}
          >
            <Stack w={"60%"} gap={"2rem"}>
              <Stack>
                <Text fontFamily={"Luthier"} color={"white"}>
                  Student Email:
                </Text>
                <Input
                  type="email"
                  placeholder="nama@student.umn.ac.id"
                  bgColor={"white"}
                />
              </Stack>
              <Stack>
                <Text fontFamily={"Luthier"} color={"white"}>
                  Program Studi:
                </Text>
                <Input type="text" bgColor={"white"} />
              </Stack>
              <Stack>
                <Text fontFamily={"Luthier"} color={"white"}>
                  Angkatan:
                </Text>
                <Input type="text" bgColor={"white"} />
              </Stack>
              <Stack>
                <Button bgColor={"#FFF3D9"} color={"#B20034"} w={"30%"}>
                  Save
                </Button>
              </Stack>
            </Stack>
            <Stack w={"40%"} gap={"2rem"}>
              <Stack>
                <Text fontFamily={"Luthier"} color={"white"}>
                  NIM:
                </Text>
                <Input type="text" bgColor={"white"} />
              </Stack>
              <Stack>
                <Text fontFamily={"Luthier"} color={"white"}>
                  Whatsapp:
                </Text>
                <Input type="text" bgColor={"white"} />
              </Stack>
              <Stack>
                <Text fontFamily={"Luthier"} color={"white"}>
                  ID Line:
                </Text>
                <Input type="text" bgColor={"white"} />
              </Stack>
            </Stack>
          </Stack>
          <Stack w={"40%"} align={"center"}>
            <Image src="/icons/qr-dummy.png" w={"60%"} paddingY={"2.5rem"} />
          </Stack>
        </Stack>
      </Stack>

      {/* Footer */}
      <Stack></Stack>
    </Stack>
  );
};

export default Profile;
