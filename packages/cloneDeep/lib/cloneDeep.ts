import kindOf from '@gun/kindof';

const base = ['string', 'number', 'undefined', 'boolean', 'null'];

function cloneBase<T>(value: T): T {
    return value;
}

function cloneArray<T>(value: T[]): T[] {
    const newArr = []
    for (const item of value) {
        newArr.push(cloneDeep(item))
    }
    return newArr
}

// function cloneObject<T>(value: T): T {
//
// }


export default function cloneDeep<T>(value: T): T {

    if (base.includes(kindOf(value))) {
        return cloneBase(value);
    }

    if (kindOf(value) === 'array') {
        return cloneArray(value)
    }

    if (kindOf(value) === 'object') {

    }
}


