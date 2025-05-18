import vituum from 'vituum';
import handlebars from '@vituum/vite-plugin-handlebars';
import tailwindcss from '@tailwindcss/vite';

export default {
    base: '/lite-stack',
    plugins: [
        tailwindcss(),
        vituum(),
        handlebars({
            root: './src',
        })
    ],
    server: {
        port: 5174,
        host: true,
        open: true,
    }
};
