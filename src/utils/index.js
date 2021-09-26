const isEmptyString = value => !value || (typeof value === 'string' && value.trim() === '');

const isEmptyObject = value => !value;

const copyText = (textToCopy) => {
    let textArea = document.createElement('textarea');
    let error = null;
    textArea.value = textToCopy;
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        error = err;
    }
    document.body.removeChild(textArea);
    return error;
};

const throttle = (cb, delay, ...args) => {
    let shouldCallCb = true;
    const prevArgs = args;
    // eslint-disable-next-line no-unused-vars
    return function () {
        const context = this;
        const newArgs = [].slice.apply(arguments);
        if (shouldCallCb) {
            cb.apply(context, [...prevArgs, ...newArgs]);
            shouldCallCb = false;
            setTimeout(() => {
                shouldCallCb = true;
            }, delay);
        }
    };
};

export {
    isEmptyString,
    isEmptyObject,
    copyText,
    throttle,
};
