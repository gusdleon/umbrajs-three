export class ObjectPool {
  constructor () {
    this.usedList = []
    this.freeList = []
  }

  allocate (makeFunc) {
    let obj
    if (this.freeList.length > 0) {
      obj = this.freeList.pop()
    } else {
      obj = makeFunc()
    }

    this.usedList.push(obj)
    return obj
  }

  freeAll (clearFunc) {
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
