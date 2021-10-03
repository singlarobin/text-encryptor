import classes from './styles.module.css';
import Button from '../button';

const Error = props => {
    const { error: { message, status }, buttonLabel, onClick } = props;

    return <div className={classes.errorWrapper}>
        <div className={classes.errorHeading}>
            UH-OH!
        </div>
        <div className={classes.errorMessageWrapper}>
            <div className={classes.errorStatus}>{status}</div>
            <div className={classes.errorContent}>
                {message}
                <br />
            Click on the button below to create a new message.
            </div>
        </div>
        <div>
            {typeof onClick === 'function' &&
                <Button onClick={onClick}>
                    {buttonLabel}
                </Button>}
        </div>

    </div>;
};

export default Error;