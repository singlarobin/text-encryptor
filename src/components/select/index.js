import React, { useState } from 'react';
import Downshift from 'downshift';
import classes from './styles.module.css';
import { VALID_FOR_OPTIONS } from '../constants';

const Select = React.memo(props => {
    const{ handleValidityChange } = props;
    const [selectedValidity, setSelectedValidity] = useState(VALID_FOR_OPTIONS.MIN_15.name);
    const handleChange = validity => {
        setSelectedValidity(validity[1].name);
        handleValidityChange(validity[1].value);
    };

    return <Downshift onChange={handleChange} selectedItem={selectedValidity} 
        itemToString={validOptions => (validOptions? validOptions.toString(): '')}>
        {({ 
            isOpen, 
            getToggleButtonProps, 
            getLabelProps,
            getItemProps
        }) => (<div className={classes.selectContainer}>
            <label className={classes.selectLabel} {...getLabelProps}> Valid For:</label>
            <div>
                <div className={classes.selectContent} style={{ textAlign: 'center' }} {...getToggleButtonProps()}>
                    {selectedValidity}
                </div>
                <div style={{ position: 'absolute' }}>
                    {isOpen? (<div>
                        {Object.entries(VALID_FOR_OPTIONS).map((item, index) => (
                            <div className={classes.selectContent} 
                                {...getItemProps({ 
                                    key: index, 
                                    index, 
                                    item 
                                })}>
                                {item[1].name}
                            </div>))}
                    </div>): null}
                </div>
            </div>
        </div>)}
    </Downshift>;
});

export default Select;