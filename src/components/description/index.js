import classes from './styles.module.css';
import LeafIcon from '../../assets/icons/leafIcon';
import LockIcon from '../../assets/icons/lockIcon';
import LinkIcon from '../../assets/icons/linkIcon';
import EmojiIcon from '../../assets/icons/emojiIcon';
import { themed } from '../../utils/theme';

const Description = () => {
    return <div className={classes.descriptionContainer}>
        <div className={classes.descriptionContent}>
            <LeafIcon color={themed('#0E9E9C', '#6CFFEC')} />
            <p>Enter your message</p>
        </div>

        <div className={classes.descriptionContent}>
            <LockIcon color={themed('#0E9E9C', '#6CFFEC')} />
            <p>Protect it with a secret key</p>
        </div>

        <div className={classes.descriptionContent}>
            <LinkIcon color={themed('#0E9E9C', '#6CFFEC')} />
            <p>Share the link</p>
        </div>

        <div className={classes.descriptionContent}>
            <EmojiIcon color={themed('#0E9E9C', '#6CFFEC')} />
            <p>Decrypt the message with key</p>
        </div>
    </div>;
};

export default Description;