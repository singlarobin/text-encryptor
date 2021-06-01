import classes from './styles.module.css';

const selectOptions=[
    {'name': '15 Minutes', 'value': '15'},
    {'name': '30 Minutes', 'value': '30'},
    {'name': '1 Hour', 'value': '60'},
    {'name': '3 Hour', 'value': '180'},
    {'name': '6 Hour', 'value': '360'},
    {'name': '12 Hour', 'value': '720'},
    {'name': '1 Day', 'value':  '1440'}
];  

const Select = props =>{
    const {handleValidityChange} = props;
    const handleChange= e => handleValidityChange(e.target.value);
    return(
        <div className={classes.container}>
            <label> Valid for: </label>
            <select name='validity' onChange={handleChange}>
                {
                    selectOptions.map((obj,index)=> (<option key={index} value={obj.name}>{obj.name}</option>))
                }
            </select>
            
        </div>
    );
};

export default Select;