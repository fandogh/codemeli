# CodeMeli
> Iranians national number (NID,SSN) parser & validator 

[![CircleCI](https://img.shields.io/circleci/project/github/fandogh/codemeli.svg?style=flat-square)](https://circleci.com/gh/fandogh/codemeli)
[![npm](https://img.shields.io/npm/v/codemeli.svg?style=flat-square)](https://www.npmjs.com/package/codemeli)

**Node.js**

```bash
# Using Yarn
yarn add codemeli
# Using NPM
npm install --save codemeli
```

**Browser**

```html
<script src="https://unpkg.com/codemeli@1.0.2" type='text/javascript'></script> 
```

## API
This packages exports `codemeli(code,returnObj)` function

**code**

National number value. it can be string or number, both are supported.

**return value**

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

/*
{
  code: 'xxxxxxxxxx',
  parity: 'x',
  city_code: 'xx',
  uid: 'xxxxxxx' 
}
*/
console.log(national_number_obj);
``` 

## Algorithm
Parity checking algorithm extracted from an article from [aliarash.com](http://www.aliarash.com/article/codemeli/codemeli.htm)
(Also available [here](https://fandogh.github.io/codemeli/codemeli.html))

## City & State DB [WIP]
Unfortunately there is no public official db of city codes and there was typos in unofficial ones.
I tried my best to detect typos by both comparing all of them and user comments.
Here is the list of discovered references:

- [yasa.co](https://www.yasa.co/%D8%A7%D8%AF%D8%A7%D8%B1%D9%87-%D8%AB%D8%A8%D8%AA-%D8%A7%D8%AD%D9%88%D8%A7%D9%84/%DA%A9%D8%AF-%D9%85%D9%84%DB%8C-%D9%88-%D8%B4%D9%87%D8%B1-%D9%85%D8%AD%D9%84-%D8%B5%D8%AF%D9%88%D8%B1-%D8%A2%D9%86-%D8%B4%D9%87%D8%B1-%D9%85%D8%AD%D9%84-%D8%AA%D9%88%D9%84%D8%AF)
- [police10.blog.ir](http://police10.blog.ir/post/220/Search%20Iranian%20national%20code%20for%20each%20city)
- [it-office.ir](http://www.it-office.ir/index.php?option=com_content&view=article&id=133&Itemid=794)
- [codemelli.blogfa.com](http://codemelli.blogfa.com/post-2.aspx)
 
Please check [lib/city_db.js](lib/citiy_db.js) and [docs/missing_cities.txt](docs/missing_cities.txt) for more info.

## Read More
- [Wikipedia](https://en.wikipedia.org/wiki/Iranian_national_identity_card)
- [Wikipedia + Algorithm (Persian)](https://en.wikipedia.org/wiki/Iranian_national_identity_card)
- [IR Family](http://irfamily.com/iranian-national-identity-card/)
- [History of iranian id    entify cards (Persian)](http://www.farsnews.com/newstext.php?nn=13941107000664)

## Related projects
- [rghorbani/node-iranian-ssn](https://github.com/rghorbani/node-iranian-ssn)

## LICENSE
MIT License Copyright (c) 2017 Fandogh - [Pooya Parsa](mailto:pooya@pi0.ir)
