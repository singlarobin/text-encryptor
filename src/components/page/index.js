import { useEffect, useRef, useState } from 'react';
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
import { throttle } from '../../utils';

const Page = props => {
    const [darkMode, setDarkMode] = useState(false);
    const webViewRef = useRef(null);
    const [webViewDimensions, setWebViewDimensions] = useState(null);

    useEffect(() => {
        loadTheme();
        handlePageResize();
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handlePageResize);
        return () => window.removeEventListener('resize', handlePageResize);
    }, []);

    const handlePageResize = throttle(() => {
        setWebViewDimensions(
            window.innerWidth >= 1024
                ? webViewRef?.current?.getBoundingClientRect()
                : null
        );
    }, 100);

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
            <div ref={webViewRef} className={classes.webView}>
                <div className={classes.leftContainer}>
                    <Header />
                    <Description style={{ flex: '1' }} />
                    <Footer />
                </div>
                <div className={classes.rightContainer}>
                    {props.children}
                </div>
            </div>

            <div className={classes.rectangle} style={webViewDimensions && {
                top: webViewDimensions?.top + (0.2 * webViewDimensions?.height),
                left: webViewDimensions?.right - (0.1 * webViewDimensions?.width),
            }}>
                <Rectangle darkTheme={darkMode} style={{
                    width: 'inherit',
                    height: 'inherit',
                }} />
            </div>
            <div className={classes.circle} style={webViewDimensions && {
                top: webViewDimensions?.top + (0.35 * webViewDimensions?.height),
                left: webViewDimensions?.left - (0.15 * webViewDimensions?.width),
            }}>
                <Circle darkTheme={darkMode} style={{
                    width: 'inherit',
                    height: 'inherit',
                }} />
            </div>
            <div className={classes.triangle} style={webViewDimensions && {
                top: webViewDimensions?.bottom - (0.2 * webViewDimensions?.height),
                left: webViewDimensions?.right - (0.5 * webViewDimensions?.width),
            }}>
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