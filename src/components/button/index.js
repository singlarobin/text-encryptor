import React from 'react';
import classes from './styles.module.css';

const Button = React.memo(props => {
    const { children, style, onClick } = props;

    // TODO- create neumorphic buttons and input fields
    return <button className={classes.buttonContent} style={style} onClick={onClick}>
        <span>{children}</span>
    </button>;
});

export default Button;