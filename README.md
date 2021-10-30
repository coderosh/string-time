# string-time

Convert time string into seconds, minutes, hour, array or object and vice versa.

<a href="https://www.npmjs.com/package/@coderosh/string-time"><img alt="NPM" src="https://img.shields.io/npm/v/@coderosh/string-time" /></a>
<a href="https://github.com/coderosh/string-time"><img alt="MIT" src="https://img.shields.io/badge/license-MIT-blue.svg" /></a>
<a href="#"><img alt="CI" src="https://img.shields.io/github/workflow/status/coderosh/string-time/CI"></a>
<a href="https://github.com/coderosh/string-time"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" /></a>
<a href="https://github.com/coderosh/string-time"><img src="https://img.shields.io/badge/types-typescript-blue.svg" alt="Typescript" /></a>

## Installation

Install via npm

```sh
npm install @coderosh/string-time
```

Or via yarn

```sh
yarn add @coderosh/string-time
```

## Usage

```js
import stringTime, { reverse } from '@coderosh/string-time'
```

### stringTime

```js
const time = stringTime('1:59:60')

time.array // [ 2, 0, 0 ]
time.string // 02:00:00
time.object // { hour: 2, minute: 0, second: 0 }
time.totalHours // 2
time.totalMinutes // 120
time.totalSeconds // 7200

stringTime('').string // 00:00:00
stringTime(':1:').string // 00:01:00
stringTime('1').string // 01:00:00
stringTime('::1').string // 00:00:01
```

### reverse

```js
reverse({ second: 7200 }) // 02:00:00
reverse({ hour: 2 }) // 02:00:00
reverse({ minute: 120 }) // 02:00:00
reverse({ hour: 2, minute: 1, second: 0 }) // 02:01:00
reverse([2, 0, 1]) // 02:00:01
```
