import React from 'react'
import renderer from 'react-test-renderer';
import AutoCompletedText from '../AutoCompletedText'
import { shallow, mount } from 'enzyme';
import {sinon} from 'jest-sinon'

describe('<AutoCompleteText /', () =>{


    it('Auto Text Correctly', () => {
        const tree = renderer.create(<AutoCompletedText />)
        expect(tree).toMatchSnapshot();
    })


    it('AutoCompletedText on text change', () => {
        const wrapper = shallow(<AutoCompletedText/>);
        wrapper.find('input').simulate('change', {target: {value: 'Jap'}});
        const instance = wrapper.instance();
        expect(instance.state.suggestions).toEqual(['Japan']);


    })

    it('AutoCompleted on text not selected', () => {
       const wrapper = shallow(<AutoCompletedText/>);
       const instance = wrapper.instance();
       expect(instance.state.text).toEqual('');
    })

    it('AutoCompleted on text selected', () => {
        const wrapper = mount(<AutoCompletedText value = {'Jap'}/>);
        wrapper.setState({suggestions:['Jamaica', 'Japan'], text:''})
       wrapper.find('li').first().simulate('click');
       const instance = wrapper.instance();
       expect(instance.state.text).toEqual('Jamaica');
     })

})



