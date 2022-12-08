"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ifArray(value) {
    if (Array.isArray) {
        return Array.isArray(value);
    }
    return value instanceof Array;
}
function kindOf(value) {
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
    if (typeof value === 'function')
        return 'function';
    if (ifArray(value))
        return 'array';
    if (typeof value === 'object')
        return 'object';
    return 'unKnow';
}
exports.default = kindOf;
