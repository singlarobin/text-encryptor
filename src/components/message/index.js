import classes from './styles.module.css';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../button';
import Input from '../input';
import SnackBar from '../snackbar';
import Error from '../error';
import isEmptyString from '../../utils';
import { SEVERITY } from '../constants';
import { getMessageUrl } from '../constants';

const Message = props => {
    const { id } =useParams();
    const [url, setUrl] = useState(getMessageUrl);
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
                setErrorMessage(result.data? '': result.message);
                setUrl(url+id+'/decrypt');
            });
    }, [errorMessage]);

    const handleInputSecretKeyChange = useCallback( value => setInputSecretKey(value), [inputSecretKey]);
    const handleSnackbarClose = useCallback(() => setOpenSnackbar(false), [openSnackbar]);

    const handleDecryption = useCallback(() => { 
        const message = isEmptyString(inputSecretKey)?  'Missing Secret Key!':'';
        const severity = isEmptyString(inputSecretKey) && SEVERITY.INFO;
        // console.log('message: ', message);
        if(!isEmptyString(message)){
            setSnackbarMessage(message);
            setSnackbarSeverity(severity);
            setOpenSnackbar(true);
        }
        else{
            //setUrl(url+'?secretKey='+inputSecretKey);
            makeGetRequest();
        }
    });

    const makeGetRequest = useCallback(() => {
        //console.log('1');
        fetch(url+'/'+inputSecretKey)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setErrorMessage('message' in result? result.message: '');

                //setErrorMessage(result.message)
                //const { data, content } =result.data;
                //console.log('data', result.data);
                //console.log('result.message: ', isEmptyString(result.message));
                //setDecryptMessage(!isEmptyString(content) && content);
            });
    });

    const handleRedirectToHome = useCallback(() => props.history.push('/'));

    return <Fragment>
        {!isEmptyString(errorMessage)? <Fragment>
            <Error message={errorMessage}/>
            <Button onClick={handleRedirectToHome} 
                style={{ margin: '1rem', padding: '0.25rem 0.5rem' }}>Create New Message</Button>
        </Fragment> : <Fragment>
            {isEmptyString(decryptMessage)? <Fragment>
                <Input inputVal={ inputSecretKey} placeholderValue='Enter Secret Key' rows={1} 
                    handleInputChange={handleInputSecretKeyChange} />
                <Button onClick={handleDecryption} 
                    style={{ margin: '1rem', padding:'0.5rem 0.75rem' }}> Decrypt </Button>
            </Fragment> : <Fragment>
                <p className={classes.messageContainer}> {decryptMessage} </p>
                <Button onClick={handleRedirectToHome} 
                    style={{ margin: '1rem', padding: '0.25rem 0.5rem' }}>Create New Message</Button>
            </Fragment>}
            {openSnackbar && 
            <SnackBar message={snackbarMessage} severity={snackbarSeverity} handleClose={handleSnackbarClose}/>}
        </Fragment>}
    </Fragment>;
};

export default Message;