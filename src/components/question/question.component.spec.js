import React from 'react';
import Question from './question.component.js.js';
import { mount, shallow } from 'enzyme';

describe ('<Question />', () => {
    it (`should display the list of questions results`, () => {
        const component = shallow(<Question />);
        expect((component).exists()).toBe(true);
    });
});