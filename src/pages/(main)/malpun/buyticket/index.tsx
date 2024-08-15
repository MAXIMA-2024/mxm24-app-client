import ModalAlfagiftExternal from "@/components/ModalAlfagiftExternal";
import ModalChatime from "@/components/ModalChatime";
import useApi, { ResponseModel, useToastErrorHandler } from "@/hooks/useApi";
import {
  Heading,
  Stack,
  Text,
  Button,
  Input,
  useToast,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { Controller, useForm } from "react-hook-form";
import { Turnstile } from "@marsidev/react-turnstile";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type SnapSuccess = {
  status_code: string;
  status_message: string;
  transaction_id: string;
  order_id: string;
  gross_amount: string;
  payment_type: string;
  transaction_time: string;
  transaction_status: string;
  fraud_status: string;
  payment_code: string;
  pdf_url: string;
  finish_redirect_url: string;
};

type SnapError = {
  status_code: string;
  status_message: string[];
};
type Snap = {
  pay: (
    token: string,
    {
      onSuccess,
      onPending,
      onError,
      onClose,
    }: {
      onSuccess?: (result: SnapSuccess) => void;
      onPending?: (result: SnapSuccess) => void;
      onError?: (result: SnapError) => void;
      onClose?: () => void;
    }
  ) => void;
};

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: Record<string, any>;
    snap: Snap;
  }
}

type ExternalResponse = {
  account: {
    id: number;
    code: string;
    fullName: string;
    email: string;
    transactionId: string | null;
    validatedAt: string | null;
    attendance: boolean;
    attendanceTime: string | null;
    alfagiftId: string | null;
    isChatimeBundle: boolean;
    createdAt: string;
    updatedAt: string;
  };
  midtrans: {
    token: string;
    redirect_url: string;
  };
};

type ExternalCallbackResponse = {
  id: number;
  code: string;
  fullName: string;
  email: string;
  transactionId: string | null;
  validatedAt: string | null;
  attendance: boolean;
  attendanceTime: string | null;
  alfagiftId: string | null;
  isChatimeBundle: boolean;
  createdAt: string;
  updatedAt: string;
};

type CheckChatime = {
  isChatTimeEligible: boolean;
};

const externalBuyFormSchema = z.object({
  fullName: z.string({ required_error: "Nama lengkap harus diisi" }),
  email: z.string({ required_error: "Email harus diisi" }).email({
    message: "Email tidak valid",
  }),
  turnstileToken: z.string({ required_error: "Captcha harus diselesaikan" }),
  alfagiftId: z.string().optional(),
  isChatimeBundle: z.boolean().default(false),
});

export type ExternalBuyForm = z.infer<typeof externalBuyFormSchema>;

