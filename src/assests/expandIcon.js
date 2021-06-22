import { useCallback } from 'react';
import classes from './styles.module.css';

const ExpandIcon = props => {
    const { height, width, fill, strokeColor, strokeWidth, strokeLinecap, strokeLinejoin, onClick } = props;

    const handleClick = useCallback(() => {
        var iconClasses = document.getElementById('expandIcon').classList;
        if(iconClasses.contains(classes.expandIconRotate)){
            iconClasses.remove(classes.expandIconRotate);
        }
        else{
            iconClasses.add(classes.expandIconRotate);   
        }
        onClick();
    });

    return <svg xmlns="http://www.w3.org/2000/svg" id='expandIcon' height={height} width={width} viewBox="0 0 24 24" 
        onClick={handleClick} fill={fill} stroke={strokeColor} strokeWidth={strokeWidth} 
        strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="7" y1="21" x2="7" y2="3" />
        <path d="M20 18l-3 3l-3 -3" />
        <path d="M4 18l3 3l3 -3" />
        <line x1="17" y1="21" x2="17" y2="3" />
    </svg>;
};

export default ExpandIcon;

ExpandIcon.defaultProps = {
    height: '1rem',
    width: '1rem',
    fill: 'none',
    strokeColor: '#888',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
};