import { useEffect, useState } from 'react';
import IconButton from '../iconButton';
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
        <IconButton style={{ 
            display: 'flex', 
            alignItems: 'center', 
            position: 'absolute', 
            top:'16px', 
            right:'16px', 
            padding :'0rem'
        }}>
            <DarkModeIcon onClick={handleThemeChange}/>
        </IconButton>
        {props.children}

    </div>;
};

export default Page;