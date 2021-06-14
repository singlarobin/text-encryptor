import { useEffect, useState } from 'react';
import Button from '../button';
import classes from './styles.module.css';
import DarkModeIcon from '../../assests/darkModeIcon';
import { themes, getTheme, setTheme } from '../../utils/theme';


const Page = props => {
    const [darkMode, setDarkMode] = useState(false);  

    useEffect(() => loadTheme(), []);

    const loadTheme = () => {
        const currTheme = getTheme();
        setDarkMode(currTheme===themes.DARK? true:false);
        setTheme(currTheme);
    };
    const handleThemeChange = () => {
        const currTheme= getTheme();
        setDarkMode(currTheme===themes.DARK? false:true);
        setTheme(currTheme===themes.DARK? themes.LIGHT:themes.DARK);
    };

    return <div className={classes.page} >
        <div className={classes.iconContainer}>
            <Button style={{ backgroundColor:darkMode ? '#0e202a':'#f7f7f7', color:'#868686' }}>
                <DarkModeIcon onClick={handleThemeChange}/>
            </Button>
        </div>
        {props.children}

    </div>;
};

export default Page;