import { useState, useCallback, Fragment } from 'react';
import Input from '../input';
import Select from '../select';
import Button from '../button';
import SnackBar from '../snackbar';
import Loader from '../loader';
import Error from '../error';
import classes from './styles.module.css';
import isEmptyString from '../../utils';
import { SEVERITY } from '../constants';

const Generate = () => {
    const [inputTextVal, setInputTextVal] = useState('');
    const [inputSecretKey, setInputSecretKey] = useState('');
    const [validity, setValidity] = useState('');
    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorStatus, setErrorStatus] = useState('');
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(SEVERITY.INFO);
    const [url, setUrl] = useState('');
    const [urlCopied, setUrlCopied] = useState(false);
    const [error, setError] = useState(false);

    const handleInputTextChange = useCallback(value => setInputTextVal(value), [inputTextVal]);
    const handleInputSecretKeyChange = useCallback(value => setInputSecretKey(value), [inputSecretKey]);
    const handleValidityChange = useCallback(value => setValidity(value), [validity]);
    const handleSnackbarClose = useCallback(() => setOpenSnackbar(false), [openSnackbar]);
    const handleRedirectToHome = useCallback(() => {
        setErrorMessage('');
        setErrorStatus('');
        setUrl('');
    }, [errorMessage, url, errorStatus]);

    const openInNewTab = useCallback(() => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }, [url]);

    const handleEncryption = useCallback(() => {
        const message = (isEmptyString(inputTextVal) || isEmptyString(inputSecretKey)) &&
            'Missing either Text to Encrypt or Secret Key!';
        const severity = (isEmptyString(inputTextVal) || isEmptyString(inputSecretKey)) && SEVERITY.INFO;
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(!isEmptyString(message));
        if (isEmptyString(message)) {
            makePostRequest();
        }
        handleInputTextChange('');
        handleInputSecretKeyChange('');
    }, [inputTextVal, inputSecretKey, openSnackbar]);

    const makePostRequest = useCallback(() => {
        setLoading(true);
        fetch('http://localhost:5050/api/v1/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: inputTextVal,
                validFor: validity.value,
                secretKey: inputSecretKey
            })
        })
            .then(res => res.json())
            .then(result => {
                setLoading(false);
                setErrorMessage(result.error !== null ? result.error.message : '');
                setErrorStatus(result.error !== null ? result.status : '');
                setUrl(result.data !== null ? result.data.url : url);
            });

    }, [inputTextVal, inputSecretKey, validity]);

    const handleUrlCopy = useCallback(() => {
        if (isEmptyString(url)) return;
        let textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            if (error) setError(false);
        } catch (error) {
            setError(true);
            setSnackbarMessage(error);
            setSnackbarSeverity(SEVERITY.ERROR);
            setOpenSnackbar(true);
        }
        document.body.removeChild(textArea);
        setUrlCopied(true);
        setTimeout(() => setUrlCopied(false), 2000);
    }, [url]);

    return <Fragment>
        {!isEmptyString(errorMessage) ? <Fragment>
            <Error message={errorMessage} status={errorStatus} buttonLabel={`Create New Message`} onClick={handleRedirectToHome} />
        </Fragment> : <Fragment>
            {isEmptyString(url) ? <Fragment>
                <Input inputVal={inputTextVal} handleInputChange={handleInputTextChange}
                    placeholderValue='Enter Text' rows={4} />
                <div className={classes.container}>
                    <Input inputVal={inputSecretKey} handleInputChange={handleInputSecretKeyChange}
                        placeholderValue='Enter Secret Key' rows={1}
                        style={{ marginTop: '0rem' }} />
                    <Select validity={validity} handleValidityChange={handleValidityChange} />
                </div>

                <Button onClick={handleEncryption}
                    style={{ margin: '0 auto', padding: '0.5rem 0.75rem' }} > Encrypt </Button>
            </Fragment> : <Fragment>
                <p className={classes.urlContent} onClick={openInNewTab}> {url} </p>
                <Button onClick={handleUrlCopy}
                    style={{ margin: '0 auto 0.75rem', padding: '0.25rem 0.5rem' }}>
                        Cop{urlCopied ? 'ied!' : 'y'}</Button>
                <Button onClick={handleRedirectToHome}
                    style={{ margin: '0 auto', padding: '0.5rem 0.75rem' }}>Create New Message</Button>
            </Fragment>}
        </Fragment>}
        <Loader loading={loading} />
        {openSnackbar &&
            <SnackBar message={snackbarMessage} severity={snackbarSeverity} handleClose={handleSnackbarClose} />}
    </Fragment>;
};

export default Generate;