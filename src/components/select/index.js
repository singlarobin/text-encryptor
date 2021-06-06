import React from 'react';
import classes from './styles.module.css';
import { selectOptions } from '../constants';

const Select = React.memo(props => {
    const { handleValidityChange } = props;
    const handleChange= e => handleValidityChange(e.target.value);
    
    return <div className={classes.selectContainer}>
        <label> Valid for: </label>
        <select name='validity' onChange={handleChange}>
            {Object.entries(selectOptions).map(([key, obj]) => <option key={key} value={obj.value}>{obj.name}</option>)}
        </select>
    </div>;
});

export default Select;