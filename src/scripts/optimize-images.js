// Optimize Images Script with WebP output
import fs from "fs-extra";
import path from "path";
import fg from "fast-glob";
import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";
import imageminSvgo from "imagemin-svgo";

const inputDir = path.resolve("public/images");
const outputDir = path.resolve("public/images-optimized");

async function run() {
    console.log(`📂 Scanning for images in ${inputDir}`);
    const files = await fg(["**/*.{jpg,jpeg,png,svg}"], {
        cwd: inputDir,
        absolute: true,
    });

    console.log(`Found ${files.length} images. Optimizing...`);

    await fs.ensureDir(outputDir);

    for (const file of files) {
        try {
            const buffer = await fs.readFile(file);

            // Optimize original (JPG, PNG, SVG)
            const optimized = await imagemin.buffer(buffer, {
                plugins: [
                    imageminMozjpeg({ quality: 75 }),
                    imageminPngquant({
                        quality: [0.5, 0.7], // stronger compression
                        speed: 1,
                        strip: true,
                        dithering: 0.5,
                    }),
                    imageminSvgo(),
                ],
            });

            const relPath = path.relative(inputDir, file);
            const destPath = path.join(outputDir, relPath);
            await fs.ensureDir(path.dirname(destPath));
            await fs.writeFile(destPath, optimized);
            console.log(`✅ Optimized: ${relPath}`);

            // Also create a WebP copy
            if (/\.(jpe?g|png)$/i.test(file)) {
                const webpBuffer = await imagemin.buffer(buffer, {
                    plugins: [
                        imageminWebp({
                            quality: 75,
                            alphaQuality: 80,
                        }),
                    ],
                });

                const webpPath = destPath.replace(/\.(jpe?g|png)$/i, ".webp");
                await fs.writeFile(webpPath, webpBuffer);
                console.log(`🌐 WebP created: ${relPath.replace(/\.(jpe?g|png)$/i, ".webp")}`);
            }
        } catch (err) {
            console.error(`❌ Failed to optimize ${file}:`, err.message);
        }
    }

    console.log("✨ Image optimization complete!");
    console.log(`📂 Optimized images saved in: ${outputDir}`);
}

run();