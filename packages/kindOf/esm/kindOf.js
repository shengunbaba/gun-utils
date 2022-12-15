function ifArray(value) {
    if (Array.isArray) {
        return Array.isArray(value);
    }
    return value instanceof Array;
}
function ctorName(val) {
    return typeof val.constructor === 'function' ? val.constructor.name : null;
}
function isGeneratorFn(val) {
    return ctorName(val) === 'GeneratorFunction';
}
function isBuffer(val) {
    var _a;
    if ((val === null || val === void 0 ? void 0 : val.constructor) && typeof ((_a = val.constructor) === null || _a === void 0 ? void 0 : _a.isBuffer) === 'function') {
        return val.constructor.isBuffer(val);
    }
    return false;
}
export default function kindOf(value) {
    if (value === void 0)
        return 'undefined';
    if (value === null)
        return 'null';
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    if (typeof value === 'boolean')
        return 'boolean';
    if (typeof value === 'symbol')
        return 'symbol';
    if (typeof value === 'function') {
        return isGeneratorFn(value) ? 'generatorFunction' : 'function';
    }
    if (ifArray(value))
        return 'array';
    if (isBuffer(value))
        return 'buffer';
    if (value instanceof Date)
        return 'date';
    if (value instanceof Error)
        return 'error';
    if (value instanceof RegExp)
        return 'regexp';
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
