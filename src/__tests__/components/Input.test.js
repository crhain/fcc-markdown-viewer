import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import Input from '../../components/Input';

describe('Input', ()=>{

    it('renders without crashing', ()=>{
        shallow(<Input />);
    });
    
});