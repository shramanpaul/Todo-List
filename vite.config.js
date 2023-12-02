// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginWindicss from 'vite-plugin-windicss';

// ... other configurations ...

export default defineConfig({
  plugins: [
    react(),
    VitePluginWindicss(),
    // ... other plugins ...
  ],
});
