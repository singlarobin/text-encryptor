import classes from './styles.module.css';
import Error from '../error';
import { useCallback } from 'react';

const ErrorPage = props => {
    const status='404';
    const message = 'Page Not Found!';
    const buttonName='Back To Home Page';
    const handleRedirectToHome = useCallback(() => props.history.push('/'));
    
    return <Error message={message} status={status} buttonLabel={buttonName} onClick={handleRedirectToHome}/>;
};

export default ErrorPage;