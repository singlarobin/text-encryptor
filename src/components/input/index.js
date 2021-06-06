import React from 'react';
import classes from './styles.module.css';

const Input = React.memo( props => {
    const { inputTextVal, handleInputTextChange } = props;
    const handleChange = e => handleInputTextChange(e.target.value);

    return <div className={classes.inputContainer}>
        <textarea id='textArea' onChange={handleChange} placeholder="Enter Text" value={inputTextVal}/>
    </div>;
});

export default Input;