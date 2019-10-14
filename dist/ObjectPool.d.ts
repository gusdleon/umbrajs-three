export declare class ObjectPool<T> {
    usedList: Array<T>;
    freeList: Array<T>;
    allocate(makeFunc: () => T, predicate?: (x: T) => boolean): T;
    freeAll(clearFunc?: (obj: T) => void): void;
    clear(): void;
}
