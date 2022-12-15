import kindOf from '@sgun/kindof';
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
export default function cloneDeep(value) {
    if (kindOf(value) === 'array') {
        return cloneArray(value);
    }
    if (kindOf(value) === 'object') {
        return cloneObject(value);
    }
    return value;
}
