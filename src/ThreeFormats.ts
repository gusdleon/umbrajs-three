/* eslint  @typescript-eslint/camelcase: 0 */

import * as THREE from './ThreeWrapper'
import { TextureFormat } from '@umbra3d/umbrajs'

function makeFormat(format, type, compressed) {
  return { format, type, compressed }
}

// prettier-ignore
const ThreeFormats = {
  [TextureFormat.RGB24]: makeFormat(THREE.RGBFormat, THREE.UnsignedByteType, false),
  [TextureFormat.RGBA32]: makeFormat(THREE.RGBAFormat, THREE.UnsignedByteType, false),
  [TextureFormat.RGB565]: makeFormat(THREE.RGBFormat, THREE.UnsignedShort565Type, false),
  [TextureFormat.RG8]: makeFormat(THREE.LuminanceAlphaFormat, THREE.UnsignedByteType, false),
  [TextureFormat.RG16F]: makeFormat(THREE.LuminanceAlphaFormat, THREE.HalfFloatType, false),
  [TextureFormat.BC1]: makeFormat(THREE.RGBA_S3TC_DXT1_Format, THREE.UnsignedByteType, true),
  [TextureFormat.BC3]: makeFormat(THREE.RGBA_S3TC_DXT5_Format, THREE.UnsignedByteType, true),
  [TextureFormat.ETC1_RGB]: makeFormat(THREE.RGB_ETC1_Format, THREE.UnsignedByteType, true),
  [TextureFormat.ASTC_4X4]: makeFormat(THREE.RGBA_ASTC_4x4_Format, THREE.UnsignedByteType, true),
  [TextureFormat.PVRTC1_RGB4]: makeFormat(THREE.RGB_PVRTC_4BPPV1_Format, THREE.UnsignedByteType, true),
}

export { ThreeFormats }
