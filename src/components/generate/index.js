import { useState } from 'react';
import Input from '../input/index';
import Select from '../select/index';
import Button from '../button/index';
import { selectOptions, buttonName } from '../utils/constants';

const Generate = () => {
    const [inputTextVal, setInputTextVal] = useState('');
    const [validity,setValidity] = useState(selectOptions[0].name);
    const handleInputTextChange = value => {
        console.log('generate: input');
        setInputTextVal(value);
    };
    const handleValidityChange = value => setValidity(value);

    return <div>
        <Input inputTextVal={inputTextVal} handleInputTextChange={handleInputTextChange} />
        <Select handleValidityChange={handleValidityChange} />
        <Button buttonName={buttonName(1)} validity={validity} 
            inputTextVal={inputTextVal} handleInputTextChange={handleInputTextChange}  />
    </div>;
};

export default Generate;