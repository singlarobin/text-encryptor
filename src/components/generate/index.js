import { useState, useCallback, Fragment, useEffect } from 'react';
import Input from '../input';
import Select from '../select';
import Button from '../button';
import SnackBar from '../snackbar';
import Loader from '../loader';
import Error from '../error';
import classes from './styles.module.css';
import { isEmptyString, copyText } from '../../utils';
import { SEVERITY, MESSAGE_API_URL, VALID_FOR_OPTIONS } from '../constants';
import useAsyncExec from '../../hooks/useAsyncExec';

const Generate = () => {
    const [inputTextVal, setInputTextVal] = useState('');
    const [inputSecretKey, setInputSecretKey] = useState('');
    const [validity, setValidity] = useState(VALID_FOR_OPTIONS.MIN_15);
    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [error, setError] = useState(null);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(SEVERITY.INFO);
    const [fetchResult, setFetchResult] = useState(false);
    const [url, setUrl] = useState('');
    const [urlCopied, setUrlCopied] = useState(false);

    const handleInputTextChange = useCallback(value => setInputTextVal(value), []);
    const handleInputSecretKeyChange = useCallback(value => setInputSecretKey(value), []);
    const handleValidityChange = useCallback(value => setValidity(value), []);
    const handleSnackbarClose = useCallback(() => setOpenSnackbar(false), []);
    const handleRedirectToHome = useCallback(() => {
        setError(null);
        setUrl('');
    }, []);

    const openInNewTab = useCallback(() => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }, [url]);

    const handleEncryption = useCallback(() => {
        const message = (isEmptyString(inputTextVal) || isEmptyString(inputSecretKey) || isEmptyString(validity)) ?
            'Missing either Text to Encrypt or Secret Key or Validity Duration!' : '';
        const severity = (isEmptyString(inputTextVal) || isEmptyString(inputSecretKey)) && SEVERITY.INFO;
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(!isEmptyString(message));
        setFetchResult(isEmptyString(message) ? true : false);
        useAsyncExec(() => {
            setFetchResult(false);
            handleInputTextChange('');
            handleInputSecretKeyChange('');
            handleValidityChange(VALID_FOR_OPTIONS.MIN_15);
        });
    }, [inputTextVal, inputSecretKey, validity]);

    const sendNewMessageRequest = useCallback(() => {
        setLoading(true);
        fetch(MESSAGE_API_URL, {
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
                if (result.error) {
                    setError({ message: result.error.message, status: result.status });
                }
                setUrl(result.data?.url || '');
            })
            .catch(error => {
                setError({ message: error.message, status: '500' });
            })
            .finally(() => {
                setLoading(false);
            });
    }, [inputTextVal, inputSecretKey, validity]);

    useEffect(() => fetchResult && sendNewMessageRequest(), [fetchResult, sendNewMessageRequest]);

    const handleUrlCopy = useCallback(() => {
        if (isEmptyString(url)) return;
        if (!isEmptyString(copyText(url))) return;
        setUrlCopied(true);
        useAsyncExec(() => setUrlCopied(false), 2000);
    }, [url]);

    console.log('qq', isEmptyString(error));
    return <Fragment>
        {!isEmptyString(error) ?
            <Error error={error} buttonLabel={`Create Message`} onClick={handleRedirectToHome} />
            : <Fragment>
                {isEmptyString(url) ? <Fragment>
                    <Input inputVal={inputTextVal} handleInputChange={handleInputTextChange}
                        placeholderValue='Enter Text' rows={4} />
                    <div className={classes.container}>
                        <Input inputVal={inputSecretKey} handleInputChange={handleInputSecretKeyChange}
                            placeholderValue='Enter Secret Key' rows={1}
                            style={{ marginTop: '0rem' }} />
                        <Select validity={validity} handleValidityChange={handleValidityChange} />
                    </div>
                    <Button onClick={handleEncryption} style={{ margin: '1rem auto', padding: '0.5rem 0.75rem' }}>
                        Encrypt
                    </Button>
                </Fragment> : <Fragment>
                    <p className={classes.urlContent} onClick={openInNewTab}> {url} </p>
                    <Button onClick={handleUrlCopy} style={{ margin: '0 auto', padding: '0.25rem 0.5rem' }}>
                        Cop{urlCopied ? 'ied!' : 'y'}
                    </Button>
                    <Button onClick={handleRedirectToHome} style={{ margin: '1rem auto', padding: '0.5rem 0.75rem' }}>
                        Create Message
                    </Button>
                </Fragment>}
            </Fragment>}
        <Loader loading={loading} />
        {openSnackbar &&
            <SnackBar message={snackbarMessage} severity={snackbarSeverity} handleClose={handleSnackbarClose} />}
    </Fragment>;
};

export default Generate;