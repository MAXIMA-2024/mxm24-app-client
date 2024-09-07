import { Flex, Heading, Image, Stack, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      {/* top and bot wrapper */}
      <Stack
        minW={"100vw"}
        minH={"100vh"}
        gap={0}
        fontFamily={"Lexend"}
        color={"#44002B"}
      >
        {/* Background Wrapper untuk top section */}
        <Stack
          bgImage={{
            base: "/footer/footer-maxima-mobile-top.png",
            lg: "/footer/footer-maxima-desktop-top.png",
          }}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          height={"50vh"}
          width={"100vw"}
        >
          {/* sponsors and media partners content */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            align={"center"}
            justify={"space-around"}
          >
            {/* sponsors */}
            <Stack>
              <Heading textAlign={"center"} fontWeight={"semibold"}>
                Sponsored By
              </Heading>
              <Image
                src="/footer/sponsor.png"
                width={{ base: "500px", md: "520px", lg: "700px" }}
              />
            </Stack>

            {/* media partners */}
            <Stack>
              <Heading textAlign={"center"} fontWeight={"semibold"}>
                Media Partners
              </Heading>
              <Image
                src="/footer/medpar.png"
                width={{ base: "500px", md: "520px", lg: "700px" }}
              />
            </Stack>
          </Flex>
        </Stack>

        {/* Background Wrapper untuk bottom section */}
        <Stack
          bgImage={{
            base: "/footer/footer-maxima-mobile-bot.png",
            lg: "/footer/footer-maxima-desktop-bot.png",
          }}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          height={"50vh"}
          width={"100vw"}
        >
          {/* maxima logo & contact*/}
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify={"space-between"}
            align={{ base: "start", sm: "center" }}
            paddingX={{ base: 4, lg: 28 }}
          >
            {/* maxima logo */}
            <Stack marginBottom={{ base: 10, lg: 0 }}>
              <Image
                src="/myicons/maxima2024-logo.png"
                width={{ base: "150px", md: "200px", lg: "300px" }}
              />
              <Text>Express Your Uniqueness, Show It To Shine</Text>
              <Flex>
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
            <Flex gap={{ base: 4, lg: 16 }} paddingBottom={8}>
              <Stack>
                <Heading size={{ base: "sm", lg: "md" }}>Pages</Heading>
                <Link as={RouterLink} to={"/home"} color={"black"}>
                  HoME
                </Link>
                <Link as={RouterLink} to={"/state"} color={"black"}>
                  STATE
                </Link>
                <Link as={RouterLink} to={"/malpun"} color={"black"}>
                  MalPun
                </Link>
                <Link as={RouterLink} to={"/faq"} color={"black"}>
                  FAQ
                </Link>
                <Link as={RouterLink} to={"/aboutus"} color={"black"}>
                  About Us
                </Link>
                <Link as={RouterLink} to={"/profile"} color={"black"}>
                  Profile
                </Link>
              </Stack>

              <Stack maxW="270px">
                <Heading size={{ base: "sm", lg: "md" }}>Location</Heading>
                <Text size={{ base: "sm", lg: "md" }} color={"black"}>
                  Universitas Multimedia Nusantara Jl. Scientia Boulevard,
                  Gading Serpong, Tangerang, Banten 15811
                </Text>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
        {/* Footer Copyright */}
      </Stack>
      <Stack
        bg={"#44002B"}
        paddingY={3}
        fontFamily={"Lexend"}
        fontWeight={"regular"}
      >
        <Text color={"white"} textAlign={"center"}>
          © MAXIMA UMN 2024 • Made with Love by Charta
        </Text>
      </Stack>
    </footer>
  );
}

export default Footer;
