import classes from './styles.module.css';

const Button = props => {
    const { label, onClick } = props;

    return <div>
        <div className={classes.buttonContainer}>
            <button onClick={onClick}>{label}</button>
        </div>
    </div>;
};

export default Button;