import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Correctly renders a component', () => {
  it('renders home component', () => {
    const component = renderer.create(<Home />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
