import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// vite.config.js
export default defineConfig({
  base: '/Danie-Niebuhr-Virtual-Portifolio/',
  plugins: [react()],
});
