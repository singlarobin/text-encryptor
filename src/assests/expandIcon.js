const ExpandIcon = props => {
    const { height, width, fill, strokeColor, strokeWidth, strokeLinecap, strokeLinejoin, onClick } = props;
    return <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 24 24" onClick={onClick}
        fill={fill} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}>
        <path  d="M0 0h24v24H0z"  />
        <polyline points="8 7 12 3 16 7" />
        <polyline points="8 17 12 21 16 17" />
        <line x1="12" y1="3" x2="12" y2="21" />
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