const isEmptyString = value => value===null || value===undefined || (typeof value === 'string' && value.trim() === '') ;

export default isEmptyString;