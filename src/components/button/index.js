import React from 'react';
import './styles.module.css';

const Button = React.memo(props => {
    const { children, style, onClick } = props;

    return <button style={style} onClick={onClick}>{children}</button>;
});

export default Button;

Button.defaultProps = { style:{}, };