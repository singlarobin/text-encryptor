import React, { useState } from 'react';
import { useMemo, useEffect } from 'react';
import classes from './styles.module.css';
import IconButton from '../iconButton';
import CloseIcon from '../../assests/closeIcon';
import ErrorIcon from '../../assests/errorIcon';
import InfoIcon from '../../assests/infoIcon';
import SuccessIcon from '../../assests/successIcon';
import WarningIcon from '../../assests/warningIcon';
import { SEVERITY } from '../constants';

const SnackBar = React.memo(props => {
    const { message, severity, handleClose } = props;
    const [timer, setTimer] = useState(0);

    useEffect(() => setTimer(setTimeout(handleClose, 3000)), []);

    const snackbarClose = () => {
        clearTimeout(timer);
        handleClose();
    };

    const selectSeverityIcon = useMemo(() => {
        switch (severity) {
        case SEVERITY.INFO:
            return <InfoIcon />;
        case SEVERITY.WARNING:
            return <WarningIcon />;
        case SEVERITY.ERROR:
            return <ErrorIcon />;
        default:
            return <SuccessIcon />;
        }
    }, [severity]);

    return <div className={classes.snackbarContainer}>
        <IconButton style={{
            backgroundColor: 'blue',
            padding: '0rem'
        }}>
            {selectSeverityIcon}
        </IconButton>
        <div className={classes.message}> {message} </div>
        <IconButton style={{
            backgroundColor: 'blue',
            padding: '0rem'
        }}>
            <CloseIcon onClick={snackbarClose} />
        </IconButton>

    </div>;
});

export default SnackBar;