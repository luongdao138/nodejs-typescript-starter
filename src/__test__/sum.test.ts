import { sum } from '../sum'
import { dulicateNumberArr } from '../utils/duplicate'

describe('test sum function', () => {
  it('test sum', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('test sum 2', () => {
    expect(sum(3, 6)).toBeGreaterThan(2)
  })
})

describe('test duplicate function', () => {
  it('test duplicate 1', () => {
    expect(dulicateNumberArr([1, 2, 4])).toHaveLength(3)
    expect(dulicateNumberArr([1, 2, 4])[0]).toBe(2)
    expect(dulicateNumberArr([1, 2, 4])[1]).toBe(4)
    expect(dulicateNumberArr([1, 2, 4])[2]).toBe(8)
  })
})
