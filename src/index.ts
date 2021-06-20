function stringTime(str: string) {
  const arr = parseAndVerify(str)

  const result = {
    get totalSeconds() {
      return arr[0] * 3600 + arr[1] * 60 + arr[2]
    },
    get totalMinutes() {
      return arr[0] * 60 + arr[1] + arr[2] / 60
    },
    get totalHours() {
      return arr[0] + arr[1] / 60 + arr[2] / 3600
    },
    get string() {
      return arrToStr(arr)
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

function addZero(num: number) {
  return num > 9 ? `${num}` : `0${num}`
}

function arrToStr(arr: number[]) {
  return arr.map((a) => addZero(a)).join(':')
}

function parseAndVerify(str: string) {
  const arr = str.split(':').map((a) => (a ? +a : 0))

  if (arr.length > 3) {
    throw new Error(`Given time ${str} is invalid`)
  } else if (arr.length === 2) {
    arr.push(0)
  } else if (arr.length === 1) {
    arr.push(0, 0)
  } else {
    // noop
  }

  for (let i = 1; i <= 2; i++) {
    if (arr[i] > 60) {
      const k = i === 1 ? 'Minute' : 'Second'
      throw new Error(
        `Given time ${str} is invalid. ${k} can't be greater than 60`
      )
    }
  }

  return arr
}

type Time =
  | number[]
  | { hour: number; minute: number; second: number }
  | { seconds: number }
  | { minutes: number }
  | { hours: number }

function secondsToString(seconds: number) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor((seconds % 3600) % 60)
  return `${addZero(h)}:${addZero(m)}:${addZero(s)}`
}

function reverse(time: Time) {
  if (Array.isArray(time)) {
    return arrToStr(time)
  } else if ('seconds' in time) {
    return secondsToString(time.seconds)
  } else if ('minutes' in time) {
    return secondsToString(time.minutes * 60)
  } else if ('hours' in time) {
    return secondsToString(time.hours * 3600)
  } else {
    return `${addZero(time.hour)}:${addZero(time.minute)}:${addZero(
      time.second
    )}`
  }
}

stringTime.reverse = reverse

export = stringTime
