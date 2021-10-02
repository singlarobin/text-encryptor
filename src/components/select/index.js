import Downshift from 'downshift';
import IconButton from '../iconButton';
import ExpandIcon from '../../assets/icons/expandIcon';
import classes from './styles.module.css';
import { VALID_FOR_OPTIONS } from '../constants';
import { themed } from '../../utils/theme';
import { isEmptyString } from '../../utils';

const Select = props => {
    const { validity, handleValidityChange, placeholder = '' } = props;

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
                    placeholder,
                    value: inputValue,
                })} />
                <IconButton {...getToggleButtonProps()}>
                    <ExpandIcon strokeColor={themed('#136A87', '#A3F8FF')}
                        style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                            transition: 'transform 0.15s'
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
                                color: selectedItem === item[1] && themed('#0E9E9C', '#A3F8FF'),
                                filter: highlightedIndex === index && 'brightness(0.9)'
                            }}>
                            {item[1].name}
                        </div>)}
            </div> : null}
        </div>)}
    </Downshift>;
};

export default Select;