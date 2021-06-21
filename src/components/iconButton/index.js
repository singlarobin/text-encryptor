import React from 'react';
import classes from './styles.module.css';

const IconButton = React.memo(props => {
    const { children, style, onClick } = props;

    return <button className={classes.iconButton} style={style} onClick={onClick}>{children}</button>;
});

export default IconButton;