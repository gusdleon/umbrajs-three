export class ObjectPool<T> {
  usedList: Array<T>
  freeList: Array<T>

  constructor () {
    this.usedList = []
    this.freeList = []
  }

  allocate (makeFunc: () => T) {
    let obj: T
    if (this.freeList.length > 0) {
      obj = this.freeList.pop()
    } else {
      obj = makeFunc()
    }

    this.usedList.push(obj)
    return obj
  }

  freeAll (clearFunc?: (obj: T) => void) {
    for (let i = 0; i < this.usedList.length; i++) {
      if (clearFunc) {
        clearFunc(this.usedList[i])
      }
      this.freeList.push(this.usedList[i])
    }
    this.usedList.length = 0
  }

  clear () {
    this.usedList.length = 0
    this.freeList.length = 0
  }
}
