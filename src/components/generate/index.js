import { useState, useCallback } from 'react';
import Input from '../input';
import Select from '../select';
import Button from '../button';
import SnackBar from '../snackbar';
import classes from './styles.module.css';
import isEmptyString from '../../utils';
import { selectOptions, severityOptions } from '../constants';

const Generate = () => {
    const [inputTextVal, setInputTextVal] = useState('');
    const [validity, setValidity] = useState(selectOptions.MINS_15.name);
    const [openSnackbar, setOpenSnackbar]=useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(severityOptions.INFO);

    const handleInputTextChange = useCallback(value => setInputTextVal(value), [inputTextVal]);
    const handleValidityChange = useCallback(value => setValidity(value), [validity]);
    const handleSnackbarClose = useCallback(() => setOpenSnackbar(false), [openSnackbar]);

    const handleButtonClick = useCallback(() => {
        const message= isEmptyString(inputTextVal)? 'Please Enter text to Encrypt!' : `Text (${inputTextVal}) is Encrypted, valid for ${validity}.`;
        const severity= isEmptyString(inputTextVal)? severityOptions.INFO : severityOptions.SUCCESS;
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
        handleInputTextChange('');
    }, [inputTextVal, openSnackbar, validity]);
    
    return <div>
        <div className={classes.inputContainer}>
            <Input inputTextVal={inputTextVal} handleInputTextChange={handleInputTextChange} 
                placeholderValue='Enter Text' />
        </div>
        
        <Select handleValidityChange={handleValidityChange} />
        <div className={classes.buttonContainer}>
            <Button onClick={handleButtonClick} > Encrypt </Button>
        </div>
        
        {openSnackbar && 
            <SnackBar message={snackbarMessage} severity={snackbarSeverity} handleClose={handleSnackbarClose}/>}
    </div>;
};

export default Generate;