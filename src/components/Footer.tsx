import { Flex, Heading, Image, Stack, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      {/* top and bot wrapper */}
      <Stack
        w={"100vw"}
        h={"100vh"}
        gap={0}
        fontFamily={"Lexend"}
        color={"#44002B"}
        // justifyContent={"center"}
        bgImage={{
          base: "/footer/footer-background-mobile.png",
          md: "/footer/footer-background.png",
        }}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPos={"top"}
        align={"center"}
      >
        {/* Background Wrapper untuk top section */}
        <Stack
          bgImage={{
            base: "/footer/footer-maxima-mobile-top.png",
            md: "/footer/footer-maxima-desktop-top.png",
          }}
          // bgSize={"cover"}
          bgPos={"bottom"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          w={"100vw"}
          justify={"center"}
          pt={{ base: 10, md: "10rem", lg: 22 }}
          h={"100vh"}
          // height={{ md: "60.5%", lg: "65%" }}
        >
          {/* sponsors and media partners content */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align={"center"}
            justify={"space-around"}
            paddingX={4}
          >
            {/* sponsors */}
            <Stack>
              <Heading textAlign={"center"} fontWeight={"semibold"}>
                Sponsored By
              </Heading>
              <Image
                src="/footer/sponsor.png"
                // width={{ base: "350px", md: "350px", lg: "700px" }}
                width={{
                  base: "90vw",
                  sm: "80vw",
                  md: "40vw",
                  lg: "45vw",
                  xl: "35vw",
                }}
              />
            </Stack>

            {/* media partners */}
            <Stack>
              <Heading textAlign={"center"} fontWeight={"semibold"}>
                Media Partners
              </Heading>
              <Image
                src="/footer/medpar.png"
                // width={{ base: "350px", md: "350px", lg: "700px" }}
                width={{
                  base: "90vw",
                  sm: "80vw",
                  md: "40vw",
                  lg: "45vw",
                  xl: "35vw",
                }}
              />
            </Stack>
          </Flex>
        </Stack>

        {/* Background Wrapper untuk bottom section */}
        <Stack
          bgImage={{
            base: "/footer/footer-maxima-mobile-bot.png",
            md: "/footer/footer-maxima-desktop-bot.png",
          }}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPos={"top"}
          w={"100vw"}
          h={"100vh"}
          // height={{ base: "100%", md: "62%", lg: "100%" }}
          justify={"center"}
          pt={{ base: 0, md: 14, lg: 20 }}
          p={{ base: 2, md: 0 }}
        >
          {/* maxima logo & contact*/}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify={"space-between"}
            align={{ base: "start", sm: "center" }}
            paddingX={{ base: 4, lg: 28 }}
          >
            {/* maxima logo */}
            <Stack marginBottom={{ base: 4, lg: 0 }}>
              <Image
                src="/myicons/maxima2024-logo.png"
                width={{ base: "150px", md: "200px", lg: "240px", xl: "260px" }}
                marginTop={{ base: 12, md: 0 }}
              />
              <Text>Express Your Uniqueness, Show It To Shine</Text>
              <Flex gap={3}>
                <Link href="https://line.me/ti/p/vuu4204x" isExternal>
                  <Image
                    src="/footer/logo-line.svg"
                    width={{ base: "30px", md: "35px", lg: "40px" }}
                    height="auto"
                  />
                </Link>
                <Link href="https://www.instagram.com/maximaumn/" isExternal>
                  <Image
                    src="/footer/logo-instagram.svg"
                    width={{ base: "30px", md: "35px", lg: "40px" }}
                    height="auto"
                  />
                </Link>
                <Link href="https://www.tiktok.com/@maximaumn" isExternal>
                  <Image
                    src="/footer/logo-tiktok.svg"
                    width={{ base: "30px", md: "35px", lg: "40px" }}
                    height="auto"
                  />
                </Link>
                <Link href="https://www.youtube.com/@MAXIMAUMN" isExternal>
                  <Image
                    src="/footer/logo-youtube.svg"
                    width={{ base: "30px", md: "35px", lg: "40px" }}
                    height="auto"
                  />
                </Link>
              </Flex>
            </Stack>

            {/* maxima contact & page */}
            <Flex gap={{ base: 4, lg: 16 }} paddingBottom={{ base: 0, lg: 8 }}>
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
        // mt={{ base: "2.75rem", lg: 6 }}
        bg={"#44002B"}
        paddingY={{ base: 2, lg: 3 }}
        fontFamily={"Lexend"}
        fontWeight={"regular"}
        justify={"center"}
        align={"center"}
        gap={0}
      >
        <Text
          color={"white"}
          textAlign={"center"}
          fontSize={{ base: "0.75rem", md: "sm" }}
        >
          © MAXIMA UMN 2024 • Made with Love by Charta
        </Text>
      </Stack>
    </footer>
  );
}

export default Footer;
