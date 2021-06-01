import { useState } from 'react';
import classes from './styles.module.css';
import SnackBar from '../snackbar/index';
import {isEmptyString} from '../utils/index';

const Button = props =>{
    const {validity,inputTextVal,handleInputTextChange} = props;
    const [openSnackbar,setOpenSnackbar]=useState(false);
    const [snackbarMessage,setSnackbarMessage]=useState('');
    const [snackbarSeverity,setSnackbarSeverity]=useState('');

    const handleButtonClick=()=>{
        if(isEmptyString(inputTextVal)){
            setSnackbarMessage('Please Enter text to Encrypt!');
            setSnackbarSeverity('info');
            setOpenSnackbar(true);
        }
        else{
            //when text encryption is successfull//
            setSnackbarMessage(`Text (${inputTextVal}) is Encrypted which will be valid for ${validity}.`);
            setSnackbarSeverity('success');
            setOpenSnackbar(true);
        }
        handleInputTextChange('');
    };

    const handleSnackbarClose=()=>{
        setOpenSnackbar(false);
    };

    return(
        <div>
            <div className={classes.container}>
                <button onClick={handleButtonClick}>Encrypt</button>
            </div>
            {
                openSnackbar===true? <SnackBar message={snackbarMessage} severity={snackbarSeverity} handleClose={handleSnackbarClose} />:null
            }
        </div>
        
    );
};

export default Button;