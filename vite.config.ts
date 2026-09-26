import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/growell-therapy-collective/' : '/',
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});
