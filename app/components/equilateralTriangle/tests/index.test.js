import React from 'react';
import { mount } from 'enzyme';

import ListItem from '../index';

describe('<ListItem />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<ListItem className="test" />);
    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });
});