import { useMemo, useEffect } from 'react';
import classes from './styles.module.css';
import CloseIcon from '../../assests/closeIcon';
import ErrorIcon from '../../assests/errorIcon';
import InfoIcon from '../../assests/infoIcon';
import SuccessIcon from '../../assests/successIcon';
import WarningIcon from '../../assests/warningIcon';

const SnackBar = props => {
    const { message, severity, handleClose } = props;

    useEffect(() => setTimeout(handleClose, 3000));

    const selectSeverityIcon = useMemo(() => {
        switch (severity) {
        case 'info':
            return <InfoIcon />;
        case 'error':
            return <ErrorIcon />;
        case 'warning':
            return <WarningIcon />;
        default:
            return <SuccessIcon />;
        }
    }, [severity]);

    return <div className={classes.container} severity={severity} onClose={handleClose} >
        <div className={classes.icon}>
            {selectSeverityIcon}
        </div>
        <div className={classes.content}>
            {message}
        </div>
        <CloseIcon handleClose={handleClose} />
    </div>;
};

export default SnackBar;