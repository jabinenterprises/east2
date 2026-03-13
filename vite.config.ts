import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

// Prepare plugins array
const plugins = [
    laravel({
        input: ['resources/css/app.css', 'resources/js/app.tsx'],
        ssr: 'resources/js/ssr.tsx',
        refresh: true,
    }),
    react({
        babel: {
            plugins: ['babel-plugin-react-compiler'],
        },
    }),
    tailwindcss(),
];

// Only include Wayfinder when not building on Vercel
if (!process.env.VERCEL) {
    plugins.push(
        wayfinder({
            formVariants: true,
        }),
    );
}

export default defineConfig({
    plugins,
    esbuild: {
        jsx: 'automatic',
    },
    build: {
        outDir: 'dist',
    },
});
