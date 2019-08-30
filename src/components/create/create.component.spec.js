import React from 'react';
import Create from './create.component.js'
import { mount, shallow } from 'enzyme';

describe ('<Create />', () => {
    it (`should contain the Create component`, () => {
        const component = shallow(<Create />);
        expect((component).exists()).toBe(true);
    });
});