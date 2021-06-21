import { Fragment, useCallback } from 'react';
import classes from './styles.module.css';
import Button from '../button';

const Error = props => {
    const { message } = props;
    const handleRedirectToHome = useCallback(() => props.history.push('/'));
    
    return <Fragment>
        <p className={classes.errorContent}>{message}</p>
        <Button onClick={handleRedirectToHome} 
            style={{ margin: '1rem', padding: '0.5rem 0.75rem' }}>Create New Message</Button>
    </Fragment>;
};

export default Error;

Error.defaultProps = { message: '404 Page Not Found' };