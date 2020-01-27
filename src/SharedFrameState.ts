import { View, Renderable } from '@umbra3d/umbrajs'

export interface SharedFrameState {
  cameraToView: Map<THREE.Camera, View>
  viewRenderables: Map<View, Renderable[]>
  viewLastUseFrame: Map<View, number>
}
