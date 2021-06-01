import { useEffect } from 'react';
import classes from './styles.module.css';

const Input = props =>{
    const {inputTextVal,handleInputTextChange} = props;
    const handleChange= e => handleInputTextChange(e.target.value);

    useEffect(()=>{
        document.getElementById('textArea').value=inputTextVal;
    },[inputTextVal]);

    return(
        <div className={classes.container}>
            <textarea id='textArea' onChange={handleChange} placeholder="Enter Text">{inputTextVal}</textarea>
        </div>
    );
};

export default Input;