/**
 * Calculate the mutliples with the math % for the current number, which checks the reminder 0
*/
export const getMultiplesFromRange = (number, numberList) => {
  return numberList.filter(current => current % number === 0)
}

/**
 * Get the numbers from 1 to max number (i.e 144)
*/
export const getNumbers = (max) => {
  return Array.from(Array(max), (_, idx) => idx + 1)
}