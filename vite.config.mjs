import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   watch: {
  //     rollupOptions: {
  //       output: {
  //         assetSma: "./src/pages/sma/assets/avatar",
  //       },
  //     },
  //     write: true,
  //   }
  // },
})
