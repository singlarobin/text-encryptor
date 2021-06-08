const DESCRIPTION_VALUE = `Excepteur pariatur nulla in ulla
mco aliqua ea cupidatat incididunt proident culpa sint non exercitation deserunt dolor. 
Voluptate voluptate dolor reprehenderit laboris fugiat laboris consequat id ex ullamco ad duis elit. 
Irure do sint sint do veniam aliqua consequat est deserunt ullamco. 
Minim ut commodo exercitation deserunt sunt qui proident culpa ad ex tempor aliqua do irure. 
Et ullamco deserunt minim adipisicing et est dolor.
`;

const VALID_FOR_OPTIONS = Object.freeze({
    MIN_15 : { 'name': '15 Minute', 'value': '15' }, //Value is in minutes
    MIN_30 : { 'name': '30 Minute', 'value': '30' },
    HOUR_1 : { 'name': '1 Hour', 'value': '60' },
    HOUR_3 : { 'name': '3 Hour', 'value': '180' },
    HOUR_6 : { 'name': '6 Hour', 'value': '360' },
    HOUR_12 : { 'name': '12 Hour', 'value': '720' },
    DAY_1 : { 'name': '1 Day', 'value':  '1440' }
});

const SEVERITY = Object.freeze({
    INFO: 1,
    WARNING: 2,
    ERROR: 3,
    SUCCESS: 4
});

export {
    DESCRIPTION_VALUE,
    VALID_FOR_OPTIONS,
    SEVERITY
};