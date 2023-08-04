/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'],
    theme: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            sans: ['ui-sans-serif', 'system-ui'],
            serif: ['ui-serif', 'Georgia'],
        },
        screens: {
            sm: { min: '640px' },
            md: { min: '768px' },
            lg: { min: '1000px' },
            xl: { min: '1280px' },
            mobile: { max: '1000px' },
            desk1000: {min:'1000px',max:'1500px'},
            notmobile: {min:'1000px'},
            desktop: { min: '1000px', max: '1600px' },
            pc: { min: '1600px', max: '2000px' },
            myscreen: { min: '2200px', max: '3000px' },
            gap1050: { min: '1000px', max: '1100px' },
        },
        extend: {
            spacing: {
                'h-header': 'var(--h-header)',
            },
            maxWidth: {
                container: '1200px',
            },
            boxShadow: {
                test: '0 0 1px 1px red',
            },
            colors: {
                primary: '#f472b6',
                'primary-dark': '#ec4899',
                'okuro-primary': '#3B82F6',
                'okuro-background': '#EFF7FF',
                'okuro-background-contact': '#F1F7FE',
                'okuro-background-tab': '#FAFBFF',
                'okuro-linear-from1': '#E6F3FF',
                'okuro-linear-from2': '#FBFDFF',
                'okuro-linear-from3': '#1C66DF',
                'okuro-linear-from4': '#49B8EA',
                'okuro-linear-to3': '#184385',
                'okuro-linear-to': '#F0F8FF',
                'okuro-web-text': '#193766',
                'okuro-name-text-user': '#2562C6',
                'okuro-body-color': '#64748B',
                'okuro-EMR': '#3BBEF6',
                'okuro-orange': '#FF5722',
                'okuro-pagination': '#DEFEFF',
                'okuro-color-text': '#193766',
                'okuro-color-text-li': '#697B98',
                'okuro-btn-navigate': '#245EBE',
                'okuro-btn-navigate-opacity': '#CCDCF9',
                'okuro-name':'#48B8E9',
                'okuro-bank':'#3B82F6',
            },
        },
    },
    plugins: [],
});
