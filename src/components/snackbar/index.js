import React, { useState } from 'react';
import { useMemo, useEffect } from 'react';
import classes from './styles.module.css';
import CloseIcon from '../../assests/closeIcon';
import ErrorIcon from '../../assests/errorIcon';
import InfoIcon from '../../assests/infoIcon';
import SuccessIcon from '../../assests/successIcon';
import WarningIcon from '../../assests/warningIcon';
import { SEVERITY } from '../constants';

const SnackBar = React.memo(props => {
    const { message, severity, handleClose } = props;
    const [timer, setTimer]=useState(0);

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
            return <ErrorIcon/>;
        default:
            return <SuccessIcon />;
        }
    }, [severity]);

    return <div className={classes.snackbarContainer}>
        <div className={classes.icon}>
            {selectSeverityIcon}
        </div>
        <div className={classes.message}>
            {message}
        </div>
        <CloseIcon onClick={snackbarClose} />
    </div>;
});

export default SnackBar;