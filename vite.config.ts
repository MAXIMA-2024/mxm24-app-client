import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import generouted from "@generouted/react-router/plugin";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted(), basicSsl()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
