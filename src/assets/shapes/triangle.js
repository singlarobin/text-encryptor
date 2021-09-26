const Triangle = props => {
    const { darkTheme, style } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        style={style} viewBox="0 0 458.155 440.892">
        <defs>
            <linearGradient id="linear-gradient" x1="1.01" y1="0.996" x2="0.263" y2="0.382"
                gradientUnits="objectBoundingBox">
                {darkTheme ? <stop offset="0" stopOpacity="0" />
                    : <stop offset="0" stopColor="#fff" stopOpacity="0" />}
                <stop offset="1" stopColor="#fff" />
            </linearGradient>
            <filter id="Polygon_1">
                <feOffset dx="2" dy="5" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feFlood floodColor="#fff" floodOpacity="0.161" result="color" />
                <feComposite operator="out" in="SourceGraphic" in2="blur" />
                <feComposite operator="in" in="color" />
                <feComposite operator="in" in2="SourceGraphic" />
            </filter>
        </defs>
        <g data-type="innerShadowGroup">
            <path id="Polygon_1-2" data-name="Polygon 1"
                d="M177.692,16.389a10,10,0,0,1,17.617,0L365.081,332.266A10,10,0,0,1,356.273,
            347H16.727a10,10,0,0,1-8.808-14.734Z"
                transform="translate(101.453) rotate(17)" fill="url(#linear-gradient)" />
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Polygon_1)">
                <path id="Polygon_1-3" data-name="Polygon 1"
                    d="M177.692,16.389a10,10,0,0,1,17.617,0L365.081,332.266A10,10,0,0,1,356.273,
                347H16.727a10,10,0,0,1-8.808-14.734Z"
                    transform="translate(101.45) rotate(17)" fill="#fff" />
            </g>
        </g>
    </svg>;
};

export default Triangle;