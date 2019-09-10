# placeholdify

Simple strings placeholder utility.

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

### placeholdify(format, value, ...)

#### format

Type: `string`

String containing the placeholders.<br>
Placeholders must be in the format `{n}` (example: `{0}`, `{1}`, etc.), being `n` the index of the value to insert into.

#### value

Type: `mixed`

Values to insert into the `format` string.
