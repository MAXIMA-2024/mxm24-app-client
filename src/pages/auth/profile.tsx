import { Stack, Image, Text, Input, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Stack
      bgImage={{
        base: "/bg/profile-mobile.png",
        lg: "",
      }}
      bgSize={"contain"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      bgColor={"#FAF4E850"}
      minW={"100vw"}
      minH={"100vh"}
      justify={"center"}
      align={"center"}
      padding={{ base: "1rem", sm: "2rem", lg: "5rem" }}
      pb={{ base: "0rem", lg: "5rem" }}
      pos={"relative"}
      paddingY={{ base: "3rem", lg: "0" }}
    >
      {/* START Back button */}
      <Stack w={"90%"} zIndex={"10000"}>
        <Stack w={"5rem"}>
          <Link to={"/home"}>
            <Image
              src="/icons/back-icon.png"
              w={{ base: "3rem", md: "4rem", lg: "5rem" }}
              transition={"all 0.2s ease-in-out"}
              _hover={{ w: "4.5rem", transformOrigin: "center" }}
            />
          </Link>
        </Stack>
      </Stack>
      {/* END Back button */}

      {/* Ticket */}
      {/* START bg prop */}
      {/* <Box
        bgImage={"/bg/profile-prop-desktop.png"}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        h={"90vh"}
        w={"90vw"}
        justifyContent={"center"}
        alignItems={"center"}
        pos={"absolute"}
        zIndex={"100"}
      /> */}
      {/* <Image
        src="/bg/profile-bottom-desktop.png"
        pos={"absolute"}
        display={{ base: "none", lg: "block" }}
        zIndex={"100"}
        bottom={{ lg: "2rem" }}
        w={{ lg: "70vw" }}
        h={{ lg: "85vh" }}
      />
      <Image
        src="/bg/profile-top-desktop.png"
        pos={"absolute"}
        display={{ base: "none", lg: "block" }}
        zIndex={"100"}
        top={{ lg: "6rem" }}
        right={{ lg: "15rem" }}
        w={{ lg: "50vw" }}
      /> */}
      {/* <Image
        src="/bg/pen-holder.png"
        pos={"absolute"}
        display={{ base: "none", lg: "block" }}
        zIndex={"10000"}
        top={{ lg: "6.375rem" }}
        left={{ lg: "24.5rem" }}
        w={{ lg: "1vw" }}
      /> */}
      {/* <Image
        src="/bg/clip.png"
        pos={"absolute"}
        display={{ base: "none", lg: "block" }}
        zIndex={{ lg: "10000" }}
        top={{ lg: "4.95rem" }}
        right={{ lg: "50.75rem" }}
        w={{ lg: "5.1vw" }}
      /> */}
      {/* END bg prop */}

      {/* START bg atas desktop */}
      {/* <Box
        display={{ base: "none", lg: "block" }}
        bgImage={"/bg/profile-top-desktop.png"}
        bgSize={"contain"}
        w={"100%"}
        h={"25vh"}
        bgRepeat={"no-repeat"}
      /> */}
      {/* END bg atas desktop */}

      <Stack
        align={"center"}
        justify={"center"}
        gap={"0rem"}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"90%"}
        zIndex={"1000"}
      >
        {/* START Left ticket */}
        <Stack
          direction={"column"}
          gap={"0rem"}
          w={{ base: "100%", lg: "60%" }}
          justify={"center"}
        >
          {/* START NAMA LENGKAP */}
          <Stack
            bgGradient="linear(to-r, #350025, #980538)"
            direction={"row"}
            alignItems={"center"}
            justify={"center"}
            paddingX={{ base: "2rem", lg: "5rem" }}
            paddingY={"1rem"}
            borderTopRadius={"1rem"}
            w={"100%"}
            minH={"5rem"}
          >
            <Image
              src="/icons/ticket-logo-maxima.png"
              alt="Logo"
              boxSize="3rem"
              display={{ base: "none", lg: "block" }}
            />
            <Heading
              flex="1"
              textAlign="center"
              fontFamily={"Luthier"}
              fontWeight={"Bold"}
              color={"white"}
              fontSize={{ base: "xl", lg: "3xl" }}
            >
              Hai, NAMA LENGKAP
            </Heading>
          </Stack>
          {/* END NAMA LENGKAP */}

          {/* START INPUT */}
          <Stack
            w={"100%"}
            bgGradient="linear(to-r, #87001D, #B6154B)"
            padding={"2rem"}
            paddingX={"3rem"}
            direction={{ base: "column", lg: "row" }}
            spacing={10}
            borderBottomRadius={"1rem"}
            minH={"27rem"}
          >
            <Stack direction={"column"} gap={"2rem"} flex={1}>
              <Stack direction={{ base: "column", lg: "row" }} gap={"3rem"}>
                <Stack w={{ base: "100%", lg: "60%" }} gap={"2rem"}>
                  {/* START Left input */}
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
                  {/* END Left input */}

                  {/* <Stack>
                <Button bgColor={"#FFF3D9"} color={"#B20034"} w={"30%"}>
                  Save
                </Button>
              </Stack> */}
                </Stack>
                <Stack w={{ base: "100%", lg: "40%" }} gap={"2rem"}>
                  {/* START Right input */}
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
                  {/* END Right input */}
                </Stack>
              </Stack>
              {/* START Save Button */}
              <Stack justify={"center"} align={{ base: "center", lg: "start" }}>
                <Button bgColor={"#FFF3D9"} color={"#B20034"} w={"30%"}>
                  Save
                </Button>
              </Stack>
              {/* END Save Button */}
            </Stack>
          </Stack>
          {/* END INPUT */}
        </Stack>
        {/* END Left Ticket */}

        {/* START Right Ticket */}
        <Stack
          direction={"column"}
          gap={"0rem"}
          w={{ base: "100%", lg: "40%" }}
          justify={"center"}
        >
          {/* START Entry code */}
          <Stack
            bgGradient="linear(to-r, #980538, #350025)"
            direction={"row"}
            alignItems={"center"}
            justify={"center"}
            paddingX={{ base: "2rem", lg: "5rem" }}
            paddingY={"1rem"}
            borderTopRadius={"1rem"}
            w={"100%"}
            minH={"5rem"}
          >
            <Image
              src="/icons/ticket-logo-maxima.png"
              alt="Logo"
              boxSize="3rem"
              display={{ base: "block", lg: "none" }}
            />
            <Heading
              flex="1"
              textAlign="center"
              fontFamily={"Luthier"}
              fontWeight={"Bold"}
              color={"white"}
              fontSize={{ base: "xl", lg: "3xl" }}
            >
              ENTRY CODE
            </Heading>
          </Stack>
          {/* END Entry code */}

          {/* START QR Code */}
          <Stack
            w={"100%"}
            align={"center"}
            justify={"center"}
            bgGradient="linear(to-r, #B6154B, #87001D)"
            borderBottomRadius={"1rem"}
            minH={{ base: "15rem", lg: "27rem" }}
            borderLeft={{ base: "none", lg: "dashed 0.35rem #72002e" }}
          >
            <Image
              src="/icons/qr-dummy.png"
              maxW={"57.5%"}
              paddingY={"2.5rem"}
            />
          </Stack>
          {/* END QR Code */}
        </Stack>
        {/* END Right Ticket */}
      </Stack>

      {/* START bg bottom desktop */}
      {/* <Box
        display={{ base: "none", lg: "block" }}
        bgImage={"/bg/profile-bottom-desktop.png"}
        bgSize={"contain"}
        w={"100%"}
        h={"100vh"}
        bgRepeat={"no-repeat"}
      /> */}
      {/* END bg bottom desktop */}
    </Stack>
  );
};

export default Profile;
