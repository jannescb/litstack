module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            black: '#212227',
            white: 'white',
            transparent: 'transparent',
            current: 'currentColor',
            blue: {
                light: '#83C2FF',
                mid: '#4951F2',
                'mid-hover': '#252FEF',
                dark: '#090E23',
            },
            green: {
                light: '#8AFFBC',
                mid: '#40FFA4',
                dark: '#358760',
            },
            gray: {
                light: '#F5F8FB',
                'light-hover': '#E5EAEF',
                mid: '#CFD9E2',
                dark: '#6C8199',
                'dark-hover': '#2B353F',
            },
            red: {
                light: '#FFE8ED',
                mid: '#F67693',
                dark: '#90223B',
            },
        },
        fontSize: {
            sm: ['10px', '15px'],
            base: ['14px', '23px'],
            lg: ['16px', '22px'],
            xl: ['30px', '37px'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
