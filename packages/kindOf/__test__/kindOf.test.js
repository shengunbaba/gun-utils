import {expect, test} from '@jest/globals';
import kindOf from '../lib/kindOf';

test('2 equal number', () => {
    expect(kindOf(2)).toBe('number');
});

expect(kindOf({})).toBe('object');

expect(kindOf(null)).toBe('null');

expect(kindOf(Symbol())).toBe('symbol');

expect(kindOf(function() {})).toBe('function');

expect(kindOf(function* () {})).toBe('generatorFunction');

expect(kindOf(new Promise(resolve => {}))).toBe('promise');

expect(kindOf(new WeakMap())).toBe('weakMap');

expect(kindOf(new Uint8ClampedArray())).toBe('uint8ClampedArray');

const mapIterator = (new Map())[Symbol.iterator]();
expect(kindOf(mapIterator)).toBe('mapIterator');

const strIterator = String('')[Symbol.iterator]();
expect(kindOf(strIterator)).toBe('stringIterator');

const allLastName = {
    names: ['赵', '钱'],
    [Symbol.iterator]: function() {
        const names = this.names;
        let index = 0;
        return {
            next() {
                return {
                    value: names[index],
                    done: index++ >= names.length,
                };
            },
        };
    },
};

expect(kindOf(allLastName)).toBe('object');


