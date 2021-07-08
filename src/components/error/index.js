import { Fragment } from 'react';
import classes from './styles.module.css';
import Button from '../button';

const Error = props => {
    const { message, status, buttonLabel, onClick } = props;

    return <Fragment>
        <div className={classes.errorContainer}>
            <div className={classes.errorStatus}>{status}</div>
            <div className={classes.errorContent}>
                {message}
                <br />
                Click on the button below to create a message.
            </div>
        </div>
        {typeof onClick === 'function' &&
            <Button onClick={onClick}
                style={{ margin: '0rem auto', padding: '0.5rem 0.75rem' }}>
                {buttonLabel}
            </Button>}
    </Fragment>;
};

export default Error;
