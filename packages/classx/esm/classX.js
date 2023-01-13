const classX = (...args) => {
    let result = [];
    for (const item of args) {
        if (typeof item === 'string') {
            result.push(item);
            continue;
        }
        if (item instanceof Array) {
            result.push(classX(...item));
            continue;
        }
        if (typeof item === 'object') {
            for (const key in item) {
                if (item[key]) {
                    result.push(key);
                }
            }
        }
    }
    return result.join(' ');
};
export default classX;
