import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Preview from '../../components/Preview';

describe('Preview', ()=>{
    it('renders without crashing', ()=>{
        shallow(<Preview text=''/>);
    });

});