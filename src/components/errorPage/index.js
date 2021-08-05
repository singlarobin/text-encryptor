import Error from '../error';
import { useCallback } from 'react';
import { HOMEPAGE_PATH } from '../constants';

const ErrorPage = props => {
    const error = { message: 'Page Not Found!', status: '404' };
    const buttonName = 'Create Message';

    const handleRedirectToHome = useCallback(() => props.history.replace(HOMEPAGE_PATH), []);

    return <Error error={error} buttonLabel={buttonName} onClick={handleRedirectToHome} />;
};

export default ErrorPage;