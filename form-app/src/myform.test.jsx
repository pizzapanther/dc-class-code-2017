import React from 'react';
import { MyForm } from './myform';

import {mount, shallow, render} from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
var sinon = require("sinon");
var sinonChai = require("sinon-chai");

chai.use(sinonChai);
chai.use(chaiEnzyme());

var expect = chai.expect;

test('My form test', () => {
  var on_add = sinon.spy();
  
  const wrapper = shallow(
    <MyForm contacts={['contact1']} onAdd={on_add} edit_id={1}/>
  );
  
  expect(wrapper.instance().props.contacts)
    .deep.equal(['contact1']);
    
  expect(wrapper)
    .to.have.state('color').equal('blue');
  
  wrapper.instance().update_select({}, 0, 'red');
  
  expect(wrapper)
    .to.have.state('color').equal('red');
    
  var prevent_default = sinon.spy();
  wrapper.instance().handleSubmit(
    {preventDefault: prevent_default}
  );
  
  expect(on_add).to.not.have.been.calledOnce;
  expect(prevent_default).to.have.been.calledOnce;
});