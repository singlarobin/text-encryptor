import classes from './styles.module.css';
import { DESCRIPTION_VALUE } from '../constants';
import IconButton from '../iconButton';
import ExpandIcon from '../../assests/expandIcon';
import { useState, Fragment } from 'react';

const Description = () => {
    const [showContent, setShowContent] = useState(false);

    const handleShowContent = () => setShowContent(!showContent);

    return <Fragment>
        <div className={classes.heading}>
            <div className={classes.label}>
                How it Works?
            </div>
            <IconButton style={{ padding: '0rem' }}>
                <ExpandIcon onClick={handleShowContent}/>
            </IconButton>
        </div>
        {showContent && <p className={classes.content}>
            {DESCRIPTION_VALUE} 
        </p>}
    </Fragment>;
};

export default Description;