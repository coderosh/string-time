import { stringTime } from '../src'

describe('stringTime function', () => {
  it('should return expected seconds, hour, minutes, string, object and array', () => {
    expect(stringTime('1:59:60')).toEqual({
      totalHour: 2,
      totalMinute: 120,
      totalSecond: 7200,
      string: '01:59:60',
      object: {
        hour: 1,
        minute: 59,
        second: 60,
      },
      array: [1, 59, 60],
    })
  })

  it('should throw error if more than 3 units of time is passed', () => {
    expect(() => stringTime('1:2:2:2')).toThrowError()
  })

  it('should throw an error if invalid time is passed', () => {
    expect(() => stringTime('1:23:100')).toThrowError()
  })

  it('should default the value to 0 if not passed', () => {
    expect(stringTime('').array).toEqual([0, 0, 0])
    expect(stringTime('1').array).toEqual([1, 0, 0])
    expect(stringTime('1:2').array).toEqual([1, 2, 0])
    expect(stringTime('1::1').array).toEqual([1, 0, 1])
    expect(stringTime('::1').array).toEqual([0, 0, 1])
    expect(stringTime(':1:').array).toEqual([0, 1, 0])
  })
})
