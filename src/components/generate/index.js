import { useState, useCallback } from 'react';
import Input from '../input';
import Select from '../select';
import Button from '../button';
import SnackBar from '../snackbar';
import { selectOptions, isEmptyString } from '../utils/constants';

const Generate = () => {
    const [inputTextVal, setInputTextVal] = useState('');
    const [validity, setValidity] = useState(selectOptions[0].name);
    const [openSnackbar, setOpenSnackbar]=useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('');

    const handleInputTextChange = value => setInputTextVal(value);
    const handleValidityChange = value => setValidity(value);
    const handleSnackbarClose = () => setOpenSnackbar(false);

    const handleButtonClick = useCallback(() => {
        const message= isEmptyString(inputTextVal)?'Please Enter text to Encrypt!' : `Text (${inputTextVal}) is Encrypted, valid for ${validity}.`;
        const severity= isEmptyString(inputTextVal)?'info':'success';
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
        handleInputTextChange('');
    }, [inputTextVal]);
    
    return <div>
        <Input inputTextVal={inputTextVal} handleInputTextChange={handleInputTextChange} />
        <Select handleValidityChange={handleValidityChange} />
        <Button label='Encrypt' onClick={handleButtonClick} />
        {openSnackbar && 
            <SnackBar message={snackbarMessage} severity={snackbarSeverity} 
                handleInputTextChange={handleInputTextChange} handleClose={handleSnackbarClose}/>}
    </div>;
};

export default Generate;