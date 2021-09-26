const EmojiIcon = props => {
    const { color, height, width } = props;
    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"
        strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="9" y1="10" x2="9.01" y2="10" />
        <line x1="15" y1="10" x2="15.01" y2="10" />
        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
    </svg>;
};

export default EmojiIcon;

EmojiIcon.defaultProps = {
    color: '#0E9E9C',
    height: 16,
    width: 16,
};