import classes from './styles.module.css';
import { DESCRIPTION_VALUE } from '../constants';
import IconButton from '../iconButton';
import ExpandIcon from '../../assests/expandIcon';
import { useState } from 'react';
import { themed } from '../../utils/theme';

const Description = () => {
    const [showContent, setShowContent] = useState(false);

    const handleShowContent = () => setShowContent(!showContent);

    return <div className={classes.descriptionContainer}>
        <div className={classes.descriptionHeading}>
            <div className={classes.descriptionLabel}>
                How it Works?
            </div>
            <IconButton style={{ padding: '0rem' }}>
                <ExpandIcon strokeColor={themed('#0e202a', '#f7f7f7')}
                    style={{ transform: showContent ? 'rotate(180deg)' : 'rotate(0)', }}
                    onClick={handleShowContent} />
            </IconButton>
        </div>
        {showContent && <p className={classes.descriptionContent}>
            {DESCRIPTION_VALUE}
        </p>}
    </div>;
};

export default Description;