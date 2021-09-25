const Circle = props => {
    const { darkTheme, style } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        style={style} viewBox="0 0 641.362 641.362">
        <defs>
            <linearGradient id="linear-gradient" x1="1" y1="0.481" x2="0" y2="0.48"
                gradientUnits="objectBoundingBox">
                {darkTheme ? <stop offset="0" stopOpacity="0" />
                    : <stop offset="0" stopColor="#fff" stopOpacity="0" />}
                {darkTheme ? <stop offset="1" stopColor="#fff" /> : <stop offset="1" stopColor="#fff" />}
            </linearGradient>
            <filter id="Ellipse_3">
                <feOffset dx="2" dy="5" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feFlood floodColor="#fff" floodOpacity="0.161" result="color" />
                <feComposite operator="out" in="SourceGraphic" in2="blur" />
                <feComposite operator="in" in="color" />
                <feComposite operator="in" in2="SourceGraphic" />
            </filter>
        </defs>
        <g data-type="innerShadowGroup">
            <circle id="Ellipse_3-2" data-name="Ellipse 3" cx="96.425" cy="96.425" r="96.425"
                transform="matrix(0.052, 0.999, -0.999, 0.052, 192.586, 0)" fill="url(#linear-gradient)" />
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Ellipse_3)">
                <circle id="Ellipse_3-3" data-name="Ellipse 3" cx="96.425" cy="96.425" r="96.425"
                    transform="matrix(0.05, 1, -1, 0.05, 192.59, 0)" fill="#fff" />
            </g>
        </g>
    </svg>;
};

export default Circle;




