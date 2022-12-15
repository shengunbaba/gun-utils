export type KindOf =
    undefined
    | 'undefined'
    | 'string'
    | 'number'
    | 'null'
    | 'symbol'
    | 'boolean'
    | 'array'
    | 'function'
    | 'generatorFunction'
    | 'buffer'
    | 'date'
    | 'error'
    | 'regexp'
    | 'promise'

    | 'weakMap'
    | 'weakSet'
    | 'map'
    | 'set'

    | 'int8array'
    | 'uint8array'
    | 'uint8ClampedArray'
    | 'int16array'
    | 'uint16array'
    | 'int32array'
    | 'uint32array'
    | 'float32array'
    | 'float64array'

    | 'object'
    | 'mapIterator'
    | 'setIterator'
    | 'stringIterator'
    | 'arrayIterator'


function ifArray<T>(value: T): boolean {
    if (Array.isArray) {
        return Array.isArray(value)
    }
    return value instanceof Array;
}

function ctorName(val: any): string | null {
    return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isGeneratorFn(val: Function): boolean {
    return ctorName(val) === 'GeneratorFunction';
}

function isBuffer(val: any): boolean {
    if (val?.constructor && typeof val.constructor?.isBuffer === 'function') {
        return val.constructor!.isBuffer(val);
    }
    return false;
}

export default function kindOf<T>(value: T): KindOf {

    if (value === void 0) return 'undefined';

    if (value === null) return 'null'

    if (typeof value === 'string') return 'string';

    if (typeof value === 'number') return 'number';

    if (typeof value === 'boolean') return 'boolean';

    if (typeof value === 'symbol') return 'symbol';

    if (typeof value === 'function') {
        return isGeneratorFn(value) ? 'generatorFunction' : 'function';
    }

    if (ifArray(value)) return 'array'

    if (isBuffer(value)) return 'buffer';

    if (value instanceof Date) return 'date';

    if (value instanceof Error) return 'error';

    if (value instanceof RegExp) return 'regexp';

    switch (ctorName(value)) {
        case 'Symbol':
            return 'symbol';
        case 'Promise':
            return 'promise';
        case 'WeakMap':
            return 'weakMap';
        case 'WeakSet':
            return 'weakSet';
        case 'Map':
            return 'map';
        case 'Set':
            return 'set';

        // 8-bit typed arrays
        case 'Int8Array':
            return 'int8array';
        case 'Uint8Array':
            return 'uint8array';
        case 'Uint8ClampedArray':
            return 'uint8ClampedArray';

        // 16-bit typed arrays
        case 'Int16Array':
            return 'int16array';
        case 'Uint16Array':
            return 'uint16array';

        // 32-bit typed arrays
        case 'Int32Array':
            return 'int32array';
        case 'Uint32Array':
            return 'uint32array';
        case 'Float32Array':
            return 'float32array';
        case 'Float64Array':
            return 'float64array';
    }

    switch (Object.prototype.toString.call(value)) {
        case '[object Object]':
            return 'object';

        // iterators
        case '[object Map Iterator]':
            return 'mapIterator';
        case '[object Set Iterator]':
            return 'setIterator';
        case '[object String Iterator]':
            return 'stringIterator';
        case '[object Array Iterator]':
            return 'arrayIterator';
    }
}
