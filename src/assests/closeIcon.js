const CloseIcon = props =>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" height='1.5rem' width='1.5rem'
        fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={props.handleClose}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
    </svg>;

export default CloseIcon;