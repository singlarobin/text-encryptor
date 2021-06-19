import classes from './styles.module.css';

const Error = props => {
    const { message } = props;
    return <p className={classes.errorContent}>{message}</p>;
};

export default Error;