import {useState} from 'react';
import {MdClose, MdErrorOutline} from 'react-icons/md';
import {IoWarningOutline} from 'react-icons/io5';
import {BsCheckCircle} from 'react-icons/bs';
import classes from './styles.module.css';
import { useEffect } from 'react';

const SnackBar = props =>{
    const { message, severity, handleClose} = props;
   //const [containerColor,setContainerColor] = useState('');

   useEffect(()=> setTimeout(handleClose,3000));
   
    const selectSeverityIcon=()=>{
        switch(severity){
            case 'success':
                //setContainerColor('green');
                return <BsCheckCircle/>;
            case 'warning':
                //setContainerColor('orange');
                return <IoWarningOutline/>;
            case 'info':
                //setContainerColor('blue');
                return <MdErrorOutline/>;
            default:
                //setContainerColor('red');
                return <MdErrorOutline/>;
        }
    };

    return(
        <div className={classes.container} severity={severity} onClose={handleClose} >
            <div className={classes.icon}>
                {selectSeverityIcon()}
            </div>
            <div className={classes.content}>
             {message}
            </div>
            <MdClose className={classes.icon} onClick={handleClose}/>
        </div>
    );
};

export default SnackBar;