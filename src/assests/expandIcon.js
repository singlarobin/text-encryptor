import { useCallback } from 'react';

const ExpandIcon = props => {
    const { height, width, fill, strokeColor, strokeWidth, strokeLinecap, strokeLinejoin, style, onClick } = props;

    const handleClick = useCallback(() => {
        if (typeof (onClick) === 'function') onClick();
    });

    return <svg xmlns="http://www.w3.org/2000/svg" id='expandIcon' style={style} height={height} width={width}
        viewBox="0 0 24 24" onClick={handleClick} fill={fill} stroke={strokeColor} strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin}>
        <path stroke="none" d="M0 0h24v24H0z" />
        <polyline points="7 7 12 12 17 7" />
        <polyline points="7 13 12 18 17 13" />
    </svg>;
};

export default ExpandIcon;

ExpandIcon.defaultProps = {
    height: '1rem',
    width: '1rem',
    fill: 'none',
    strokeColor: '#0e202a',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
};