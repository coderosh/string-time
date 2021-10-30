function stringTime(str: string) {
  const arr = parseAndVerify(str)

  const seconds = arr[0] * 3600 + arr[1] * 60 + arr[2]

  const result = {
    get totalSeconds() {
      return seconds
    },
    get totalMinutes() {
      return seconds / 60
    },
    get totalHours() {
      return seconds / 3600
    },
    get string() {
      return arrToStr(secondsToArray(seconds))
    },
    get object() {
      const a = secondsToArray(seconds)
      return {
        hour: a[0],
        minute: a[1],
        second: a[2],
      }
    },
    get array() {
      return secondsToArray(seconds)
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

  return arr
}

function secondsToArray(seconds: number) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor((seconds % 3600) % 60)
  return [h, m, s]
}

function reverse(
  time?:
    | [number?, number?, number?]
    | { hour?: number; minute?: number; second?: number }
) {
  let seconds: number = 0
  if (Array.isArray(time)) {
    seconds = (time[0] || 0) * 3600 + (time[1] || 0) * 60 + (time[2] || 0)
  } else if (typeof time === 'object') {
    seconds =
      (time.hour || 0) * 3600 + (time.minute || 0) * 60 + (time.second || 0)
  } else {
    // noop
  }

  return arrToStr(secondsToArray(seconds))
}

export { stringTime as default, reverse }
