import classes from './styles.module.css';
import { descriptionValue } from '../utils/constants';

const Description =() => {
    return <div className={classes.descriptionContainer}>
        <div className={classes.descriptionContent}>
            {descriptionValue}
        </div>

    </div>;
};

export default Description;