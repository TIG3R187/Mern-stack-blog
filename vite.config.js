import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Mern-stack-blog/", // Set for GitHub Pages deployment
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200, // Increase warning limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'three';
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('framer-motion')) return 'framer-motion';
            if (id.includes('maath')) return 'maath';
            if (id.includes('@react-three')) return 'react-three';
            return 'vendor';
          }
        },
      },
    },
  },
});
