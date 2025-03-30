import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "three/webgpu": path.resolve(__dirname, "./src/utils/empty-module.js"),
      "three/tsl": path.resolve(__dirname, "./src/utils/empty-module.js"),
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
    include: ["three", "@react-three/fiber", "@react-three/drei"],
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress circular dependency warnings from Three.js and React Three Fiber
        if (warning.code === "CIRCULAR_DEPENDENCY") return;
        warn(warning);
      },
    },
  },
  server: {
    open: true,
  },
});
