export declare class ObjectPool<T> {
    usedList: Array<T>;
    freeList: Array<T>;
    constructor();
    allocate(makeFunc: () => T): T;
    freeAll(clearFunc?: (obj: T) => void): void;
    clear(): void;
}
