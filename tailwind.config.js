import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
                script: ['Corinthia', 'cursive'],
                display: ['Montserrat', ...defaultTheme.fontFamily.sans],
                bebas: ['Montserrat', ...defaultTheme.fontFamily.sans],
                poppins: ['Montserrat', ...defaultTheme.fontFamily.sans],
                body: ['Montserrat', ...defaultTheme.fontFamily.sans],
                montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
                barlow: ['Montserrat', ...defaultTheme.fontFamily.sans],
                manrope: ['Manrope', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    blue: '#003B73',
                    'blue-dark': '#002952',
                    'blue-light': '#0060B9',
                    // Accent colors remapped from orange/yellow to the blue palette
                    // so the whole site reads gray + dark blue + light blue.
                    orange: '#0060B9',
                    'orange-dark': '#003B73',
                    yellow: '#3B82F6',
                    gray: '#F5F5F5',
                },
            },
        },
    },

    plugins: [forms],
};
