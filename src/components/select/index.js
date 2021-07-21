import Downshift from 'downshift';
import IconButton from '../iconButton';
import ExpandIcon from '../../assests/expandIcon';
import classes from './styles.module.css';
import { VALID_FOR_OPTIONS } from '../constants';
import { themed } from '../../utils/theme';
import { isEmptyString } from '../../utils';

const Select = props => {
    const { validity, handleValidityChange } = props;

    return <Downshift onChange={e => handleValidityChange(e)} selectedItem={validity}
        itemToString={validOptions => validOptions ? validOptions.name.toString() : ''}>
        {({
            isOpen,
            inputValue,
            selectedItem,
            highlightedIndex,
            getInputProps,
            getToggleButtonProps,
            getMenuProps,
            getItemProps,
        }) => (<div className={classes.selectContainer}>
            <div className={classes.selectContent}>
                <input className={classes.selectInput} {...getInputProps({
                    placeholder: 'Validity Duration',
                    value: inputValue,
                })} />
                <IconButton {...getToggleButtonProps()} style={{
                    padding: '0rem',
                    cursor: 'pointer',
                }}>
                    <ExpandIcon strokeColor={themed('#0e202a', '#f7f7f7')}
                        style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                            transition: 'transform 0.5s ease-in-out'
                        }} />
                </IconButton>
            </div>
            {isOpen ? <div className={classes.selectListContainer} {...getMenuProps()}>
                {Object.entries(VALID_FOR_OPTIONS)
                    .filter(item => isEmptyString(inputValue) ||
                        item[1].name.toLowerCase().includes(inputValue.toLowerCase()))
                    .map((item, index) =>
                        <div className={classes.selectListItem}
                            {...getItemProps({
                                item: item[1],
                                index,
                                key: index,
                            })}
                            style={{
                                color: selectedItem === item[1] && '#36b6ab',
                                filter: highlightedIndex === index && 'brightness(90%)'
                            }}>
                            {item[1].name}
                        </div>)}
            </div> : null}
        </div>)}
    </Downshift>;
};

export default Select;