import React, { useCallback } from 'react';
import classes from './styles.module.css';

const IconButton = React.memo(props => {
    const { children, style, onClick } = props;

    const handleClick = useCallback(() => {
        if (typeof onClick === 'function') onClick();
    });

    return <button className={classes.iconButton} style={style} onClick={handleClick}>{children}</button>;
});

export default IconButton;