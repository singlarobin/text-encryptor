import classes from './styles.module.css';

const CloseIcon = props => {
    const { height, width, fillColor, strokeColor, strokeWidth, onClick } = props;

    return <div className={classes.close} onClick={onClick}>
        <svg xmlns='http://www.w3.org/2000/svg' height={height} width={width} viewBox='0 0 24 24'>
            <path fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} d='M6 18L18 6M6 6l12 12' />
        </svg>
    </div>;
};

export default CloseIcon;

CloseIcon.defaultProps = {
    height: '1.5rem',
    width: '1.5rem',
    fillColor: 'none',
    strokeColor: '#fff',
    strokeWidth: 1.5,
};