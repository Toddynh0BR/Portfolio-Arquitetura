"use strict";
const win = window;

win.tailwind = win.tailwind || { config: {} };
win.tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-primary': '#3e1b64',
                'brand-dark': '#3e1b64',
            },
            fontFamily: {
                sans: ['Arial', 'sans-serif'],
            },
            animation: {
                'subir-suave': 'subirSuave 0.9s ease-out forwards',
            },
            keyframes: {
                subirSuave: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    }
};
