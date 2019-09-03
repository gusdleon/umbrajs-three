/* eslint  @typescript-eslint/camelcase: 0 */

import * as THREE from './ThreeWrapper'

function makeFormat(format, type, compressed) {
  return { format, type, compressed }
}

const ThreeFormats = {
  rgb24: makeFormat(THREE.RGBFormat, THREE.UnsignedByteType, false),
  rgba32: makeFormat(THREE.RGBAFormat, THREE.UnsignedByteType, false),
  rgb565: makeFormat(THREE.RGBFormat, THREE.UnsignedShort565Type, false),
  rg8: makeFormat(THREE.LuminanceAlphaFormat, THREE.UnsignedByteType, false),
  rg16f: makeFormat(THREE.LuminanceAlphaFormat, THREE.HalfFloatType, false),
  bc1: makeFormat(THREE.RGBA_S3TC_DXT1_Format, THREE.UnsignedByteType, true),
  bc3: makeFormat(THREE.RGBA_S3TC_DXT5_Format, THREE.UnsignedByteType, true),
  etc1_rgb: makeFormat(THREE.RGB_ETC1_Format, THREE.UnsignedByteType, true),
  astc_4x4: makeFormat(
    THREE.RGBA_ASTC_4x4_Format,
    THREE.UnsignedByteType,
    true,
  ),
  pvrtc1_rgb4: makeFormat(
    THREE.RGB_PVRTC_4BPPV1_Format,
    THREE.UnsignedByteType,
    true,
  ),
}

export { ThreeFormats }
