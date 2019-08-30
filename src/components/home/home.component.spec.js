import React from 'react';
import Home from './home.component.js'
import { mount, shallow } from 'enzyme';

describe ('<Home />', () => {
    it (`should contain the Home component`, () => {
        const component = shallow(<Home />);
        expect((component).exists()).toBe(true);
    });
});