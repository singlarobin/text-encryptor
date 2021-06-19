import React from 'react';
import classes from './styles.module.css';

const Input = React.memo( props => {
    const { inputVal, handleInputChange, placeholderValue, rows, style } = props;
    const handleChange = e => handleInputChange(e.target.value);

    return <textarea className={classes.inputContent} style={style} onChange={handleChange} 
        placeholder={placeholderValue} rows={rows} value={inputVal}/>;
});

export default Input;