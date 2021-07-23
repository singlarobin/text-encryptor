import Error from '../error';
import { useCallback } from 'react';

const ErrorPage = props => {
    const error = { message: 'Page Not Found!', status: '404' };
    const buttonName = 'Create Message';
    const handleRedirectToHome = useCallback(() => props.history.replace('/'), []);

    return <Error error={error} buttonLabel={buttonName} onClick={handleRedirectToHome} />;
};

export default ErrorPage;