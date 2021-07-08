const isEmptyString = value => !value || (typeof value === 'string' && value.trim() === '');

const copyText = (textToCopy) => {
    let textArea = document.createElement('textarea');
    let error='';
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
        console.log(err);
        error = err;
    }
    document.body.removeChild(textArea);
    return error;
};

export {
    isEmptyString,
    copyText
};
