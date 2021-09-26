const LockIcon = props => {
    const { color, height, width } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"
        strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="16" r="1" />
        <path d="M8 11v-5a4 4 0 0 1 8 0" />
    </svg>;
};

export default LockIcon;

LockIcon.defaultProps = {
    color: '#0E9E9C',
    height: 16,
    width: 16,
};
