import { Stack, Image, IconButton, Icon, Box, Tooltip } from "@chakra-ui/react";
import { MdAdd, MdCheck, MdHourglassBottom } from "react-icons/md";
import { Link } from "react-router-dom";

type SelectState = {
  data?: {
    id: number;
    stateName: string;
    image: string;
    isFirstAttendance: boolean;
    isLastAttendance: boolean;
    setState: (id: number) => void;
  };

  isStateRegistrationActive: boolean;
};

const Boag = ({ data, isStateRegistrationActive }: SelectState) => {
  return (
    <Stack direction={"column"}>
      <Image
        src="/state/boag.png"
        alt="boag"
        w={["16rem", "24rem", "24rem", "24rem", "36rem"]}
      />
      {!data && !isStateRegistrationActive && (
        <Tooltip
          label="Masa registrasi STATE ditutup"
          aria-label="A tooltip"
          bgColor={"button.primary"}
          rounded={"lg"}
          px={"0.8rem"}
          py={"0.5rem"}
          shadow={"lg"}
          mt={"1rem"}
        >
          <IconButton
            isRound={true}
            variant="solid"
            bgColor={"#EA7E2B40"}
            textColor={"white"}
            aria-label="Done"
            fontSize="100px"
            left={["97", "143", "143", "143", "215"]}
            bottom={["55.5", "82", "82", "82", "120"]}
            // size={"lg"}
            w={["2rem", "4rem", "4rem", "4rem", "6rem"]}
            h={["2.5rem", "4rem", "4rem", "4rem", "6rem"]}
            icon={<MdAdd />}
            isDisabled={true}
          />
        </Tooltip>
      )}

      {!data && isStateRegistrationActive && (
        <Link to="/state/selectstate/D01">
          <IconButton
            isRound={true}
            variant="solid"
            bgColor={"#EA7E2B40"}
            textColor={"white"}
            aria-label="Done"
            fontSize="100px"
            left={["97", "143", "143", "143", "215"]}
            bottom={["55.5", "82", "82", "82", "120"]}
            // size={"lg"}
            w={["2rem", "4rem", "4rem", "4rem", "6rem"]}
            h={["2.5rem", "4rem", "4rem", "4rem", "6rem"]}
            icon={<MdAdd />}
          />
        </Link>
      )}

      {data && (
        <>
          <Box position="relative">
            <IconButton
              onClick={() => {
                data.setState(data.id);
              }}
              isRound
              variant="solid"
              bgImage={`${import.meta.env.VITE_CDN_URL}${data.image}`}
              bgPos={"center"}
              bgSize={"contain"}
              // bgColor={"green.400"}
              textColor={"white"}
              aria-label="Done"
              fontSize="100px"
              left={["97", "143", "143", "143", "215"]}
              bottom={["55.5", "82", "82", "82", "120"]}
              // size={"lg"}
              w={["2rem", "4rem", "4rem", "4rem", "6rem"]}
              h={["2.5rem", "4rem", "4rem", "4rem", "6rem"]}
              _after={
                data.isFirstAttendance && data.isLastAttendance
                  ? {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      backgroundColor: "green",
                      opacity: 0.5,
                    }
                  : data.isFirstAttendance && !data.isLastAttendance
                  ? {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      backgroundColor: "orange",
                      opacity: 0.5,
                    }
                  : undefined
              }
            />
            {data.isFirstAttendance && !data.isLastAttendance && (
              <Tooltip
                label={`Kamu telah melakukan absen pertama pada STATE ${data.stateName}`}
                placement="top-end"
                shouldWrapChildren
                bgColor={"orange.400"}
                rounded={"md"}
                textAlign={"center"}
              >
                <Icon
                  as={MdHourglassBottom}
                  color="white"
                  position="absolute"
                  left={["101", "143", "143", "143", "215"]}
                  bottom={["55.5", "82", "82", "82", "128"]}
                  w={["2rem", "4rem", "4rem", "4rem", "6rem"]}
                  h={["2.5rem", "4rem", "4rem", "4rem", "5rem"]}
                  fontSize={["1.5rem", "2rem", "2rem", "2rem", "2.5rem"]}
                  zIndex={999}
                />
              </Tooltip>
            )}
            {data.isFirstAttendance && data.isLastAttendance && (
              <Tooltip
                label={`Kamu telah berhasil mengikuti STATE ${data.stateName}`}
                placement="top-end"
                bgColor={"green.400"}
                shouldWrapChildren
                rounded={"md"}
                textAlign={"center"}
              >
                <Icon
                  as={MdCheck}
                  color="white"
                  position="absolute"
                  left={["101", "143", "143", "143", "215"]}
                  bottom={["55.5", "82", "82", "82", "120"]}
                  w={["2rem", "4rem", "4rem", "4rem", "6rem"]}
                  h={["2.5rem", "4rem", "4rem", "4rem", "6rem"]}
                  fontSize={["1.5rem", "2rem", "2rem", "2rem", "3rem"]}
                  zIndex={999}
                />
              </Tooltip>
            )}
          </Box>
        </>
      )}
    </Stack>
  );
};
export default Boag;
