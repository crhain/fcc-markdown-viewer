import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import App from '../../components/App';

describe('App', ()=>{
  it('renders without crashing', () => {
    mount(<App />);
  });

  it('updates preview window with text entered into input window', ()=>{
    const wrapper = mount(<App />);
    const textInput = wrapper.find('#text-input');    
    textInput.simulate('change', {target:{value:'Hello World'}});    
    expect(textInput.text()).toEqual('Hello World');        
  });

  it('shows updated text in preview window', ()=>{
    const wrapper = mount(<App />);
    const textInput = wrapper.find('#text-input');
    const textPreview = wrapper.find('#preview-window');
    const html = "<div id=\"preview-window\"><p>Hello World</p>\n</div>";
      
    textInput.simulate('change', {target:{value:'Hello World'}});    
    expect(textPreview.html().trimRight()).toEqual(html);
    expect(textPreview.text().trimRight()).toEqual("Hello World");        
  });

});

