import React from 'react';
import { shallow} from 'enzyme'
import App from '../App'


//shallow() will test the component we are providing and ignores any child component that may be present in the component tree 

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(< App/>);
   });
});
