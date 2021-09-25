const Rectangle = props => {
    const { darkTheme, style } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        style={style} viewBox="0 0 301.017 430.294">
        <defs>
            <linearGradient id="linear-gradient" x1="0.956" y1="0.926" x2="0" y2="-0.029"
                gradientUnits="objectBoundingBox">
                {darkTheme ? <stop offset="0" stopOpacity="0" />
                    : <stop offset="0" stopColor="#fff" stopOpacity="0" />}
                {darkTheme ? <stop offset="1" stopColor="#fff" stopOpacity="0.102" />
                    : <stop offset="1" stopColor="#fff" />}
            </linearGradient>
            <filter id="Rectangle_1">
                <feOffset dx="2" dy="5" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feFlood floodColor="#fff" floodOpacity="0.161" result="color" />
                <feComposite operator="out" in="SourceGraphic" in2="blur" />
                <feComposite operator="in" in="color" />
                <feComposite operator="in" in2="SourceGraphic" />
            </filter>
        </defs>
        <g data-type="innerShadowGroup">
            <rect id="Rectangle_1-2" data-name="Rectangle 1" width="430.294" height="301.017" rx="25"
                transform="translate(0 430.294) rotate(-90)" fill="url(#linear-gradient)" />
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_1)">
                <rect id="Rectangle_1-3" data-name="Rectangle 1" width="430.294" height="301.017" rx="25"
                    transform="translate(0 430.29) rotate(-90)" fill="#fff" />
            </g>
        </g>
    </svg>;
};



export default Rectangle;




