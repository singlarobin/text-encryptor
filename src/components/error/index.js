import { Fragment } from 'react';
import classes from './styles.module.css';
import Button from '../button';

const Error = props => {
    const { message, status, buttonLabel, onClick } = props;
    
    return <Fragment>
        <p className={classes.errorContent}>{message}</p>
        {typeof(onClick) === 'function'&&  
        <Button onClick={onClick} 
            style={{ margin: '0rem auto', padding: '0.5rem 0.75rem' }}>{buttonLabel}</Button>}
       
    </Fragment>;
};

export default Error;

Error.defaultProps = { message: '404 Page Not Found' };