import classes from './styles.module.css';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../button';
import Input from '../input';
import SnackBar from '../snackbar';
import Loader from '../loader';
import isEmptyString from '../../utils';
import { SEVERITY } from '../constants';
import { getMessageUrl } from '../constants';

const Message = props => {
    const { id } = useParams();
    const [url, setUrl] = useState(getMessageUrl);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [decryptMessage, setDecryptMessage] = useState(''); 
    const [inputSecretKey, setInputSecretKey] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(SEVERITY.INFO);

    useEffect(() => {
        fetch(url+id)
            .then(response => response.json())
            .then(result => {
                setErrorMessage(result.error !== null? result.error.message : '');
                setUrl(result.data !== null? url+id+'/decrypt' : url);
            });
    }, []);

    const handleInputSecretKeyChange = useCallback( value => setInputSecretKey(value), [inputSecretKey]);
    const handleSnackbarClose = useCallback(() => setOpenSnackbar(false), [openSnackbar]);
    const handleRedirectToHome = useCallback(() => props.history.push('/'));
    
    const handleDecryption = useCallback(() => { 
        const message = isEmptyString(inputSecretKey)?  'Missing Secret Key!':'';
        const severity = isEmptyString(inputSecretKey) && SEVERITY.INFO;
        if(!isEmptyString(message)){
            setSnackbarMessage(message);
            setSnackbarSeverity(severity);
            setOpenSnackbar(true);
        }
        else{
            makeGetRequest();
        }
    });

    const makeGetRequest = useCallback(() => {
        setLoading(true);
        fetch(url+'?secretKey='+inputSecretKey)
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                setErrorMessage(result.error !== null? result.error.message : '');
                setDecryptMessage(result.data !== null? result.data.message : '');
            });
    });

    return <Fragment>
        {!isEmptyString(errorMessage)? <Fragment>
            <p className={classes.messageContent}>{errorMessage}</p>
            <Button onClick={handleRedirectToHome} 
                style={{ margin: '1rem', padding: '0.5rem 0.75rem' }}>Create New Message</Button>
        </Fragment> : <Fragment>
            {isEmptyString(decryptMessage)? <Fragment>
                <Input inputVal={ inputSecretKey} placeholderValue='Enter Secret Key' rows={1} 
                    handleInputChange={handleInputSecretKeyChange} />
                <Button onClick={handleDecryption} 
                    style={{ margin: '1rem', padding:'0.5rem 0.75rem' }}> Decrypt </Button>
            </Fragment> : <Fragment>
                <p className={classes.messageContent}> {decryptMessage} </p>
                <Button onClick={handleRedirectToHome} 
                    style={{ margin: '1rem', padding: '0.5rem 0.75rem' }}>Create New Message </Button>
            </Fragment>}
            <Loader loading={loading} />
            {openSnackbar && 
            <SnackBar message={snackbarMessage} severity={snackbarSeverity} handleClose={handleSnackbarClose}/>}
        </Fragment>}
    </Fragment>;
};

export default Message;