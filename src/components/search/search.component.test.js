import React from 'react';
import Search from './search.component.js'
import { mount, shallow } from 'enzyme';

describe ('<Search />', () => {
    const component = shallow(<Search />);

    it (`should display the list of search results`, async () => {
        expect((component).exists()).toBe(true);
    });
    
    it ('should return the tag', () => {
        expect(component.instance().tagDeveloper()).toEqual('peace');
    });
    
    it ('should return the capitalized string', () => {
        expect(component.instance().capitalizeFirstLetter('peace')).toEqual('Peace');
    });

    it ('should return the event', () => {
        expect(component.instance().tabRow()).toEqual([]);
    });
});