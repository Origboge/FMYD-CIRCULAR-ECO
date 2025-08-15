// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    // IMPORTANT: Adjust 'base' ONLY IF your GitHub Pages URL is like
    // 'https://your-username.github.io/fmyd-circular-eco-registration/'
    // If your URL is 'https://your-username.github.io/', remove the 'base' line.
    base: '/FMYD-CIRCULAR-ECO/', // <-- Replace 'fmyd-circular-eco-registration' with your actual repo name

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                register: resolve(__dirname, 'register.html'), // <--- This tells Vite about register.html
            },
        },
    },
});