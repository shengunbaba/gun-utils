type Ret = 'undefined' | 'string' | 'number' | 'null' | 'symbol' | 'boolean' | 'array' | 'function' | 'object' |
    'unKnow'

function ifArray<T>(value: T): boolean {
    if (Array.isArray) {
        return Array.isArray(value)
    }
    return value instanceof Array;
}

export default function kindOf<T>(value: T): Ret {

    if (value === void 0) return 'undefined';

    if (value === null) return 'null'

    if (typeof value === 'string') return 'string';

    if (typeof value === 'number') return 'number';

    if (typeof value === 'boolean') return 'boolean';

    if (typeof value === 'symbol') return 'symbol';

    if (typeof value === 'function') return 'function'

    if (ifArray(value)) return 'array'

    if (typeof value === 'object') return 'object'

    return 'unKnow'
}
