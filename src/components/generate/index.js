import { useState, useCallback, Fragment, useEffect } from 'react';
import Input from '../input';
import Select from '../select';
import Button from '../button';
import SnackBar from '../snackbar';
import Loader from '../loader';
import Error from '../error';
import classes from './styles.module.css';
import { isEmptyString, isEmptyObject, copyText } from '../../utils';
import { SEVERITY, MESSAGE_API_URL, VALID_FOR_OPTIONS } from '../constants';
import useAsyncExec from '../../hooks/useAsyncExec';
import ClipBoardChecked from '../../assets/icons/clipboardChecked';
import ClipBoard from '../../assets/icons/clipboard';
import InfoIcon from '../../assets/icons/infoIcon';
import IconButton from '../iconButton';
import { themed } from '../../utils/theme';

const Generate = () => {
    const [inputTextVal, setInputTextVal] = useState('');
    const [inputSecretKey, setInputSecretKey] = useState('');
    const [validity, setValidity] = useState(null);
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

    const handleReset = useCallback(() => {
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
        const severity = (isEmptyString(inputTextVal) || isEmptyString(inputSecretKey)) || isEmptyString(validity)
            && SEVERITY.INFO;
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(!isEmptyString(message));
        setFetchResult(isEmptyString(message) ? true : false);
        useAsyncExec(() => {
            setFetchResult(false);
            handleInputTextChange('');
            handleInputSecretKeyChange('');
            handleValidityChange(null);
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

    return <Fragment>
        {!isEmptyObject(error) ?
            <Error error={error} buttonLabel='Create Message' onClick={handleReset} />
            : <>
                {(isEmptyString(url)
                    ? <div className={classes.generatorContainer}>
                        <div className={classes.generatorHeading}>
                            CREATE MESSAGE
                        </div>
                        <Input inputVal={inputTextVal} handleInputChange={handleInputTextChange}
                            placeholderValue='Enter Text' rows={5} />
                        <Input inputVal={inputSecretKey} handleInputChange={handleInputSecretKeyChange}
                            placeholderValue='Enter Secret Key' rows={1} />
                        <div className={classes.container}>
                            <Select validity={validity} placeholder='Validity'
                                handleValidityChange={handleValidityChange} />
                            <div>
                                <Button onClick={handleEncryption}>Encrypt</Button>
                            </div>
                        </div>
                    </div>
                    : <div className={classes.generatorContainer}>
                        <div className={classes.generatorHeading}>
                            VOILA!
                        </div>
                        <div className={classes.urlContent}>
                            <div className={classes.urlText} onClick={openInNewTab}>{url}</div>
                            <IconButton onClick={handleUrlCopy}>
                                {urlCopied ? <ClipBoardChecked color={themed('#136A87', '#A3F8FF')} />
                                    : <ClipBoard color={themed('#136A87', '#A3F8FF')} />}
                            </IconButton>
                        </div>
                        <div>
                            <Button onClick={handleReset}>Create Message</Button>
                        </div>
                        <div className={classes.infoContainer}>
                            <InfoIcon width='1rem' height='1rem' strokeColor={themed('#136A87', '#A3F8FF')} />
                            <p>Share the link with the recipient along with the secret key to
                                allow them to decrypt your message.</p>
                        </div>
                    </div>
                )}
            </>
        }
        <Loader loading={loading} />
        {openSnackbar &&
            <SnackBar message={snackbarMessage} severity={snackbarSeverity} handleClose={handleSnackbarClose} />}
    </Fragment>;
};

export default Generate;