import React from 'react';
import <%= upperCaseName %> from '../src';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';

/*
 * 测试点（渲染，初始化，交互）
 * 1.render结构是否正常
 * 2.检查点击事件，反馈是否正常
 */

let onClick = sinon.spy();
const component = <<%= upperCaseName %> />;
describe('Test <%= upperCaseName %>', () => {

    it('render the state', () => {

        const wrapper = shallow(component);
        const wrapperClass = wrapper.find('div');

        expect(wrapperClass.length >= 1);
        
    })

})