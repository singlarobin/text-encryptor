import classes from './styles.module.css';
import {descriptionValue} from '../utils/index';

const Description =()=>{
    return(
        <div className={classes.container}>
            <div className={classes.description}>
                {descriptionValue}
            </div>

        </div>
    );
};

export default Description;