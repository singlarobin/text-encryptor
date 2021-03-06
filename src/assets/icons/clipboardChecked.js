const ClipBoardChecked = (props) => {
    const { color, height, width } = props;

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke={color}
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            style={{ transition: 'stroke 0.15s' }}
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2' />
            <rect x='9' y='3' width='6' height='4' rx='2' />
            <path d='M9 14l2 2l4 -4' />
        </svg>
    );
};

export default ClipBoardChecked;

ClipBoardChecked.defaultProps = {
    color: '#FFF',
    height: 16,
    width: 16,
};
