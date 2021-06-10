import { TIME_UNIT } from '../components/constants';

const isEmptyString = value => !value || (typeof value === 'string' && value.trim() === '') ;
const convertToMilliSeconds = (name, value) => {
    const minToMilliSec = 60*1000;
    const hourToMilliSec = 60*minToMilliSec;
    const dayToMilliSec = 24*hourToMilliSec;

    switch(name){
    case TIME_UNIT.MINUTE:
        return value*minToMilliSec;
    case TIME_UNIT.HOUR:
        return value*hourToMilliSec;
    case TIME_UNIT.DAY:
        return value*dayToMilliSec;
    }
};

export {
    isEmptyString,
    convertToMilliSeconds
};