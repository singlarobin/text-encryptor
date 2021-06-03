import { useState } from 'react';
import classes from './styles.module.css';
import SnackBar from '../snackbar/index';
import { isEmptyString } from '../utils/constants';
import { useCallback } from 'react';

const Button = props => {
    const { buttonName, validity, inputTextVal, handleInputTextChange } = props;
    const [openSnackbar, setOpenSnackbar]=useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('');

    const handleButtonClick = useCallback(() => {
        const message= isEmptyString(inputTextVal)?'Please Enter text to Encrypt!' : `Text (${inputTextVal}) is Encrypted which will be valid for ${validity}.`;
        const severity= isEmptyString(inputTextVal)?'info':'success';
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
        handleInputTextChange('');
    }, [inputTextVal]);

    const handleSnackbarClose = () => setOpenSnackbar(false);

    return <div>
        <div className={classes.buttonContainer}>
            <button onClick={handleButtonClick}>{buttonName}</button>
        </div>
        {openSnackbar && 
            <SnackBar message={snackbarMessage} severity={snackbarSeverity} handleClose={handleSnackbarClose} />}
    </div>;
};

export default Button;