import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/Cyberspace-Blog/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 🧠 Only split safe libraries — skip 'three' and 'maath'
            if (id.match(/[\\/]node_modules[\\/]framer-motion([\\/]|$)/)) return 'framer-motion';
            if (id.match(/[\\/]node_modules[\\/]@react-three([\\/]|$)/)) return 'react-three';
            if (id.match(/[\\/]node_modules[\\/]react([\\/]|$)/)) return 'react';
            if (id.match(/[\\/]node_modules[\\/]react-dom([\\/]|$)/)) return 'react-dom';
            return 'vendor';
          }
        },
      },
    },
  },
});
