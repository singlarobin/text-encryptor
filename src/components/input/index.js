import { useCallback } from 'react';
import classes from './styles.module.css';

const Input = props => {
    const { inputTextVal, handleInputTextChange } = props;
    const handleChange = useCallback(e => {
        handleInputTextChange(e.target.value);
    }, [inputTextVal]);

    return <div className={classes.inputContainer}>
        <textarea id='textArea' onChange={handleChange} placeholder="Enter Text" value={inputTextVal}/>
    </div>;
};

export default Input;