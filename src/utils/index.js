const isEmptyString = value => !value || (typeof value === 'string' && value.trim() === '') ;

export default isEmptyString;