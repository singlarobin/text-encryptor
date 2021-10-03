import React from 'react';
import classes from './styles.module.css';

const Button = React.memo(props => {
    const { children, style, onClick } = props;

    return <button className={classes.button} style={style} onClick={onClick}>
        {children}
    </button>;
});

export default Button;