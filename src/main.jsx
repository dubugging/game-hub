import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import theme from "./theme.js";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
