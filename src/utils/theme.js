import { isEmptyString } from './index';

export const themes = Object.freeze({
    DARK: 'dark',
    LIGHT: 'light',
});

export const getTheme = () => {
    const theme = !isEmptyString(localStorage.getItem('pricingTheme')) ?
        localStorage.getItem('pricingTheme') : themes.LIGHT;
    return theme;
};

export const setTheme = theme => {
    localStorage.setItem('pricingTheme', theme);
    document.documentElement.setAttribute('theme-mode', theme);
};

export const themed = (lightVal, darkVal) => getTheme() === themes.LIGHT ? lightVal : darkVal;