# string-time

Convert time string into seconds, minutes, hour, array or object.

<a href="https://www.npmjs.com/package/string-time"><img alt="NPM" src="https://img.shields.io/npm/v/string-time" /></a>
<a href="https://github.com/coderosh/string-time"><img alt="MIT" src="https://img.shields.io/badge/license-MIT-blue.svg" /></a>
<a href="#"><img alt="CI" src="https://img.shields.io/github/workflow/status/coderosh/string-time/CI"></a>
<a href="https://github.com/coderosh/string-time"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" /></a>
<a href="https://github.com/coderosh/string-time"><img src="https://img.shields.io/badge/types-typescript-blue.svg" alt="Typescript" /></a>

## Installation

Install via npm

```sh
npm install string-time
```

Or via yarn

```sh
yarn add string-time
```

## Usage

```js
const { stringTime } = require('string-time')

const time = stringTime('1:59:60')

console.log(time.object) // { hour: 1, minute: 59, second: 60 }
console.log(time.array) // [ 1, 59, 60 ]
console.log(time.string) // "01:59:60"
console.log(time.totalHours) // 2
console.log(time.totalMinutes) // 120
console.log(time.totalSeconds) // 7200
```

`stringTime` accepts only one argument and returns a object with 5 getters `object`, `array`,`string`, `totalHours`, `totalMinutes` and `totalSeconds`.

If string passed to the function has empty string then the default value will be 0.

```js
stringTime('').string // "00:00:00"
stringTime(':1:').string // "00:01:00"
stringTime('1').string // "01:00:00"
stringTime('::1').string // "00:00:01"
```

## LICENSE

MIT
