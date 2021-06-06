import classes from './styles.module.css';
import { descriptionValue } from '../constants';

const Description = () => {
    return <div className={classes.descriptionContainer}> {descriptionValue} </div>;
};

export default Description;