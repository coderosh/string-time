import stringTime from '../src'

describe('stringTime function', () => {
  it('should return expected seconds, hour, minutes, string, object and array', () => {
    expect(stringTime('1:59:60')).toEqual({
      totalHours: 2,
      totalMinutes: 120,
      totalSeconds: 7200,
      string: '02:00:00',
      object: {
        hour: 2,
        minute: 0,
        second: 0,
      },
      array: [2, 0, 0],
    })
  })

  it('should work if passed minute/second is greater than 60', () => {
    expect(stringTime('02:110:110').string).toBe('03:51:50')
  })

  it('should throw error if more than 3 units of time is passed', () => {
    expect(() => stringTime('1:2:2:2')).toThrowError(
      `Given time 1:2:2:2 is invalid`
    )
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

describe('stringTime.reverse function', () => {
  it('should return string on array', () => {
    expect(stringTime.reverse([0, 1, 11])).toBe('00:01:11')
    expect(stringTime.reverse([0, undefined, 20])).toBe('00:00:20')
    expect(stringTime.reverse([0, 10])).toBe('00:10:00')
  })

  it('should return string on object', () => {
    expect(stringTime.reverse({ hour: 2, minute: 0, second: 1 })).toBe(
      '02:00:01'
    )
  })

  it('should return string on second or hour or minute only', () => {
    expect(stringTime.reverse({ second: 7200 })).toBe('02:00:00')
    expect(stringTime.reverse({ hour: 2 })).toBe('02:00:00')
    expect(stringTime.reverse({ minute: 120 })).toBe('02:00:00')
  })

  it('should return 0 if time is not passed', () => {
    expect(stringTime.reverse()).toBe('00:00:00')
  })
})
