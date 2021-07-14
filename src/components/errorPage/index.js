import Error from '../error';
import { useCallback } from 'react';

const ErrorPage = props => {
    const status = '404';
    const message = 'Page Not Found!';
    const buttonName = 'Create Message';
    const handleRedirectToHome = useCallback(() => props.history.replace('/'), []);

    return <Error message={message} status={status} buttonLabel={buttonName} onClick={handleRedirectToHome} />;
};

export default ErrorPage;