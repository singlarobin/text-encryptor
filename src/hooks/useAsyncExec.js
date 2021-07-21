const useAsyncExec = (cb, delay) => {
    const id = setTimeout(cb, delay);
    return id;
};

export default useAsyncExec;

useAsyncExec.defaultProps = { delay: 0 };