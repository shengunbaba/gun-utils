import {expect, test} from '@jest/globals';
import kindOf from '../lib/kindOf';

test('2 equal number', () => {
    expect(kindOf(2)).toBe('number');
});

expect(kindOf({})).toBe('object');

expect(kindOf(() => {})).toBe('function');

expect(kindOf(null)).toBe('null');

expect(kindOf(Symbol())).toBe('symbol');
