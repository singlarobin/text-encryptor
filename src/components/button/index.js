import React from 'react';
import './styles.module.css';

const Button = React.memo(props => {
    const { children, Style, onClick } = props;

    return <button style={Style} onClick={onClick}>{children}</button>;
});

export default Button;

Button.defaultProps = { style:{}, };