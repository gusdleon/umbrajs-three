import * as THREE from './ThreeWrapper'
import { ModelFactory } from './Model'

export class ModelLoader extends THREE.Loader {
  private Umbra: ModelFactory
  constructor(Umbra: ModelFactory, manager?: THREE.LoadingManager) {
    super(manager)
    this.Umbra = Umbra
  }

  load(url: string, onLoad, onProgress, onError) {
    const model = this.Umbra.createModel(url)

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
