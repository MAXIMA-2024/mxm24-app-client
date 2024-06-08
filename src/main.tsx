import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "@generouted/react-router";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "./global.css";
import "@fontsource-variable/lexend";

const theme = extendTheme({
  fonts: {
    Luthier: `'Luthier', sans-serif`,
    Lexend: `'Lexend', sans-serif`,
  },
  colors: {
    text: {
      primary: "#44002B",
      secondary: "#0f0f0f",
      tertiary: "#FFFFFF",
    },
    button: {
      yellow: "#FFBE00",
      primary: "#47002D",
      error: "#D42727",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);
