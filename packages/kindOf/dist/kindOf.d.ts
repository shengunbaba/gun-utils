type Ret = 'undefined' | 'string' | 'number' | 'null' | 'symbol' | 'boolean' | 'array' | 'function' | 'object' | 'unKnow';
export default function kindOf<T>(value: T): Ret;
export {};
