import Input from '../input/index';
import Select from '../select/index';
import Button from '../button/index';
import { useState } from 'react';

const Generate = () => {
    const [inputTextVal, setInputTextVal] = useState('');
    const [validity,setValidity] = useState('15 Minutes');
    const handleInputTextChange = value => setInputTextVal(value);
    const handleValidityChange = value => setValidity(value);

    return (
        <div>
            <Input inputTextVal={inputTextVal} handleInputTextChange={handleInputTextChange} />
            <Select handleValidityChange={handleValidityChange} />
            <Button validity={validity} inputTextVal={inputTextVal} handleInputTextChange={handleInputTextChange}  />
        </div>
    );
};

export default Generate;