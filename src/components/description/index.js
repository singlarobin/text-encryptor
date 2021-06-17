import classes from './styles.module.css';
import { DESCRIPTION_VALUE } from '../constants';
import ExpandIcon from '../../assests/expandIcon';
import { useState } from 'react';

const Description = () => {
    const [showContent, setShowContent] = useState(false);

    const handleShowContent = () => setShowContent(!showContent);

    return <div className={classes.descriptionContainer}>
        <div className={classes.heading}>
            <div className={classes.label}>
                How it Works?
            </div>
            <ExpandIcon onClick={handleShowContent}/>
        </div>
        {showContent && <p className={classes.content}>
            {DESCRIPTION_VALUE} 
        </p>}
    </div>;
};

export default Description;