import { useState, useCallback, Fragment } from 'react';
import Input from '../input';
import Select from '../select';
import Button from '../button';
import SnackBar from '../snackbar';
import classes from './styles.module.css';
import isEmptyString from '../../utils';
import { VALID_FOR_OPTIONS, SEVERITY } from '../constants';

const Generate = () => {
    const [inputTextVal, setInputTextVal] = useState('');
    const [validity, setValidity] = useState(VALID_FOR_OPTIONS.MIN_15.value);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(SEVERITY.INFO);
    const [url, setUrl] = useState('');
    const [urlCopied, setUrlCopied] = useState(false);
    const [error, setError] = useState(false);

    const handleInputTextChange = useCallback(value => setInputTextVal(value), [inputTextVal]);
    const handleValidityChange = useCallback(value => setValidity(value), [validity]);
    const handleSnackbarClose = useCallback(() => setOpenSnackbar(false), [openSnackbar]);

    const handleButtonClick = useCallback(() => {
        const message= isEmptyString(inputTextVal)? 'Please Enter text to Encrypt!' : 'Successfully Encrypted!';
        const severity= isEmptyString(inputTextVal)? SEVERITY.INFO : SEVERITY.SUCCESS;
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
        if(!isEmptyString(inputTextVal)){
            makePostRequest();
        }
        handleInputTextChange('');
    }, [inputTextVal, openSnackbar]);

    const makePostRequest = useCallback(() => {
        fetch('http://localhost:5050/api/v1/messages', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: inputTextVal, validFor: validity })
        })
            .then(res => res.json())
            .then(result => {
                //console.log(result);
                setUrl(result.url);
            });

    }, [inputTextVal, validity]);

    const handleUrlCopy = () => {
        if(isEmptyString(url)) return;
        let textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try{
            document.execCommand('copy');
            if(error) setError(false);
        }catch(error) {
            setError(true);
            setSnackbarMessage(error);
            setSnackbarSeverity(SEVERITY.ERROR);
            setOpenSnackbar(true);
        }

        document.body.removeChild(textArea);        
        setUrlCopied(true);
        setTimeout(() => setUrlCopied(false), 2000);
    }; 

    return  <Fragment>
        {isEmptyString(url) ? <Fragment>
            <div className={classes.inputContainer}>
                <Input inputTextVal={inputTextVal} handleInputTextChange={handleInputTextChange} 
                    placeholderValue='Enter Text' />
            </div>
            <Select handleValidityChange={handleValidityChange} />
            <div className={classes.buttonContainer}>
                <Button onClick={handleButtonClick} > Encrypt </Button>
            </div>
        </Fragment> : <Fragment>
            <div className={classes.urlContainer} id='urlElement'> {url} </div>
            <div className={classes.buttonContainer}>
                <Button onClick={handleUrlCopy}> Cop{urlCopied?'ied!':'y'}  </Button>
            </div>
        </Fragment>}
        {openSnackbar && 
            <SnackBar message={snackbarMessage} severity={snackbarSeverity} handleClose={handleSnackbarClose}/>}
    </Fragment>;  
};

export default Generate;