"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kindof_1 = __importDefault(require("@gun/kindof"));
const base = ['string', 'number', 'undefined', 'boolean', 'null'];
function cloneBase(value) {
    return value;
}
// function cloneArray<T>(value: T[]): T[] {
//     const newArr = []
//     for (const item of value) {
//         newArr.push(cloneDeep(item))
//     }
//     return newArr
// }
//
// function cloneObject<T>(value: T): T {
//
// }
function cloneDeep(value) {
    if (base.includes((0, kindof_1.default)(value))) {
        return cloneBase(value);
    }
    return value;
    //
    // if (kindOf(value) === 'array') {
    //     // return cloneArray(value)
    // }
    //
    // if (kindOf(value) === 'object') {
    //
    // }
}
exports.default = cloneDeep;
