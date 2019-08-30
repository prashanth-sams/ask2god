import React from 'react';
import Index from './index.component.js'
import { mount, shallow } from 'enzyme';

describe ('<Index />', () => {
    it (`should contain the Index component`, () => {
        const component = shallow(<Index />);
        expect((component).exists()).toBe(true);
    });
});