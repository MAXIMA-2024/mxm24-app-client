import { Flex, Heading, Image, Stack, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      {/* top and bot wrapper */}
      <Stack minW={"100vw"} minH={"100vh"} gap={0}>
        {/* Background Wrapper untuk top section */}
        <Stack
        // bgImage={{
        //   base: "/footer/footer-maxima-mobile-top.png",
        //   lg: "/footer/footer-maxima-desktop-top.png",
        // }}
        // bgSize={"cover"}
        // bgPosition={{ base: "top", lg: "center" }}
        // bgRepeat={"no-repeat"}
        // height="50%"
        >
          {/* sponsors and media partners content */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-around"
            align={"center"}
          >
            {/* sponsors */}
            <Stack textAlign={"center"}>
              <Heading
                as="h3"
                size={{ base: "lg", lg: "xl" }}
                fontFamily={"Lexend"}
                fontWeight={"semibold"}
                textColor={"#44002B"}
                mb={{ base: 2, md: 4, lg: 6 }}
              >
                Sponsored By
              </Heading>
              <Image
                src="/footer/sponsor.png"
                alt="maxima-sponsors"
                width={{ base: "370px", md: "500px", lg: "700px" }}
              />
            </Stack>

            {/* media partners */}
            <Stack textAlign={"center"}>
              <Heading
                as="h3"
                size={{ base: "lg", lg: "xl" }}
                fontFamily={"Lexend"}
                fontWeight={"semibold"}
                textColor={"#44002B"}
                mb={{ base: 2, md: 4, lg: 6 }}
              >
                Media Partners
              </Heading>
              <Image
                src="/footer/medpar.png"
                alt="maxima-media-partners"
                width={{ base: "370px", md: "500px", lg: "700px" }}
              />
            </Stack>
          </Flex>
        </Stack>

        {/* Background Wrapper untuk bottom section */}
        <Stack
        // bgImage={{
        //   base: "/footer/footer-maxima-mobile-bot.png",
        //   lg: "/footer/footer-maxima-desktop-bot.png",
        // }}
        // bgSize={"cover"}
        // bgRepeat={"no-repeat"}
        // bgPosition={{ base: "top", lg: "center" }}
        // height="50%"
        >
          {/* maxima logo & contact*/}
          <Flex
            justify={{ base: "start", lg: "space-between" }}
            direction={{ base: "column", lg: "row" }}
            align={{ base: "", md: "center" }}
            paddingX={{ base: 8, lg: 32 }}
            width={"full"}
          >
            {/* maxima logo */}
            <Stack align={"start"}>
              <Image
                src="/myicons/maxima2024-logo.png"
                width={{ base: "200px", md: "300px", lg: "350px" }}
                height={"auto"}
                mb={{ base: 1, md: 2, lg: 4 }}
              />
              <Text
                fontFamily={"Lexend"}
                fontWeight={"regular"}
                textAlign={"left"}
                size={"xl"}
                textColor={"#44002B"}
                mb={{ base: 1, md: 3, lg: 8 }}
              >
                Express Your Uniqueness, Show It To Shine
              </Text>
              <Flex
                justify="start"
                align="left"
                gap={8}
                mb={{ base: 10, lg: 0 }}
              >
                <Link href="https://line.me/ti/p/vuu4204x" isExternal>
                  <Image
                    src="/footer/logo-line.svg"
                    width={{ base: "30px", md: "40px", lg: "50px" }}
                    height="auto"
                  />
                </Link>
                <Link href="https://www.instagram.com/maximaumn/" isExternal>
                  <Image
                    src="/footer/logo-instagram.svg"
                    width={{ base: "30px", md: "40px", lg: "50px" }}
                    height="auto"
                  />
                </Link>
                <Link href="https://www.tiktok.com/@maximaumn" isExternal>
                  <Image
                    src="/footer/logo-tiktok.svg"
                    width={{ base: "30px", md: "40px", lg: "50px" }}
                    height="auto"
                  />
                </Link>
                <Link href="https://www.youtube.com/@MAXIMAUMN" isExternal>
                  <Image
                    src="/footer/logo-youtube.svg"
                    width={{ base: "30px", md: "40px", lg: "50px" }}
                    height="auto"
                  />
                </Link>
              </Flex>
            </Stack>

            {/* maxima contact & page */}
            <Flex justify="center" gap={{ base: 4, lg: 16 }} paddingBottom={8}>
              <Stack>
                <Heading
                  textColor={"#44002B"}
                  size={{ base: "sm", lg: "md" }}
                  fontFamily={"Lexend"}
                  fontWeight={"semibold"}
                >
                  Pages
                </Heading>
                <Link
                  as={RouterLink}
                  to={"/home"}
                  size={{ base: "sm", lg: "md" }}
                  fontFamily="Lexend"
                  textAlign="left"
                  color="black"
                  fontWeight={"regular"}
                >
                  HoME
                </Link>
                <Link
                  as={RouterLink}
                  to={"/state"}
                  size={{ base: "sm", lg: "md" }}
                  fontFamily="Lexend"
                  textAlign="left"
                  color="black"
                  fontWeight={"regular"}
                >
                  STATE
                </Link>
                <Link
                  as={RouterLink}
                  to={"/malpun"}
                  size={{ base: "sm", lg: "md" }}
                  fontFamily="Lexend"
                  textAlign="left"
                  color="black"
                  fontWeight={"regular"}
                >
                  MalPun
                </Link>
                <Link
                  as={RouterLink}
                  to={"/faq"}
                  size={{ base: "sm", lg: "md" }}
                  fontFamily="Lexend"
                  textAlign="left"
                  color="black"
                  fontWeight={"regular"}
                >
                  FAQ
                </Link>
                <Link
                  as={RouterLink}
                  to={"/aboutus"}
                  size={{ base: "sm", lg: "md" }}
                  fontFamily="Lexend"
                  textAlign="left"
                  color="black"
                  fontWeight={"regular"}
                >
                  About Us
                </Link>
                <Link
                  as={RouterLink}
                  to={"/profile"}
                  size={{ base: "sm", lg: "md" }}
                  fontFamily="Lexend"
                  textAlign="left"
                  color="black"
                  fontWeight={"regular"}
                >
                  Profile
                </Link>
              </Stack>

              <Stack maxW="270px">
                <Heading
                  textColor={"#44002B"}
                  size={{ base: "sm", lg: "md" }}
                  fontFamily={"Lexend"}
                  fontWeight={"semibold"}
                >
                  Location
                </Heading>
                <Text
                  fontFamily={"Lexend"}
                  size={{ base: "sm", lg: "md" }}
                  fontWeight={"regular"}
                >
                  Universitas Multimedia Nusantara Jl. Scientia Boulevard,
                  Gading Serpong, Tangerang, Banten 15811
                </Text>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
        {/* Footer Copyright */}
      </Stack>
      <Stack bg={"#44002B"} textAlign={"center"} paddingY={3}>
        <Text color={"white"} fontFamily={"Lexend"} fontWeight={"regular"}>
          © MAXIMA UMN 2024 • Made with Love by Charta
        </Text>
      </Stack>
    </footer>
  );
}

export default Footer;
