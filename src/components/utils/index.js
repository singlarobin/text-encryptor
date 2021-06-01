const descriptionValue=`Excepteur pariatur nulla in ulla
mco aliqua ea cupidatat incididunt proident culpa sint non exercitation deserunt dolor. 
Voluptate voluptate dolor reprehenderit laboris fugiat laboris consequat id ex ullamco ad duis elit. 
Irure do sint sint do veniam aliqua consequat est deserunt ullamco. 
Minim ut commodo exercitation deserunt sunt qui proident culpa ad ex tempor aliqua do irure. 
Et ullamco deserunt minim adipisicing et est dolor.
`;

const isEmptyString= value => value===null || value===undefined || (typeof value === 'string' && value.trim() === '') ;

// export default description_value;

module.exports={
    descriptionValue,
    isEmptyString
};