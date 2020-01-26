import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
  const text = 'Button';

  function onClick() {
    console.log('clicked');
  }

  let component;

  beforeEach(() => {
    component = shallow(<Button text={text} onClick={onClick} />);
  });

  afterEach(() => {

  });

  it('renders', () => {
    expect(component.find('input').length).toBe(1);
  });
});
