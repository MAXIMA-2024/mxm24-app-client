import useAuth from "@/hooks/useAuth";
import {
  Stack,
  Image,
  Text,
  Input,
  Button,
  Heading,
  Show,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Link,
  useToast,
} from "@chakra-ui/react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import useApi, { ResponseModel, useToastErrorHandler } from "@/hooks/useApi";

import QRCode from "react-qr-code";

const mahasiswaSchema = z.object({
  name: z
    .string({ required_error: "Name cannot be empty" })
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters"),
  nim: z
    .string({ required_error: "NIM cannot be empty" })
    .length(11, "NIM must be 11 characters")
    .startsWith("00000", { message: "NIM must start with 00000/0" }),
  email: z
    .string({
      required_error: "Email cannot be empty",
    })
    .email("Email must be a valid email address")
    .endsWith(
      "@student.umn.ac.id",
      "Email must be a valid UMN student email address"
    ),
  angkatan: z
    .number({ required_error: "Angkatan cannot be empty" })
    .min(2024, "Only students from 2024 are allowed")
    .max(2024, "Only students from 2024 are allowed"),
  prodi: z
    .string({
      required_error: "Prodi cannot be empty",
    })
    .min(3, "Prodi must be at least 3 characters")
    .max(100, "Prodi must be at most 100 characters"),

  // personal
  whatsapp: z
    .string({ required_error: "WhatsApp number cannot be empty" })
    .regex(/^(\+62|62|0)8[1-9][0-9]{6,9}$/, "Invalid WhatsApp number"),
  lineId: z.string({ required_error: "Line ID cannot be empty" }),
});

type Mahasiswa = z.infer<typeof mahasiswaSchema>;

const Profile = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Mahasiswa>({
    resolver: zodResolver(mahasiswaSchema),
  });

  useEffect(() => {
    reset(auth.user?.data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.user]);

  const api = useApi();
  const errorHandler = useToastErrorHandler();
  const toast = useToast();

  return (
    <Stack
      bgImage={{
        base: "/bg/onboarding-mobile.png",
        md: "/bg/onboarding-desktop.png",
      }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      bgColor={"#FAF4E8"}
      minW={"100vw"}
      minH={"100vh"}
      justify={"center"}
      align={"center"}
      p={"1rem"}
      pt={"6rem"}
      pos={"relative"}
    >
      <Stack
        zIndex={2}
        align={"center"}
        justify={"center"}
        gap={0}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"90%"}
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

            <Show below={"md"}>
              <Heading
                flex="1"
                textAlign="center"
                fontFamily={"Luthier"}
                fontWeight={"Bold"}
                color={"white"}
                fontSize={{ base: "xl", lg: "3xl" }}
              >
                Hai,
                <Heading
                  fontFamily={"Luthier"}
                  fontWeight={"Bold"}
                  fontSize={{ base: "xl", lg: "3xl" }}
                >
                  {auth.user?.data.name}
                </Heading>
              </Heading>
            </Show>

            <Show above={"lg"}>
              <Heading
                flex="1"
                textAlign="center"
                fontFamily={"Luthier"}
                fontWeight={"Bold"}
                color={"white"}
                fontSize={{ base: "xl", lg: "3xl" }}
              >
                Hai, {auth.user?.data.name}
              </Heading>
            </Show>
          </Stack>
          {/* END NAMA LENGKAP */}

          {/* START INPUT */}
          <Stack
            as={"form"}
            onSubmit={handleSubmit((data) => {
              api
                .put<ResponseModel>("/auth/profile", {
                  lineId: data.lineId,
                  whatsapp: data.whatsapp,
                })
                .then((res) => {
                  toast({
                    title: "Success",
                    description:
                      res.data.message || "Profile updated successfully",
                    status: "success",
                    isClosable: true,
                  });
                })
                .catch(errorHandler);
            })}
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
              <Stack
                direction={{ base: "column", lg: "row" }}
                gap={{
                  base: "2rem",
                  lg: "5rem",
                }}
              >
                <Stack w={{ base: "100%", lg: "60%" }} gap={"2rem"}>
                  {/* START Left input */}
                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel fontFamily={"Luthier"} color={"white"}>
                      Student Email*:
                    </FormLabel>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="nama@student.umn.ac.id"
                      bgColor={"white"}
                      disabled
                    />
                    <FormErrorMessage>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel fontFamily={"Luthier"} color={"white"}>
                      Program Studi*:
                    </FormLabel>
                    <Input
                      {...register("prodi")}
                      type="text"
                      bgColor={"white"}
                      disabled
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontFamily={"Luthier"} color={"white"}>
                      Angkatan*:
                    </FormLabel>
                    <Input
                      {...register("angkatan")}
                      type="number"
                      bgColor={"white"}
                      disabled
                    />
                  </FormControl>
                  {/* END Left input */}

                  {/* <Stack>
                <Button bgColor={"#FFF3D9"} color={"#B20034"} w={"30%"}>
                  Save
                </Button>
              </Stack> */}
                </Stack>
                <Stack w={{ base: "100%", lg: "40%" }} gap={"2rem"}>
                  {/* START Right input */}
                  <FormControl>
                    <FormLabel fontFamily={"Luthier"} color={"white"}>
                      NIM*:
                    </FormLabel>
                    <Input
                      {...register("nim")}
                      type="text"
                      bgColor={"white"}
                      disabled
                    />
                  </FormControl>
                  <FormControl isInvalid={!!errors.whatsapp}>
                    <FormLabel fontFamily={"Luthier"} color={"white"}>
                      WhatsApp:
                    </FormLabel>
                    <Input
                      {...register("whatsapp")}
                      type="tel"
                      bgColor={"white"}
                    />
                    <FormErrorMessage>
                      {errors.whatsapp && errors.whatsapp.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.lineId}>
                    <FormLabel fontFamily={"Luthier"} color={"white"}>
                      ID Line:
                    </FormLabel>
                    <Input
                      {...register("lineId")}
                      type="text"
                      bgColor={"white"}
                    />
                    <FormErrorMessage>
                      {errors.lineId && errors.lineId.message}
                    </FormErrorMessage>
                  </FormControl>
                  {/* END Right input */}
                </Stack>
              </Stack>
              {/* START Save Button */}
              <Stack
                justify={"center"}
                align={{ base: "center", lg: "start" }}
                direction={{
                  base: "column",
                  lg: "row",
                }}
                gap={"2rem"}
              >
                <Text color={"white"} fontSize={"sm"} fontFamily={"Lexend"}>
                  *Jika ingin merubah data diri lainnya, harap hubungi panitia
                  melalui Instagram{" "}
                  <Link
                    href="https://instagram.com/maximaumn"
                    target="_blank"
                    fontWeight={"bold"}
                    textDecor={"underline"}
                  >
                    @maximaumn
                  </Link>
                </Text>
                <Button
                  type="submit"
                  bgColor={"#FFF3D9"}
                  color={"#B20034"}
                  w={"30%"}
                >
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
            direction={"column"}
            alignItems={"center"}
            // justify={"center"}
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
              // textAlign="start"
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
            p={"2rem"}
          >
            {/* <Image
              src="/icons/qr-dummy.png"
              maxW={"57.5%"}
              paddingY={"2.5rem"}
            /> */}

            <Stack p={"1rem"} rounded={"lg"} bgColor={"white"}>
              <QRCode
                value={
                  auth.user?.role === "mahasiswa"
                    ? auth.user.data.token
                    : "dylan"
                }
                size={256}
                fgColor="#350025"
              />
            </Stack>
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
