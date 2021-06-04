import { useCallback } from 'react';
import classes from './styles.module.css';
import { selectOptions } from '../utils/constants';

const Select = props => {
    const { handleValidityChange } = props;
    const handleChange= useCallback( e => handleValidityChange(e.target.value));
    
    return <div className={classes.selectContainer}>
        <label> Valid for: </label>
        <select name='validity' onChange={handleChange}>
            {selectOptions.map((obj, index) => (<option key={index} value={obj.name}>{obj.name}</option>))}
        </select>
    </div>;
};

export default Select;