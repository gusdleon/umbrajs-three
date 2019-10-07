import * as THREE from './ThreeWrapper'
import { SceneFactory } from './Scene'

export class Loader extends THREE.Loader {
  private Umbra: SceneFactory
  constructor(Umbra: SceneFactory, manager?: THREE.LoadingManager) {
    super(manager)
    this.Umbra = Umbra
  }

  load(url: string, onLoad, onProgress, onError) {
    const model = this.Umbra.createScene(url)

    if (onError) {
      model.onConnectionError = err => {
        onError(err)
      }
    }
    model.onConnected = () => {
      delete model.onConnectionError
      if (onProgress) {
        onProgress(1.0)
      }
      onLoad(model)
    }
  }
}
