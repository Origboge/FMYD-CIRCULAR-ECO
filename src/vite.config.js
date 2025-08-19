// vite.config.js
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    // THIS IS THE CRUCIAL CHANGE FOR FIREBASE HOSTING AND LOCAL 'npm serve dist'
    base: '/',

    build: {
        outDir: 'dist', // Ensure this is 'dist'
    },
    // ... any other configuration you have
});