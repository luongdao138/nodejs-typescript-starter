import { sum } from '../sum'

describe('test sum function', () => {
  it('test sum', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('test sum 2', () => {
    expect(sum(3, 6)).toBeGreaterThan(2)
  })
})