const BuyTicket = () => {
  const { data } = useSWR<Toggle[]>("/toggle");
  const { data: chatimeData } = useSWR<CheckChatime>(
    "/malpun/external/checkChatime"
  );

  const nav = useNavigate();
  const toast = useToast();
  const api = useApi();
  const errorHandler = useToastErrorHandler();
  const ref = useRef<HTMLFormElement | null>(null);

  const {
    handleSubmit,
    setValue,
    control,
    trigger,
    register,
    formState: { errors },
  } = useForm<ExternalBuyForm>({
    resolver: zodResolver(externalBuyFormSchema),
  });

  const [step, setStep] = useState(1);

  useEffect(() => {
    if (data) {
      const check = data.find((toggle) => toggle.name === "malpun-external");
      if (!check || !check.toggle) {
        toast({
          title: "Access denied!",
          description: "Anda belum bisa membeli tiket Malam Puncak saat ini.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        nav("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      import.meta.env.VITE_PUBLIC_MIDTRANS_INTERFACE_URL ??
      "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute(
      "data-client-key",
      import.meta.env.VITE_PUBLIC_MIDTRANS_KEY ?? "tioCintaDylan"
    );
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Stack
        as={"form"}
        ref={ref}
        onSubmit={handleSubmit((data) => {
          api
            .post<ResponseModel<ExternalResponse>>("/malpun/external", data)
            .then((res) => {
              window.snap.pay(res.data.data.midtrans.token, {
                onError: () => {
                  toast({
                    title: "Error",
                    description:
                      "Gagal melakukan pembayaran, harap coba kembali atau hubungi @maximaumn",
                    status: "error",
                    isClosable: true,
                  });
                },
                onPending: () => {
                  toast({
                    title: "Pending",
                    description:
                      "Pembayaran sedang diproses, harap tunggu beberapa saat dan cek email secara berkala",
                    status: "info",
                    isClosable: true,
                  });
                  toast({
                    title: "Info",
                    description:
                      "Periksa email kamu secara berkala, email akan dikirimkan setelah pembayaran berhasil",
                    status: "info",
                    duration: 5000,
                    isClosable: true,
                  });
                },
                onSuccess: (result) => {
                  api
                    .post<ResponseModel<ExternalCallbackResponse>>(
                      "/malpun/external/callback",
                      result
                    )
                    .then((res) => {
                      toast({
                        title: "Pembayaran Berhasil!",
                        description: "Kamu berhasil membeli tiket Malam Puncak",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                      });
                      toast({
                        title: "Info",
                        description:
                          "Tiket dan bukti pembayaran sudah terkirim",
                        status: "info",
                        duration: 5000,
                        isClosable: true,
                      });

                      nav(`/malpun/viewticket?order_id=${res.data.data.code}`);
                    });
                },
              });
            })
            .catch(errorHandler);
        })}
        align={"center"}
        color={"text.primary"}
        fontWeight={"900"}
        gap={{ base: 0, lg: 2 }}
        bgImage={{
          base: "/bg/scroll-claim-ticket-mobile.png",
          lg: "/bg/scroll-claim-ticket-desktop.png",
        }}
        bgSize={{
          base: "contain",
          md: "contain",
          lg: "contain",
          xl: "contain",
        }}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        w={"100%"}
        p={{ base: "8rem", sm: "10rem", md: "7rem", lg: "6rem" }}
        px={{ base: "2rem", md: "2rem", lg: "4rem" }}
        mt={{ md: "5rem", lg: "7rem" }}
        my={{ md: "1rem" }}
      >
        {step === 1 && (
          <>
            <Heading>Ceritanya Poster</Heading>
            <Stack direction={"row"}>
              <Link to={"/"}>
                <Button
                  bgColor={"button.primary"}
                  w={{ base: "6rem", md: "8rem", lg: "8rem" }}
                  variant={"ghost"}
                  transition={"0.3s"}
                  color={"text.tertiary"}
                  rounded={"xl"}
                  _hover={{ bgColor: "#3A0025" }}
                >
                  <Text
                    fontFamily={"Lexend"}
                    fontWeight={"400"}
                    fontSize={{ base: "small", md: "medium", lg: "large" }}
                  >
                    Batal
                  </Text>
                </Button>
              </Link>
              <Button
                onClick={() => setStep(2)}
                bgColor={"button.primary"}
                w={{ base: "6rem", md: "8rem", lg: "8rem" }}
                variant={"ghost"}
                transition={"0.3s"}
                color={"text.tertiary"}
                rounded={"xl"}
                _hover={{ bgColor: "#3A0025" }}
              >
                <Text
                  fontFamily={"Lexend"}
                  fontWeight={"400"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                >
                  Lanjut
                </Text>
              </Button>
            </Stack>
          </>
        )}
        {step === 2 && (
          <Stack
            justifyContent={"center"}
            // SIZE FORM
            maxW={{ base: "75%", md: "40%", lg: "40%", xl: "30%" }}
          >
            {/* JUDUL */}
            <Stack alignItems={"center"} paddingBottom={"3rem"}>
              <Stack color={"text.secondary"}>
                <Heading
                  fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2.5rem" }}
                  textAlign={"center"}
                  fontFamily={"Luthier"}
                >
                  Detail Pembeli
                </Heading>
              </Stack>
            </Stack>

            {/* START FORM */}
            <Stack>
              <FormControl isInvalid={!!errors.fullName}>
                <Text fontFamily={"Luthier"} color={"text.primary"}>
                  Nama Lengkap:
                </Text>
                <Input
                  {...register("fullName")}
                  type="text"
                  bgColor={"white"}
                  borderColor={"text.primary"}
                  borderWidth={"initial"}
                  borderRadius={"0.75rem"}
                />
                <FormErrorMessage>
                  {errors.fullName && errors.fullName.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <Stack>
              <FormControl isInvalid={!!errors.email}>
                <Text fontFamily={"Luthier"} color={"text.primary"}>
                  Email:
                </Text>
                <Input
                  {...register("email")}
                  type="email"
                  bgColor={"white"}
                  borderColor={"text.primary"}
                  borderWidth={"initial"}
                  borderRadius={"0.75rem"}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>

                <Text
                  fontFamily={"Luthier"}
                  color={"text.primary"}
                  fontSize={"0.75rem"}
                >
                  *Email digunakan untuk mengirimkan tiket dan bukti pembayaran.
                </Text>
              </FormControl>
            </Stack>
            <Stack mt={"0.5rem"}>
              <FormControl isInvalid={!!errors.turnstileToken}>
                <Controller
                  control={control}
                  name="turnstileToken"
                  render={({ field }) => (
                    <>
                      <Stack w={"full"} align={"center"}>
                        <Turnstile
                          siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                          onSuccess={field.onChange}
                          options={{
                            size: "auto",
                            theme: "auto",
                          }}
                        />
                      </Stack>
                    </>
                  )}
                />
                <FormErrorMessage>
                  {errors.turnstileToken && errors.turnstileToken.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            {/* END FORM */}

            {/* BUTTON KEMBALI DAN KIRIM */}

            <Stack
              paddingTop={"3rem"}
              direction={{ base: "column", lg: "row" }}
              alignItems={{ base: "center", lg: "flex-end" }}
              justifyContent={"space-between"}
            >
              <Button
                bgColor={"button.primary"}
                w={{ base: "6rem", md: "8rem", lg: "8rem" }}
                variant={"ghost"}
                transition={"0.3s"}
                color={"text.tertiary"}
                rounded={"xl"}
                _hover={{ bgColor: "#3A0025" }}
                onClick={() => setStep(1)}
              >
                <Text
                  fontFamily={"Lexend"}
                  fontWeight={"400"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                >
                  Kembali
                </Text>
              </Button>
              <Button
                bgColor={"button.primary"}
                w={{ base: "6rem", md: "8rem", lg: "8rem" }}
                variant={"ghost"}
                transition={"0.3s"}
                color={"text.tertiary"}
                rounded={"xl"}
                _hover={{ bgColor: "#3A0025" }}
                onClick={async () => {
                  const isValid = await trigger();
                  if (isValid) {
                    if (chatimeData && chatimeData.isChatTimeEligible) {
                      return setStep(3);
                    }
                    setStep(4);
                  }
                }}
              >
                <Text
                  fontFamily={"Lexend"}
                  fontWeight={"400"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                >
                  Kirim
                </Text>
              </Button>
            </Stack>
          </Stack>
        )}
      </Stack>
      <ModalChatime
        isOpen={step === 3}
        onClose={() => setStep(4)}
        closeModal={() => setStep(2)}
        setChatimeBundling={(val) => {
          setValue("isChatimeBundle", val);
        }}
      />
      <ModalAlfagiftExternal
        isOpen={step === 4}
        onClose={() => setStep(2)}
        callback={(alfagiftId) => {
          setValue("alfagiftId", alfagiftId);
          ref.current?.requestSubmit();
        }}
      />
    </>
  );
};

export default BuyTicket;
