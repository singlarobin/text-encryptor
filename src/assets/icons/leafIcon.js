const LeafIcon = props => {
    const { color, height, width } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"
        strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
        <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
    </svg>;
};

export default LeafIcon;

LeafIcon.defaultProps = {
    color: '#0E9E9C',
    height: 16,
    width: 16,
};