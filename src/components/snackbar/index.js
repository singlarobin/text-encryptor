import { useState } from 'react';
import { useMemo, useEffect } from 'react';
import classes from './styles.module.css';
import IconButton from '../iconButton';
import CloseIcon from '../../assets/icons/closeIcon';
import ErrorIcon from '../../assets/icons/errorIcon';
import InfoIcon from '../../assets/icons/infoIcon';
import SuccessIcon from '../../assets/icons/successIcon';
import WarningIcon from '../../assets/icons/warningIcon';
import { SEVERITY } from '../constants';
import useAsyncExec from '../../hooks/useAsyncExec';
import { themed } from '../../utils/theme';

const SnackBar = props => {
    const { message, severity, handleClose } = props;
    const [timer, setTimer] = useState(0);

    useEffect(() => setTimer(useAsyncExec(handleClose, 3000)), []);

    const snackbarClose = () => {
        clearTimeout(timer);
        handleClose();
    };

    const selectSeverityIcon = useMemo(() => {
        switch (severity) {
        case SEVERITY.INFO:
            return <InfoIcon strokeColor={themed('#0E9E9C', '#6CFFEC')} />;
        case SEVERITY.WARNING:
            return <WarningIcon strokeColor={themed('#0E9E9C', '#6CFFEC')} />;
        case SEVERITY.ERROR:
            return <ErrorIcon strokeColor={themed('#0E9E9C', '#6CFFEC')} />;
        default:
            return <SuccessIcon strokeColor={themed('#0E9E9C', '#6CFFEC')} />;
        }
    }, [severity]);

    return <div className={classes.snackbarContainer}>
        {selectSeverityIcon}
        <div className={classes.message}>{message}</div>
        <IconButton onClick={snackbarClose}>
            <CloseIcon strokeColor={themed('#0E9E9C', '#6CFFEC')} />
        </IconButton>
    </div>;
};

export default SnackBar;