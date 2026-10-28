import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Se publica en https://albertocalerocastillo.github.io/Rick-y-Morty-APP/
  base: '/Rick-y-Morty-APP/',
})
