// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs-extra';

export default defineConfig({
    base: '/', // Crucial for Firebase Hosting and local serve

    build: {
        outDir: 'dist',
    },

    plugins: [{
        name: 'remove-unoptimized-images',
        closeBundle() {
            // Path to dist/images
            const distImages = resolve(__dirname, 'dist/images');
            if (fs.existsSync(distImages)) {
                fs.removeSync(distImages);
                console.log('🧹 Removed unoptimized images from dist/');
            }
        },
    }, ],
});