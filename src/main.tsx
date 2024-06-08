import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "@generouted/react-router";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);
