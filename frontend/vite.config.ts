import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_PUBLIC_MODE === "development" ? "/" : "./",
  build: {
    emptyOutDir: true,
    outDir: "../app-front"
  },
  plugins: [react()],
})
