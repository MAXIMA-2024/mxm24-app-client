import {
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Link,
  Select,
  useToast,
  Spinner,
} from "@chakra-ui/react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "@/router";
import useApi, { ResponseModel, useToastErrorHandler } from "@/hooks/useApi";
import useSWR from "swr";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const prodiList = [
  "Akuntansi",
  "Arsitektur",
  "DKV",
  "Film & Animasi",
  "Informatika",
  "Jurnalistik",
  "Komunikasi Strategis",
  "Manajemen",
  "Perhotelan",
  "Sistem Informasi",
  "Teknik Komputer",
  "Teknik Elektro",
  "Teknik Fisika",
];

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
    .regex(/^(\+62|62|0)8[1-9][0-9]{6,10}$/, "Invalid WhatsApp number"),
  lineId: z
    .string({ required_error: "Line ID cannot be empty" })
    .min(1, { message: "Line ID cannot be empty" }),
});

type Mahasiswa = z.infer<typeof mahasiswaSchema>;

type PreOnboarding = {
  id: number;
  nim: string;
  name: string;
  prodi: string;
  angkatan: number;
  email: string;
};

const Onboarding = () => {
  const { data } = useSWR<Toggle[]>("/toggle");
  const { data: preOnboarding, isLoading } = useSWR<PreOnboarding>(
    "/auth/preOnboarding"
  );

  const auth = useAuth();
  const nav = useNavigate();
  const toast = useToast();

  const api = useApi();
  const errorHandler = useToastErrorHandler();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Mahasiswa>({
    resolver: zodResolver(mahasiswaSchema),
  });

  // pre-onboarding effect
  useEffect(() => {
    if (!isLoading && !preOnboarding) {
      auth.logout();
      // return nav("/");
    }

    if (preOnboarding) {
      reset({
        name: preOnboarding.name,
        nim: preOnboarding.nim,
        prodi: preOnboarding.prodi,
        angkatan: preOnboarding.angkatan,
        email: preOnboarding.email,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preOnboarding, isLoading]);

  useEffect(() => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "registration");
      if (!check || !check.toggle) {
        toast({
          title: "Access denied!",
          description: "Registrasi sudah ditutup.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        // maintenance toast
        // toast({
        //   title: "Maintenance",
        //   description:
        //     "Fitur registrasi sedang dalam perbaikan, mohon tunggu ya, MAXIMERS!",
        //   status: "info",
        //   duration: 5000,
        //   isClosable: true,
        // });
        nav("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (auth.status === "unauthenticated") {
      // toast({
      //   title: "Error",
      //   description: "You need to login first",
      //   status: "error",
      //   isClosable: true,
      // });
      nav("/");
      return;
    }

    if (auth.status === "authenticated" && auth.user?.role !== "unknown") {
      toast({
        title: "Error",
        description: "You already have an account",
        status: "error",
        isClosable: true,
      });
      nav("/");
      return;
    }

    if (auth.status === "authenticated" && auth.user?.role === "unknown") {
      reset({
        email: auth.user.data.email,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <Stack
      bgColor={"card.secondary"}
      rounded={"xl"}
      px={["2rem", "4rem", "8rem", "6rem", "10rem"]}
      py={{ base: "1rem", lg: "3rem" }}
      pb={{ base: "2rem", lg: "3rem" }}
      w={["90%", "90%", "70%", "70%", "70%"]}
      align={"center"}
    >
      <Text
        justifyContent={"center"}
        fontFamily={"Luthier"}
        color={"text.primary"}
        fontWeight={"bold"}
        fontSize={["3xl", "4xl", "5xl", "6xl", "6xl"]}
      >
        Register
      </Text>
      {preOnboarding ? (
        <Stack
          as={"form"}
          w={"100%"}
          align={"center"}
          onSubmit={handleSubmit((data) => {
            api
              .post<ResponseModel>("/auth/onboarding", {
                data,
                role: "mahasiswa",
              })
              .then(() => {
                // toast({
                //   title: "Success",
                //   description: "Successfully registered, please login again",
                //   status: "success",
                //   isClosable: true,
                // });

                // auth.logout();
                nav("/");
                window.location.reload();
              })
              .catch(errorHandler);
          })}
        >
          <FormControl isInvalid={!!errors.name}>
            <FormLabel
              fontFamily={"Luthier"}
              color={"text.primary"}
              fontWeight={"bold"}
              fontSize={["sm", "md", "lg", "xl", "xl"]}
            >
              Nama Lengkap
            </FormLabel>
            <Input
              bgColor={"white"}
              rounded={"xl"}
              size={["sm", "sm", "md", "md", "md"]}
              {...register("name")}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <Stack
            direction={["column", "column", "column", "row", "row"]}
            w={"100%"}
            justify={"space-between"}
          >
            <Stack w={["100%", "100%", "100%", "40%", "40%"]}>
              <FormControl isInvalid={!!errors.nim}>
                <FormLabel
                  fontFamily={"Luthier"}
                  color={"text.primary"}
                  fontWeight={"bold"}
                  fontSize={["sm", "md", "lg", "xl", "xl"]}
                >
                  NIM
                </FormLabel>
                <Input
                  bgColor={"white"}
                  rounded={"xl"}
                  size={["sm", "sm", "md", "md", "md"]}
                  type="number"
                  {...register("nim")}
                />
                <FormErrorMessage>
                  {errors.nim && errors.nim.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.prodi}>
                <FormLabel
                  fontFamily={"Luthier"}
                  color={"text.primary"}
                  fontWeight={"bold"}
                  fontSize={["sm", "md", "lg", "xl", "xl"]}
                >
                  Program Studi
                </FormLabel>
                <Select
                  bgColor={"white"}
                  rounded={"xl"}
                  size={["sm", "sm", "md", "md", "md"]}
                  {...register("prodi")}
                >
                  {prodiList.map((prodi) => (
                    <option key={prodi} value={prodi}>
                      {prodi}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.prodi && errors.prodi.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.whatsapp}>
                <FormLabel
                  fontFamily={"Luthier"}
                  color={"text.primary"}
                  fontWeight={"bold"}
                  fontSize={["sm", "md", "lg", "xl", "xl"]}
                >
                  WhatsApp
                </FormLabel>
                <Input
                  bgColor={"white"}
                  rounded={"xl"}
                  size={["sm", "sm", "md", "md", "md"]}
                  type="tel"
                  {...register("whatsapp")}
                />
                <FormErrorMessage>
                  {errors.whatsapp && errors.whatsapp.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <Stack w={["100%", "100%", "100%", "40%", "40%"]}>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel
                  fontFamily={"Luthier"}
                  color={"text.primary"}
                  fontWeight={"bold"}
                  fontSize={["sm", "md", "lg", "xl", "xl"]}
                >
                  Email Student
                </FormLabel>
                <Input
                  bgColor={"white"}
                  rounded={"xl"}
                  size={["sm", "sm", "md", "md", "md"]}
                  {...register("email")}
                  isDisabled
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.angkatan}>
                <FormLabel
                  fontFamily={"Luthier"}
                  color={"text.primary"}
                  fontWeight={"bold"}
                  fontSize={["sm", "md", "lg", "xl", "xl"]}
                >
                  Angkatan
                </FormLabel>
                <Select
                  bgColor={"white"}
                  rounded={"xl"}
                  size={["sm", "sm", "md", "md", "md"]}
                  {...register("angkatan", {
                    valueAsNumber: true,
                  })}
                >
                  <option value="2024">2024</option>
                </Select>
                <FormErrorMessage>
                  {errors.angkatan && errors.angkatan.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.lineId}>
                <FormLabel
                  fontFamily={"Luthier"}
                  color={"text.primary"}
                  fontWeight={"bold"}
                  fontSize={["sm", "md", "lg", "xl", "xl"]}
                >
                  ID Line
                </FormLabel>
                <Input
                  bgColor={"white"}
                  rounded={"xl"}
                  size={["sm", "sm", "md", "md", "md"]}
                  {...register("lineId")}
                />
                <FormErrorMessage>
                  {errors.lineId && errors.lineId.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
          </Stack>
          <Text
            fontFamily={"Luthier"}
            color={"text.primary"}
            fontWeight={"bold"}
            my={"0.25rem"}
          >
            Wrong account?{" "}
            <Link
              onClick={auth.logout}
              fontFamily={"Luthier"}
              textDecor={"underline"}
              color={"#FFBE00"}
              fontWeight={"bold"}
            >
              Log Out
            </Link>
          </Text>
          <Button
            py={"1.5rem"}
            bgColor={"text.primary"}
            textColor={"white"}
            fontSize={"xl"}
            w={["8rem", "10rem", "16rem", "16rem", "16rem"]}
            rounded={"2xl"}
            fontFamily={"Lexend"}
            fontWeight={"400"}
            type="submit"
          >
            Continue
          </Button>
        </Stack>
      ) : (
        <Stack py={"4rem"} align={"center"} justify={"center"}>
          <Text
            fontFamily={"Luthier"}
            color={"text.primary"}
            fontWeight={"bold"}
            fontSize={["sm", "md", "lg", "xl", "xl"]}
          >
            Loading...
          </Text>

          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="text.primary"
            size="xl"
          />
        </Stack>
      )}
    </Stack>
  );
};

export default Onboarding;
