import Downshift from 'downshift';
import IconButton from '../iconButton';
import ExpandIcon from '../../assests/expandIcon';
import classes from './styles.module.css';
import { VALID_FOR_OPTIONS } from '../constants';
import { themed } from '../../utils/theme';
import { useEffect } from 'react';

const Select = props => {
    const { validity, handleValidityChange } = props;
    const handleChange = validity => {
        //console.log(validity);
        handleValidityChange(validity[1]);
    };

    useEffect(() => {
        Object.entries(VALID_FOR_OPTIONS)
            .map((item, index) => {
                console.log(item, index);
            });
    }, []);

    //const handleInputChange = useCallback(e => setInputVal(e.target.value), [inputVal]);
    return <Downshift onChange={handleChange} selectedItem={validity}
        itemToString={validOptions => (validOptions[1] ? validOptions[1].name.toString() : '')}>
        {({
            isOpen,
            inputValue,
            selectedItem,
            getInputProps,
            getToggleButtonProps,
            getMenuProps,
            getItemProps
        }) => (<div className={classes.selectContainer}>
            <div className={classes.selectContent}>
                <input className={classes.selectInput}  {...getInputProps({
                    placeholder: 'Validity Duration',
                    // value: inputValue,
                })} />
                <IconButton {...getToggleButtonProps()} style={{
                    padding: '0rem',
                    backgroundColor: themed('#fff', '#152d3a'),
                    cursor: 'pointer',
                }}>
                    <ExpandIcon strokeColor={themed('#0e202a', '#f7f7f7')}
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                </IconButton>
            </div>
            {isOpen ? (<div className={classes.selectListContainer} {...getMenuProps()}>
                {Object.entries(VALID_FOR_OPTIONS)
                    .filter(item => !inputValue || item[1].name.toLowerCase().includes(inputValue.toLowerCase()))
                    .map((item, index) => (
                        <div className={classes.selectListItem}
                            {...getItemProps({
                                key: index,
                                index,
                                item
                            })}
                            style={{ color: selectedItem === item[1] && '#36b6ab' }}>
                            {item[1].name}
                        </div>))}
            </div>) : null}
        </div>)}
    </Downshift>;
};

export default Select;