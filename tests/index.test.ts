import stringTime from '../src'

describe('stringTime function', () => {
  it('should return expected seconds, hour, minutes, string, object and array', () => {
    expect(stringTime('1:59:60')).toEqual({
      totalHours: 2,
      totalMinutes: 120,
      totalSeconds: 7200,
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
    expect(() => stringTime('1:2:2:2')).toThrowError(
      `Given time 1:2:2:2 is invalid`
    )
  })

  it('should throw an error if invalid time is passed', () => {
    expect(() => stringTime('1:23:100')).toThrowError(
      `Given time 1:23:100 is invalid. Second can't be greater than 60`
    )
    expect(() => stringTime('1:100:10')).toThrowError(
      `Given time 1:100:10 is invalid. Minute can't be greater than 60`
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
  })

  it('should return string on object', () => {
    expect(stringTime.reverse({ hour: 2, minute: 0, second: 1 })).toBe(
      '02:00:01'
    )
  })

  it('should return string on seconds, hour and minutes', () => {
    expect(stringTime.reverse({ seconds: 7200 })).toBe('02:00:00')
    expect(stringTime.reverse({ hours: 2 })).toBe('02:00:00')
    expect(stringTime.reverse({ minutes: 120 })).toBe('02:00:00')
  })
})
