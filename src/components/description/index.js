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
            <div className={classes.descriptionLabel}>How it Works?</div>
            <IconButton onClick={handleShowContent}
                style={{
                    padding: '0rem',
                    cursor: 'pointer',
                }}>
                <ExpandIcon strokeColor={themed('#666', '#f7f7f7')}
                    style={{
                        transform: showContent ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.5s ease-in-out'
                    }} />
            </IconButton>
        </div>
        {showContent && <p className={classes.descriptionContent}>{DESCRIPTION_VALUE}</p>}
    </div>;
};

export default Description;