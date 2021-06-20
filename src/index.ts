export function stringTime(str: string) {
  const arr = parseAndVerify(str)

  const result = {
    get totalSecond() {
      return arr[0] * 3600 + arr[1] * 60 + arr[2]
    },
    get totalMinute() {
      return arr[0] * 60 + arr[1] + arr[2] / 60
    },
    get totalHour() {
      return arr[0] + arr[1] / 60 + arr[2] / 3600
    },
    get string() {
      return arr.map((a) => (`${a}`.length === 1 ? `0${a}` : a)).join(':')
    },
    get object() {
      return {
        hour: arr[0],
        minute: arr[1],
        second: arr[2],
      }
    },
    get array() {
      return arr
    },
  }

  return result
}

function parseAndVerify(str: string) {
  const arr = str.split(':').map((a) => (a ? +a : 0))

  if (arr.length > 3) {
    throw new Error(`Give time ${str} is invalid.`)
  } else if (arr.length === 2) {
    arr.push(0)
  } else if (arr.length === 1) {
    arr.push(0, 0)
  } else if (arr.length === 0) {
    arr.push(0, 0, 0)
  }

  for (let i = 0; i < 3; i++) {
    if (arr[i] > 60) {
      const k = i === 0 ? 'Hour' : i === 1 ? 'Minute' : 'Seconds'
      throw new Error(
        `Give time ${str} is invalid. ${k} can't be greater than 60`
      )
    }
  }

  return arr
}
