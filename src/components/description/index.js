import classes from './styles.module.css';
import ExpandIcon from '../../assets/expandIcon';
import { themed } from '../../utils/theme';

const Description = () => {
    return <div className={classes.descriptionContainer}>
        <div className={classes.descriptionContent}>
            <ExpandIcon strokeColor={themed('#0E9E9C', '#A3F8FF')} />
            <p>Enter your message</p>
        </div>

        <div className={classes.descriptionContent}>
            <ExpandIcon strokeColor={themed('#0E9E9C', '#A3F8FF')} />
            <p>Protect it with a secret key</p>
        </div>

        <div className={classes.descriptionContent}>
            <ExpandIcon strokeColor={themed('#0E9E9C', '#A3F8FF')} />
            <p>Share the link</p>
        </div>

        <div className={classes.descriptionContent}>
            <ExpandIcon strokeColor={themed('#0E9E9C', '#A3F8FF')} />
            <p>Decrypt the message with key</p>
        </div>
    </div>;
};

export default Description;