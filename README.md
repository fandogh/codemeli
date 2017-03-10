# CodeMeli
[![CircleCI](https://img.shields.io/circleci/project/github/fandogh/codemeli.svg?style=flat-square)](https://circleci.com/gh/fandogh/codemeli)
[![npm](https://img.shields.io/npm/v/codemeli.svg?style=flat-square)](https://www.npmjs.com/package/codemeli)
[![npm](https://img.shields.io/npm/dt/codemeli.svg?style=flat-square)](https://www.npmjs.com/package/codemeli)


National number validator for Iranians.

**Node.js**

Get package from npm :
```bash
npm install --save codemeli
# or using yarn
yarn add codemeli
```

**Browser**

Add this tag:
```html
<script src="https://unpkg.com/codemeli/lib/codemeli.js"></script> 
```

## API
This packages exports `codemeli(code,returnObj)` function: (`xxxxxxxxxx` is just for demo only)

**code**
Input national number value. it can be string or number, both are supported.

**[return value]**
If for any reason input is invalid it will return `null` Otherwise It will return a formatted **10 digits** code.

If returnObj is true (defaults to `false`) function will return an object with this fields instead:
- code
- parity
- city_code
- uid

## Example

```js
const codemeli = require('codemeli');

var inputValue='xxxxxxxxxx'; // TODO: Change this value

// Simple usage
const national_number = codemeli(inputValue);
console.log(national_number); // xxxxxxxxxx

// Object style
const national_number_obj = codemeli(inputValue, true);
console.log(national_number_obj);
/*
{ code: 'xxxxxxxxxx',
  parity: 'x',
  city_code: 'xx',
  uid: 'xxxxxxx' }
*/
``` 

## Algorithm
Parity checking algorithm extracted from an article from [aliarash.com](http://www.aliarash.com/article/codemeli/codemeli.htm)
(Also available [here](https://fandogh.github.io/codemeli/codemeli.html))

## LICENSE
MIT License Copyright (c) 2017 Fandogh - [Pooya Parsa](mailto:pooya@pi0.ir) - [Ali Arash](mailto:admin@aliarash.com).
