import { Flex, Heading, Image, Stack, Text, Button } from "@chakra-ui/react";

function Footer() {
  return (
    <footer>
      <Stack
        bgImage={"/footer/footer-background.png"}
        minW="100vw"
        minH={"100vh"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        paddingY={5}
      >
        <Flex
          direction="row"
          justify="space-around"
          align="left"
          wrap="wrap"
          mb={36}
        >
          {/* sponsors */}
          <Stack textAlign={"center"}>
            <Heading
              as="h3"
              size="xl"
              fontFamily={"Lexend"}
              fontWeight={"semibold"}
              textColor={"#44002B"}
              mb={6}
            >
              Sponsored By
            </Heading>
            <Image
              src="/footer/sponsor.png"
              alt="maxima-sponsors"
              width={{ base: "350px", md: "500px", lg: "700px" }}
            />
          </Stack>

          {/* media partners */}
          <Stack textAlign={"center"}>
            <Heading
              as="h3"
              size="xl"
              fontFamily={"Lexend"}
              fontWeight={"semibold"}
              textColor={"#44002B"}
              mb={6}
            >
              Media Partners
            </Heading>
            <Image
              src="/footer/medpar.png"
              alt="maxima-media-partners"
              width={{ base: "350px", md: "500px", lg: "700px" }}
            />
          </Stack>
        </Flex>

        {/* maxima */}
        <Flex justify="space-around" align="center" w="100vw">
          {/* maxima logo */}
          <Stack align={"start"}>
            <Image
              src="/myicons/maxima2024-logo.png"
              width="350px"
              height={"auto"}
              mb={4}
            />
            <Text
              fontFamily={"Lexend"}
              fontWeight={"regular"}
              textAlign={"left"}
              size={"xl"}
              textColor={"#44002B"}
              mb={8}
            >
              Express Your Uniqueness, Show It To Shine
            </Text>
            <Flex justify="start" align="left" gap={8}>
              <Image src="/footer/logo-line.svg" width="50px" height={"auto"} />
              <Image
                src="/footer/logo-instagram.svg"
                width="50px"
                height={"auto"}
              />
              <Image
                src="/footer/logo-tiktok.svg"
                width="50px"
                height={"auto"}
              />
              <Image
                src="/footer/logo-youtube.svg"
                width="50px"
                height={"auto"}
              />
            </Flex>
          </Stack>

          {/* maxima contact & page */}
          <Flex justify="center" gap={16}>
            <Stack>
              <Heading
                textColor={"#44002B"}
                size={"md"}
                fontFamily={"Lexend"}
                fontWeight={"semibold"}
              >
                Pages
              </Heading>
              <Button
                as="a"
                href="/home"
                variant="link"
                size={"md"}
                fontFamily="Lexend"
                textAlign="left"
                color="black"
                display="block"
                width="100%"
                fontWeight={"regular"}
              >
                HoME
              </Button>
              <Button
                as="a"
                href="/state"
                size={"md"}
                variant="link"
                fontFamily="Lexend"
                textAlign="left"
                color="black"
                display="block"
                width="100%"
                fontWeight={"regular"}
              >
                STATE
              </Button>
              <Button
                as="a"
                href="/malpun"
                size={"md"}
                variant="link"
                fontFamily="Lexend"
                textAlign="left"
                color="black"
                display="block"
                width="100%"
                fontWeight={"regular"}
              >
                MalPun
              </Button>
              <Button
                as="a"
                href="/faq"
                size={"md"}
                variant="link"
                fontFamily="Lexend"
                textAlign="left"
                color="black"
                display="block"
                width="100%"
                fontWeight={"regular"}
              >
                FAQ
              </Button>
              <Button
                as="a"
                href="/aboutus"
                size={"md"}
                variant="link"
                fontFamily="Lexend"
                textAlign="left"
                color="black"
                display="block"
                width="100%"
                fontWeight={"regular"}
              >
                About Us
              </Button>
              <Button
                as="a"
                href="/profile"
                variant="link"
                size={"md"}
                fontFamily="Lexend"
                textAlign="left"
                color="black"
                display="block"
                width="100%"
                fontWeight={"regular"}
              >
                Profile
              </Button>
            </Stack>

            <Stack maxW="400px">
              <Heading
                textColor={"#44002B"}
                size={"md"}
                fontFamily={"Lexend"}
                fontWeight={"semibold"}
              >
                Location
              </Heading>
              <Text
                fontFamily={"Lexend"}
                size={"md"}
                fontWeight={"regular"}
                minW="200px"
              >
                Universitas Multimedia Nusantara Jl. Scientia Boulevard, Gading
                Serpong, Tangerang, Banten 15811
              </Text>
            </Stack>
          </Flex>
        </Flex>
      </Stack>

      {/* Footer Copyright */}
      <Stack bg={"#44002B"} textAlign={"center"} paddingY={3}>
        <Text color={"white"} fontFamily={"Lexend"} fontWeight={"regular"}>
          © MAXIMA UMN 2024 • Made with Love by Charta
        </Text>
      </Stack>
    </footer>
  );
}

export default Footer;
