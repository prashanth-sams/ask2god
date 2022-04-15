import React from 'react';
import Timeline from './timeline.component.js'
import { mount, shallow } from 'enzyme';

describe ('<Timeline />', () => {
    it (`should contain the Timeline component`, async () => {
        const component = shallow(<Timeline />);
        expect((component).exists()).toBe(true);
    });
});