import {expect, test} from '@jest/globals';
import cloneDeep from '../lib/cloneDeep';

test('cloneDeep 2', () => {
    expect(cloneDeep(2)).toBe(2);
});
