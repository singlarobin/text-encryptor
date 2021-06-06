import React from 'react';
import classes from './styles.module.css';

const Button = React.memo(props => {
    const { label, onClick } = props;

    return <div className={classes.buttonContainer}>
        <button onClick={onClick}>{label}</button>
    </div>;
});

export default Button;