import React from 'react';
import Knowit from './knowit.component.js/index.js';
import { mount, shallow } from 'enzyme';

describe ('<Knowit />', () => {
    it (`should display the list of questions results`, () => {
        const component = shallow(<Knowit />);
        expect((component).exists()).toBe(true);
    });
});