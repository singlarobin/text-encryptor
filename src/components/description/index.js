import classes from './styles.module.css';
import { DESCRIPTION_VALUE } from '../constants';

const Description = () => {
    return <div className={classes.descriptionContainer}> {DESCRIPTION_VALUE} </div>;
};

export default Description;