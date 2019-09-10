const test = require('ava');
const p = require('.');

test('works without placeholders', t => {
	t.is(p('Proin vel bibendum diam'), 'Proin vel bibendum diam');
	t.is(p('Vestibulum feugiat fermentum', 'wat'), 'Vestibulum feugiat fermentum');
});

test('works with an empty string', t => {
	t.is(p(''), '');
	t.is(p('', 'wat'), '');
});

test('works with same amount of placeholders and values', t => {
	t.is(p('Quisque {0} lectus {1} {2} gravida', 'vel', 'imperdiet', 'ex'), 'Quisque vel lectus imperdiet ex gravida');
	t.is(p('Maecenas {0} velit {2} {1}', 'at', 'tortor', 'vitae'), 'Maecenas at velit vitae tortor');
	t.is(p('{1} efficitur justo {0}', 'et', 'Pellentesque'), 'Pellentesque efficitur justo et');
	t.is(p('Vivamus {0} massa', 'lacus'), 'Vivamus lacus massa');
});

test('should do a simultaneous replacement', t => {
	t.is(p('{0}{1}', '{1}', '{0}'), '{1}{0}');
});

test('works with more placeholders than values', t => {
	t.is(p('Quisque {0} lectus {1} {2} gravida', 'vel', 'imperdiet'), 'Quisque vel lectus imperdiet {2} gravida');
});

test('works with fewer placeholders than values', t => {
	t.is(p('Quisque {0} lectus {1} ex gravida', 'vel', 'imperdiet', 'ex'), 'Quisque vel lectus imperdiet ex gravida');
});

test('works with numbers as values', t => {
	t.is(p('1 2 {0} 4 5', 3), '1 2 3 4 5');
	t.is(p('1 {1} 3 {0} 5', 4, 2), '1 2 3 4 5');
});

test('works with falsy values', t => {
	t.is(p('It\'s {0}{1}', null, '!!'), 'It\'s null!!');
	t.is(p('It\'s {0}{1}', 0, '!!'), 'It\'s 0!!');
	t.is(p('It\'s {0}{1}', false, '!!'), 'It\'s false!!');
	t.is(p('It\'s {0}{1}', '', '!!'), 'It\'s !!');
});

test('works with array values', t => {
	t.is(p('The array is {0}', []), 'The array is ');
	t.is(p('The array is {0}', [1]), 'The array is 1');
	t.is(p('The array is {0}', [0]), 'The array is 0');
	t.is(p('The array is {0}', [1, 2]), 'The array is 1,2');
});
