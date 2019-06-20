import sget from '../index'

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

describe('sget', () => {
  let testObj
  beforeEach(() => {
    testObj = Object.assign({}, TEST_OBJ)
  })

  test('get exist deep nested property', () => {
    expect(sget(testObj, 'one.two.three')).toBe(TEST_OBJ.one.two.three)
  })
  test('get exist deep nested property of an Object in array', () => {
    expect(sget(testObj, 'arr.0.value')).toBe(TEST_OBJ.arr[0].value)
  })
  test('get not exist deep nested property', () => {
    expect(sget(testObj, 'one.two.three.four')).toBe(undefined)
  })
  test('get not exist item in array', () => {
    expect(sget(testObj, 'arr.1.three.four')).toBe(undefined)
  })
  test('get a null property', () => {
    expect(sget(testObj, 'a')).toBe(null)
  })
})
