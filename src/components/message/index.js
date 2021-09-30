import classes from './styles.module.css';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../button';
import Input from '../input';
import SnackBar from '../snackbar';
import Loader from '../loader';
import Error from '../error';
import { isEmptyString, isEmptyObject, copyText } from '../../utils';
import { HOMEPAGE_PATH, SEVERITY } from '../constants';
import { MESSAGE_API_URL } from '../constants';
import useAsyncExec from '../../hooks/useAsyncExec';
import ClipBoardChecked from '../../assets/icons/clipboardChecked';
import ClipBoard from '../../assets/icons/clipboard';
import InfoIcon from '../../assets/icons/infoIcon';
import IconButton from '../iconButton';
import { themed } from '../../utils/theme';

const Message = props => {
    const { id } = useParams();
    const [url, setUrl] = useState(MESSAGE_API_URL);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [decryptMessage, setDecryptMessage] = useState('');
    const [inputSecretKey, setInputSecretKey] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(SEVERITY.INFO);
    const [fetchResult, setFetchResult] = useState(false);
    const [messageCopied, setMessageCopied] = useState(false);

    const handleErrorInResponse = useCallback(result => {
        setError({ message: result.error.message, status: result.status });
    }, []);

    const handleInputSecretKeyChange = useCallback(value => setInputSecretKey(value), []);

    const handleSnackbarClose = useCallback(() => setOpenSnackbar(false), []);

    const handleRedirectToHome = useCallback(() => props.history.replace(HOMEPAGE_PATH), []);

    const handleDecryption = useCallback(() => {
        const message = isEmptyString(inputSecretKey) ? 'Missing Secret Key!' : '';
        const severity = isEmptyString(inputSecretKey) && SEVERITY.INFO;
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(!isEmptyString(message));
        setFetchResult(isEmptyString(message) ? true : false);
        useAsyncExec(() => {
            setFetchResult(false);
            handleInputSecretKeyChange('');
        });
    }, [inputSecretKey]);

    const fetchMessage = useCallback(() => {
        setLoading(true);
        fetch(url + '?secretKey=' + inputSecretKey)
            .then(response => response.json())
            .then(result => {
                if (!isEmptyObject(result.error)) handleErrorInResponse(result);
                setDecryptMessage(result.data?.message || '');
            })
            .catch(error => {
                setError({ message: error.message, status: '500' });
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url, inputSecretKey]);

    useEffect(() => {
        //Check if id exists or not
        setLoading(true);
        fetch(url + id)
            .then(response => response.json())
            .then(result => {
                if (!isEmptyObject(result.error)) handleErrorInResponse(result);
                setUrl(result.data ? url + id + '/decrypt' : url);
            })
            .catch(error => {
                setError({ message: error.message, status: '500' });
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => fetchResult && fetchMessage(), [fetchResult, fetchMessage]);

    const handleMessageCopy = useCallback(() => {
        if (isEmptyString(decryptMessage)) return;
        if (!isEmptyString(copyText(decryptMessage))) return;
        setMessageCopied(true);
        useAsyncExec(() => setMessageCopied(false), 2000);
    }, [decryptMessage]);

    return <Fragment>
        {!isEmptyObject(error)
            ? <Error error={error} buttonLabel={`Create Message`} onClick={handleRedirectToHome} />
            : <Fragment>
                {isEmptyString(decryptMessage)
                    ? <div className={classes.messageContainer}>
                        <div className={classes.messageHeading}>
                            DECRYPT MESSAGE
                        </div>
                        <Input inputVal={inputSecretKey} placeholderValue='Enter Secret Key' rows={1}
                            handleInputChange={handleInputSecretKeyChange} style={{ backdropFilter: 'blur(1rem)' }} />
                        <div>
                            <Button onClick={handleDecryption} style={{ backdropFilter: 'blur(1rem)' }}>Decrypt</Button>
                        </div>
                    </div>
                    : <div className={classes.messageContainer}>
                        <div className={classes.messageHeading}>
                            VOILA!
                        </div>
                        <div className={classes.messageContent}>
                            <div className={classes.messageText}>{decryptMessage}</div>
                            <IconButton onClick={handleMessageCopy}>
                                {messageCopied ? <ClipBoardChecked color={themed('#136A87', '#A3F8FF')} />
                                    : <ClipBoard color={themed('#136A87', '#A3F8FF')} />}
                            </IconButton>
                        </div>
                        <div>
                            <Button onClick={handleRedirectToHome} style={{ padding: '0.5rem' }}>Create Message</Button>
                        </div>
                        <div className={classes.infoContainer}>
                            <InfoIcon width='1rem' height='1rem' strokeColor={themed('#136A87', '#A3F8FF')} />
                            <p>Share the link with the recipient along with the secret key to
                                allow them to decrypt your message.</p>
                        </div>
                    </div>
                }
                <Loader loading={loading} />
                {openSnackbar &&
                    <SnackBar message={snackbarMessage} severity={snackbarSeverity}
                        handleClose={handleSnackbarClose} />}
            </Fragment>}
    </Fragment>;
};

export default Message;