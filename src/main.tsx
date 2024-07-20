import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "@generouted/react-router";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AuthProvider from "@/providers/auth-provider";

import "./global.css";
import "@fontsource-variable/lexend";

const theme = extendTheme({
  fonts: {
    Luthier: `'Luthier', sans-serif`,
    Lexend: `'Lexend Variable', sans-serif`,
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
    card: {
      primary: "#FAF4EB",
      secondary: "#FFF3D9",
    },
    status: {
      success: "#36AD2C",
      error: "#F43535",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
