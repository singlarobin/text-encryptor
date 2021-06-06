import React from 'react';
import './styles.module.css';

const Input = React.memo( props => {
    const { inputTextVal, handleInputTextChange, placeholderValue, style } = props;
    const handleChange = e => handleInputTextChange(e.target.value);

    return <textarea style={style} onChange={handleChange} placeholder={placeholderValue} value={inputTextVal}/>;
});

export default Input;