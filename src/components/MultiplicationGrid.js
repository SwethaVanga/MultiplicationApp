import React, { useState } from 'react'
import { Container, Row} from 'react-bootstrap'
import { MAX_NUMBER } from '../utils/config'
import { getNumbers, getMultiplesFromRange } from '../utils/numbers'

export const MultiplicationGrid = () => {
  let [multiples, setMultiples] = useState([])
  const numbers = getNumbers(MAX_NUMBER)

  /**
	 * The multiples of current number been calculated and set and highlighted on click event
	*/
  const handleClickNumber = (number) => {
    const multiples = getMultiplesFromRange(number, numbers)
    setMultiples(multiples)
  }

  return (
    <Container>
      <h1 className='container__heading'>
				Multiplication app
      </h1>
      <Row className='container__table'>
        {numbers.map((number, i) => (
          <button
            key={i}
            className={`table__item ${multiples.includes(number) ? 'table__item--highlight' : ''}`}
            aria-pressed={multiples.includes(number)}
            onClick={() => handleClickNumber(number)}>{number}
          </button>
        ))}
      </Row>
    </Container>
  )
}
