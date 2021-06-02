import { useCallback, useEffect } from 'react';
import classes from './styles.module.css';

const Input = props => {
    const { inputTextVal, handleInputTextChange } = props;
    const handleChange = useCallback(e => {
        console.log('input');
        handleInputTextChange(e.target.value);
    }, [inputTextVal]);

    useEffect(() => {
        document.getElementById('textArea').value = inputTextVal;
    }, [inputTextVal]);

    return <div className={classes.inputContainer}>
        <textarea id='textArea' onChange={handleChange} placeholder="Enter Text">{inputTextVal}</textarea>
    </div>;
};

export default Input;