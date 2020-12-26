import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MultiplicationGrid } from '../MultiplicationGrid'
import { MAX_NUMBER } from '../../utils/config'
import {getNumbers, getMultiplesFromRange}  from '../../utils/numbers'


configure({ adapter: new Adapter() })

describe('MultiplicationGrid', () => {
  /** Test app rendered */
  it('Expected App renders correctly', () => {
    shallow(<MultiplicationGrid />)
  })

  /** Test total numbers to be renderd */
  it(`Expected ${MAX_NUMBER} numbers to be rendered `, () => {
    const wrapper = shallow(<MultiplicationGrid />)
    expect(wrapper.find('.table__item').length).toEqual(MAX_NUMBER)
  })

  /** Test random number clicked between min and max number */
  const randomNumber = Math.floor(Math.random() * MAX_NUMBER) + 1
  const numberList = getNumbers(MAX_NUMBER)
  const totalMultiples = (getMultiplesFromRange(randomNumber, numberList)).length

  it(`Expected when the number ${randomNumber} clicked, there are ${totalMultiples} highlighted numbers `, () => {
    const wrapper = shallow(<MultiplicationGrid />)
    const clickedNumber = wrapper.find('.table__item').at(randomNumber - 1)
    clickedNumber.simulate('click')
    expect(wrapper.find('.table__item--highlight').length).toEqual(totalMultiples)
  })
})