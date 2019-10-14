export class ObjectPool<T> {
  usedList: Array<T> = []
  freeList: Array<T> = []

  // Tries to find an object matching "predicate", if any given.
  // Constructs a new object with "makeFunc" if none were found.
  allocate(makeFunc: () => T, predicate?: (x: T) => boolean) {
    let obj: T

    if (this.freeList.length > 0) {
      // If no predicate given we always take the last one
      if (typeof predicate === 'undefined') {
        obj = this.freeList.pop()
      } else {
        for (let i = 0; i < this.freeList.length; i++) {
          const elem: T = this.freeList[i]
          if (predicate(elem)) {
            obj = elem
            this.freeList.splice(i, 1)
            break
          }
        }
      }
    }

    if (!obj) {
      obj = makeFunc()
    }

    this.usedList.push(obj)
    return obj
  }

  freeAll(clearFunc?: (obj: T) => void) {
    for (let i = 0; i < this.usedList.length; i++) {
      if (clearFunc) {
        clearFunc(this.usedList[i])
      }
      this.freeList.push(this.usedList[i])
    }
    this.usedList.length = 0
  }

  clear() {
    this.usedList.length = 0
    this.freeList.length = 0
  }
}
