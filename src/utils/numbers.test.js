import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MAX_NUMBER } from '../utils/config'
import { getNumbers, getMultiplesFromRange }  from '../utils/numbers'

configure({ adapter: new Adapter() })

describe('Test mutliples', () => {
 
  //Test total numbers to be renderd
  it('Expected number return multiples ', () => {
    const numbers = getNumbers(MAX_NUMBER)
    const result = getMultiplesFromRange(50, numbers)
    expect(result).toEqual([50, 100])
  })


})



