import classes from './styles.module.css';
import { Fragment, useState } from 'react';
import Button from '../button';

const Message = () => {
    const [mesage, setMessage] = useState('Message Will Display Here!'); 

    const handleClick = () => { };

    return <Fragment>
        <div className={classes.messageContainer}> {mesage} </div>
        <div className={classes.buttonContainer}>
            <Button onclick={handleClick}> Decrypt </Button>
        </div>
        
    </Fragment>;
};

export default Message;