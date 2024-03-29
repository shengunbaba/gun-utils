function cloneArray<T>(value: T): T {
    const newArr = []
    for (const item of value as Array<any>) {
        newArr.push(cloneDeep(item))
    }
    return newArr as T
}

function cloneObject<T>(value: T): T {
    const newObj: Record<string, any> = {};
    for (const k in value) {
        newObj[k] = cloneDeep(value[k])
    }
    return newObj as T
}

export default function cloneDeep<T>(value: T): T {
    if (Array.isArray(value)) {
        return cloneArray(value)
    }
    if (typeof value === 'object') {
        return cloneObject(value)
    }
    return value
}


