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
    <Stack
      bgImage={{
        base: "/bg/profile-mobile.png",
        lg: "/bg/profile-desktop.png",
      }}
      bgSize={"contain"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      bgColor={"#FAF4E8"}
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"5rem"}
    >
      {/* START Back button */}
      <Stack w={"90%"}>
        <Stack w={"5rem"}>
          <Link to={"/home"}>
            <Image
              src="/icons/back-icon.png"
              w={"5rem"}
              transition={"all 0.2s ease-in-out"}
              _hover={{ w: "4.5rem", transformOrigin: "center" }}
            />
          </Link>
        </Stack>
      </Stack>
      {/* END Back button */}

      {/* Ticket */}
      <Stack
        align={"center"}
        justify={"center"}
        gap={"0rem"}
        direction={{ base: "column", lg: "row" }}
        w={"90%"}
      >
        {/* START Left ticket */}
        <Stack direction={"column"} gap={"0rem"} w={"60%"} justify={"center"}>
          {/* START NAMA LENGKAP */}
          <Stack
            bgGradient="linear(to-r, #350025, #980538)"
            direction={"row"}
            alignItems={"end"}
            justify={"center"}
            paddingX={"5rem"}
            paddingY={"1rem"}
            borderTopRadius={"1rem"}
            w={"100%"}
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
          {/* END NAMA LENGKAP */}

          {/* START INPUT */}
          <Stack
            w={"100%"}
            bgGradient="linear(to-r, #87001D, #B6154B)"
            padding={"2rem"}
            paddingX={"3rem"}
            direction={"row"}
            spacing={10}
            borderBottomRadius={"1rem"}
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
          {/* END INPUT */}
        </Stack>
        {/* END Left Ticket */}

        {/* START Right Ticket */}
        <Stack direction={"column"} gap={"0rem"} w={"40%"} justify={"center"}>
          {/* START Entry code */}
          <Stack
            bgGradient="linear(to-r, #980538, #350025)"
            direction={"column"}
            justify={"center"}
            paddingX={"5rem"}
            paddingY={"1rem"}
            marginX={"0"}
            borderTopRadius={"1rem"}
            w={"100%"}
          >
            <Heading
              flex="1"
              textAlign="center"
              fontFamily={"Luthier"}
              fontWeight={"Bold"}
              color={"white"}
              fontSize={"3xl"}
            >
              ENTRY CODE
            </Heading>
          </Stack>
          {/* END Entry code */}

          {/* START QR Code */}
          <Stack
            w={"100%"}
            align={"center"}
            bgGradient="linear(to-r, #B6154B, #87001D)"
            borderBottomRadius={"1rem"}
          >
            <Image src="/icons/qr-dummy.png" w={"60%"} paddingY={"2.5rem"} />
          </Stack>
          {/* END QR Code */}
        </Stack>
        {/* END Right Ticket */}
      </Stack>
    </Stack>
  );
};

export default Profile;
