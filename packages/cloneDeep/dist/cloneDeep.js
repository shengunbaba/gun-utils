"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cloneArray(value) {
    const newArr = [];
    for (const item of value) {
        newArr.push(cloneDeep(item));
    }
    return newArr;
}
function cloneObject(value) {
    const newObj = {};
    for (const k in value) {
        newObj[k] = cloneDeep(value[k]);
    }
    return newObj;
}
function cloneDeep(value) {
    if (Array.isArray(value)) {
        return cloneArray(value);
    }
    if (typeof value === 'object') {
        return cloneObject(value);
    }
    return value;
}
exports.default = cloneDeep;
