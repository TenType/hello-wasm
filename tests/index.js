import assert from 'assert';
import { fib } from '../public/build/out.js';

const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

for (let i = 0; i < 10; i++) {
    assert.strictEqual(expected[i], fib(i));
}

console.log('All tests passed :)');
