# placeholdify

[![NPM](https://img.shields.io/npm/v/placeholdify)](https://www.npmjs.com/package/placeholdify)
[![Build status](https://img.shields.io/github/workflow/status/alvarocastro/placeholdify/build)](https://github.com/alvarocastro/placeholdify/actions?query=workflow%3Abuild)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability/alvarocastro/placeholdify)](https://codeclimate.com/github/alvarocastro/placeholdify/maintainability)
[![Coverage status](https://img.shields.io/coveralls/github/alvarocastro/placeholdify)](https://coveralls.io/github/alvarocastro/placeholdify?branch=master)
[![Bundle size](https://img.shields.io/bundlephobia/min/placeholdify)](https://bundlephobia.com/result?p=placeholdify)
[![Code style: XO](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Release: Semantic](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Simple function to put placeholders in strings.

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Support](#support)

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

## Contributing

Contributions are always welcome! Please run `npm test` beforehand to ensure everything is ok.

## Support

If you use this package please consider starring it :)
