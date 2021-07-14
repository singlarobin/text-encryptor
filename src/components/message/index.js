import classes from './styles.module.css';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../button';
import Input from '../input';
import SnackBar from '../snackbar';
import Loader from '../loader';
import Error from '../error';
import { isEmptyString } from '../../utils';
import { SEVERITY } from '../constants';
import { MESSAGE_API_URL } from '../constants';

const Message = props => {
    const { id } = useParams();
    const [url, setUrl] = useState(MESSAGE_API_URL);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorStatus, setErrorStatus] = useState('');
    const [decryptMessage, setDecryptMessage] = useState('');
    const [inputSecretKey, setInputSecretKey] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(SEVERITY.INFO);
    const [fetchResult, setFetchResult] = useState(false);

    useEffect(() => {
        //Check if id exists or not
        fetch(url + id)
            .then(response => response.json())
            .then(result => {
                setErrorMessage(result.error?.message || '');
                setErrorStatus(result.error ? result.status : '');
                setUrl(result.data ? url + id + '/decrypt' : url);
            });
    }, []);

    const handleInputSecretKeyChange = useCallback(value => setInputSecretKey(value), []);
    const handleSnackbarClose = useCallback(() => setOpenSnackbar(false), []);
    const handleRedirectToHome = useCallback(() => props.history.replace('/'), []);

    const handleDecryption = useCallback(() => {
        const message = isEmptyString(inputSecretKey) && 'Missing Secret Key!';
        const severity = isEmptyString(inputSecretKey) && SEVERITY.INFO;
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(!isEmptyString(message));
        setFetchResult(isEmptyString(message) ? true : false);
    }, [inputSecretKey]);

    const fetchMessage = useCallback(() => {
        setLoading(true);
        fetch(url + '?secretKey=' + inputSecretKey)
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                setErrorMessage(result.error?.message || '');
                setErrorStatus(result.error ? result.status : '');
                setDecryptMessage(result.data?.message || '');
            });
    }, [url, inputSecretKey]);

    useEffect(() => fetchResult && fetchMessage(), [fetchResult, fetchMessage]);

    return <Fragment>
        {!isEmptyString(errorMessage) ? <Fragment>
            <Error message={errorMessage} status={errorStatus} buttonLabel={`Create Message`} onClick={handleRedirectToHome} />
        </Fragment> : <Fragment>
            {isEmptyString(decryptMessage) ? <Fragment>
                <Input inputVal={inputSecretKey} placeholderValue='Enter Secret Key' rows={1}
                    handleInputChange={handleInputSecretKeyChange} />
                <Button onClick={handleDecryption}
                    style={{ margin: '1rem auto', padding: '0.5rem 0.75rem' }}>
                    Decrypt
                </Button>
            </Fragment> : <Fragment>
                <p className={classes.messageContent}> {decryptMessage} </p>
                <Button onClick={handleRedirectToHome}
                    style={{ margin: '1rem auto', padding: '0.5rem 0.75rem' }}>
                    Create Message
                </Button>
            </Fragment>}
            <Loader loading={loading} />
            {openSnackbar &&
                <SnackBar message={snackbarMessage} severity={snackbarSeverity} handleClose={handleSnackbarClose} />}
        </Fragment>}
    </Fragment>;
};

export default Message;