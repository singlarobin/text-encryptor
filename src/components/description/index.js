import classes from './styles.module.css';
import { DESCRIPTION_VALUE } from '../constants';
import ExpandIcon from '../../assests/expandIcon';
import { useState } from 'react';
import { themed } from '../../utils/theme';

const Description = () => {
    const [showContent, setShowContent] = useState(false);

    const handleShowContent = () => setShowContent(!showContent);

    return <div className={classes.descriptionContainer}>
        <div className={classes.descriptionHeading} onClick={handleShowContent}>
            <div className={classes.descriptionLabel}>How it Works?</div>
            <ExpandIcon
                height='0.75rem'
                width='0.75rem'
                strokeColor={themed('#1480779f', '#36b6aba7')}
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transform: showContent ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.15s'
                }}
            />
        </div>
        {showContent && <p className={classes.descriptionContent}>{DESCRIPTION_VALUE}</p>}
    </div>;
};

export default Description;