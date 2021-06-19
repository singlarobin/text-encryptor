import React from 'react';
import classes from './styles.module.css';
import { VALID_FOR_OPTIONS } from '../constants';

const Select = React.memo(props => {
    const { handleValidityChange } = props;
    const handleChange= e =>  handleValidityChange(e.target.value);
    
    return <div className={classes.selectContainer}>
        <label className={classes.selectLabel}> Valid for: </label>
        <select className={classes.selectContent} name='validity' onChange={handleChange}>
            {Object.entries(VALID_FOR_OPTIONS).map(([key, obj]) => 
                <option className={classes.selectOptions} key={key} value={obj.value}>{obj.name}</option>)}
        </select>
    </div>;
});

export default Select;