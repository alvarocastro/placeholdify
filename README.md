# placeholdify
[![NPM](https://img.shields.io/npm/v/placeholdify.svg)](https://www.npmjs.com/package/placeholdify)
[![Build Status](https://travis-ci.com/alvarocastro/placeholdify.svg?branch=master)](https://travis-ci.com/alvarocastro/placeholdify)
[![codebeat badge](https://codebeat.co/badges/4c3a6f91-b2ef-419e-879e-429218325bd4)](https://codebeat.co/projects/github-com-alvarocastro-placeholdify-master)
[![Coverage Status](https://coveralls.io/repos/github/alvarocastro/placeholdify/badge.svg?branch=master)](https://coveralls.io/github/alvarocastro/placeholdify?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Simple function to put placeholders in strings.

- [Install](#install)
- [Usage](#usage)

## Install

```bash
npm install placeholdify
```

## Usage

```js
const placeholdify = require('placeholdify');

placeholdify('foo {1} baz {0}', 'qux', 'bar');
//=> foo bar baz qux
```

### placeholdify(format[, value[, ...]])

#### format

Type: `string`

String containing the placeholders.<br>
Placeholders must be in the format `{n}` (example: `{0}`, `{1}`, etc.), being `n` the index of the value to insert into.

#### value

Type: `mixed`

Values to insert into the `format` string.
