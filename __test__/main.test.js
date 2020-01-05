/**
 * Summary.
 *  main test file.
 *
 * Description
 *  This is the main test file
 *
 * @file   This main test file for class object-property-extensions.
 * @author teeeemoji.
 * @since 2019-10-21
 */
import {hasOwnProperty, safeGet, safeSet} from '../index'

const TEST_OBJ = {
  a: null,
  one: {
    two: {
      three: 4
    }
  },
  arr: [
    {
      value: 2
    }
  ]
}

describe('hasOwnProperty', () => {
  let testObj
  beforeEach(() => {
    testObj = Object.assign({}, TEST_OBJ)
  })

  test('hasOwnProperty one.two.three', () => {
    expect(hasOwnProperty(testObj, 'one.two.three')).toBeTruthy()
  })
  test('not hasOwnProperty one.two.three.four', () => {
    expect(hasOwnProperty(testObj, 'arr.1.value')).not.toBeTruthy()
  })
})
describe('safeGet', () => {
  let testObj
  beforeEach(() => {
    testObj = Object.assign({}, TEST_OBJ)
  })

  test('safeGet one.two.three', () => {
    expect(safeGet(testObj, 'one.two.three')).toBe(TEST_OBJ.one.two.three)
  })
  test('safeGet arr.0.value', () => {
    expect(safeGet(testObj, 'arr.0.value')).toBe(TEST_OBJ.arr[0].value)
  })
  test('safeGet arr.1.value', () => {
    expect(safeGet(testObj, 'arr.1.three.four')).toBeUndefined()
  })
})
describe('safeSet', () => {
  const newVal = 1
  let testObj
  beforeEach(() => {
    testObj = Object.assign({}, TEST_OBJ)
  })

  test('safeSet one.two.three', () => {
    expect(safeSet(testObj, 'one.two.three', newVal)).toBeTruthy()
    expect(testObj.one.two.three).toBe(newVal)
  })
  test('safeSet arr.0.value', () => {
    expect(safeSet(testObj, 'arr.0.value', newVal)).toBeTruthy()
    expect(testObj.arr[0].value).toBe(newVal)
  })
  test('safeSet arr.1.value', () => {
    expect(safeSet(testObj, 'arr.1.value')).toBeFalsy()
  })
})
