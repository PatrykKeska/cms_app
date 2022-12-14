/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                'primary-dark': '#1f1f1f',
                primary: '#ffffff',
                highlight: {
                    dark: '#FFFFFF',
                    light: '#1f1f1f',
                },
                secondary: {
                    dark: '#707070',
                    light: '#e6e6e6',
                },
                action: '#3B82F6',
            },
            keyframes:{
                fade:{
                    '0%':{transform: 'scaleX(0)'},
                    '100%':{transform: 'scaleX(1)'},
                }
            },
            animation:{
                fade: 'fade .2s linear forwards'
            },
            transitionProperty:{
                'width': 'width'
            }
        },
    },
    plugins: [],
}
