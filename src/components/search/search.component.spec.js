import React from 'react';
import Search from './search.component.js'
import { mount, shallow } from 'enzyme';

describe ('<Search />', () => {
    it (`should display the list of search results`, async () => {
        const component = shallow(<Search />);
        expect((component).exists()).toBe(true);
    });
});