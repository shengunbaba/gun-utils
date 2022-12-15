"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kindof_1 = __importDefault(require("@sgun/kindof"));
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
    if ((0, kindof_1.default)(value) === 'array') {
        return cloneArray(value);
    }
    if ((0, kindof_1.default)(value) === 'object') {
        return cloneObject(value);
    }
    return value;
}
exports.default = cloneDeep;
