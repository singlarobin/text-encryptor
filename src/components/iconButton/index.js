import React, { useCallback } from 'react';
import classes from './styles.module.css';

const IconButton = React.memo(props => {
    const { children, style, onClick } = props;

    const handleClick = useCallback((e) => {
        if (typeof onClick === 'function') onClick(e);
    }, [onClick]);

    return <button className={classes.iconButton} style={style} onClick={e => handleClick(e)}>{children}</button>;
});

export default IconButton;