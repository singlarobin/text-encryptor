import { useEffect, useState } from 'react';
import IconButton from '../iconButton';
import classes from './styles.module.css';
import DarkModeIcon from '../../assets/icons/darkModeIcon';
import LightModeIcon from '../../assets/icons/lightModeIcon';
import { themes, getTheme, setTheme } from '../../utils/theme';
import Header from '../header';
import Description from '../description';
import Footer from '../footer';
import Triangle from '../../assets/shapes/triangle';
import Rectangle from '../../assets/shapes/rectangle';
import Circle from '../../assets/shapes/circle';

const Page = props => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => loadTheme(), []);

    const loadTheme = () => {
        const currTheme = getTheme();
        setDarkMode(currTheme === themes.DARK);
        setTheme(currTheme);
    };
    const handleThemeChange = () => {
        const currTheme = getTheme();
        setDarkMode(currTheme !== themes.DARK);
        setTheme(currTheme === themes.DARK ? themes.LIGHT : themes.DARK);
        if (typeof props.shouldComponentUpdate === 'function') props.shouldComponentUpdate(new Date().getTime());
    };

    return <div className={classes.page}>
        <div className={classes.pageBackground} />
        <div className={classes.pageContent}>
            <IconButton onClick={handleThemeChange}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    zIndex: '4',
                }}>
                {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
            <div className={classes.mobileView}>
                <Header />
                <Description />
                {props.children}
                <Footer />
            </div>
            <div className={classes.webView}>
                <div className={classes.leftContainer}>
                    <Header />
                    <Description style={{ flex: '1' }} />
                    <Footer />
                </div>
                <div className={classes.rightContainer}>
                    {props.children}
                </div>
            </div>

            <div className={classes.rectangle}>
                <Rectangle darkTheme={darkMode} style={{
                    width: 'inherit',
                    height: 'inherit',
                }} />
            </div>

            <div className={classes.circle}>
                <Circle darkTheme={darkMode} style={{
                    width: 'inherit',
                    height: 'inherit',
                }} />
            </div>

            <div className={classes.triangle}>
                <Triangle darkTheme={darkMode} style={{
                    width: 'inherit',
                    height: 'inherit',
                }} />
            </div>

            <div className={classes.leftEllipse} />
            <div className={classes.rightEllipse} />
        </div>
    </div>;
};

export default Page;