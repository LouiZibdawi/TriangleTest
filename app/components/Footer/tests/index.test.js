import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<Footer />', () => {

  it('should render the name', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.text()).toContain('Loui Zibdawi');
  });
});