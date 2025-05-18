import vituum from 'vituum';
import handlebars from '@vituum/vite-plugin-handlebars';
import tailwindcss from '@tailwindcss/vite';

export default {
    plugins: [
        tailwindcss(),
        vituum(),
        handlebars({
            root: './src',
        })
    ]
};
