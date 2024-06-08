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
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);
