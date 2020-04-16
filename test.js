import test from 'ava';
import numberEpsilon from './';

test('main', t => {
	t.is(typeof numberEpsilon, 'number');
});
