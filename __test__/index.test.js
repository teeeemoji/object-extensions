import safeget from '../index'

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

describe('safeget', () => {
  let testObj
  beforeEach(() => {
    testObj = Object.assign({}, TEST_OBJ)
  })

  test('get exist deep nested property', () => {
    expect(safeget(testObj, 'one.two.three')).toBe(TEST_OBJ.one.two.three)
  })
  test('get exist deep nested property of an Object in array', () => {
    expect(safeget(testObj, 'arr.0.value')).toBe(TEST_OBJ.arr[0].value)
  })
  test('get not exist deep nested property', () => {
    expect(safeget(testObj, 'one.two.three.four')).toBe(undefined)
  })
  test('get not exist item in array', () => {
    expect(safeget(testObj, 'arr.1.three.four')).toBe(undefined)
  })
  test('get a null property', () => {
    expect(safeget(testObj, 'a')).toBe(null)
  })
})
