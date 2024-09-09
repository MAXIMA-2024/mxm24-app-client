import React from "react";
import { Stack, Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer: React.FC = () => {
  return (
    <footer>
      {/* top and bot wrapper */}
      <Stack
        minW="100vw"
        minH="100vh"
        gap={0}
        fontFamily="Lexend"
        color="#44002B"
        bgImage={{
          base: "/footer/footer-background-mobile.png",
          md: "/footer/footer-background.png",
        }}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="top"
        align="center"
      >
        {/* Background Wrapper untuk top section */}
        <Stack
          bgImage={{
            base: "/footer/footer-maxima-mobile-top.png",
            md: "/footer/footer-maxima-desktop-top.png",
          }}
          bgPos="bottom"
          bgRepeat="no-repeat"
          bgSize="cover"
          w="100vw"
          justify="center"
          pt={{ base: 10, md: "10rem", lg: 22 }}
          h="100vh"
        >
          {/* sponsors and media partners content */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-around"
            paddingX={4}
          >
            {/* sponsors */}
            <Stack>
              <Heading textAlign="center" fontWeight="semibold">
                Sponsored By
              </Heading>
              <Image
                src="/footer/sponsor.png"
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
              <Heading textAlign="center" fontWeight="semibold">
                Media Partners
              </Heading>
              <Image
                src="/footer/medpar.png"
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
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPos="top"
          w="100vw"
          h="100vh"
          justify="center"
          pt={{ base: 0, md: 14, lg: 20 }}
          p={{ base: 2, md: 0 }}
        >
          {/* maxima logo & contact */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
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
                <Link
                  href="https://line.me/ti/p/vuu4204x"
                  target="_blank"
                  isExternal
                >
                  <Image
                    src="/footer/logo-line.svg"
                    width={{ base: "30px", md: "35px", lg: "40px" }}
                    height="auto"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/maximaumn/"
                  target="_blank"
                  isExternal
                >
                  <Image
                    src="/footer/logo-instagram.svg"
                    width={{ base: "30px", md: "35px", lg: "40px" }}
                    height="auto"
                  />
                </Link>
                <Link
                  href="https://www.tiktok.com/@maximaumn"
                  target="_blank"
                  isExternal
                >
                  <Image
                    src="/footer/logo-tiktok.svg"
                    width={{ base: "30px", md: "35px", lg: "40px" }}
                    height="auto"
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/@MAXIMAUMN"
                  target="_blank"
                  isExternal
                >
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
                <Link
                  as={RouterLink}
                  to="/home"
                  onClick={() => scrollToTop()}
                  color="black"
                >
                  HoME
                </Link>
                <Link
                  as={RouterLink}
                  to="/state"
                  onClick={() => scrollToTop()}
                  color="black"
                >
                  STATE
                </Link>
                <Link
                  as={RouterLink}
                  to="/malpun"
                  onClick={() => scrollToTop()}
                  color="black"
                >
                  MalPun
                </Link>
                <Link
                  as={RouterLink}
                  to="/faq"
                  onClick={() => scrollToTop()}
                  color="black"
                >
                  FAQ
                </Link>
                <Link
                  as={RouterLink}
                  to="/aboutus"
                  onClick={() => scrollToTop()}
                  color="black"
                >
                  About Us
                </Link>
                <Link
                  as={RouterLink}
                  to="/profile"
                  onClick={() => scrollToTop()}
                  color="black"
                >
                  Profile
                </Link>
              </Stack>

              <Stack maxW="270px">
                <Heading size={{ base: "sm", lg: "md" }}>Location</Heading>
                <Text size={{ base: "sm", lg: "md" }} color="black">
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
        bg="#44002B"
        paddingY={{ base: 2, lg: 3 }}
        fontFamily="Lexend"
        fontWeight="regular"
        justify="center"
        align="center"
        gap={0}
      >
        <Text
          color="white"
          textAlign="center"
          fontSize={{ base: "0.75rem", md: "sm" }}
        >
          © MAXIMA UMN 2024 • Made with Love by Charta
        </Text>
      </Stack>
    </footer>
  );
};

export default Footer;
