import * as THREE from 'three'

function makeFormat (format, type) {
  return { format: format, type: type }
}

const textureFormats = {
  rgb24: makeFormat(THREE.RGBFormat, THREE.UnsignedByteType),
  rgba32: makeFormat(THREE.RGBAFormat, THREE.UnsignedByteType),
  rgb565: makeFormat(THREE.RGBFormat, THREE.UnsignedShort565Type),
  rg8: makeFormat(THREE.LuminanceAlphaFormat, THREE.UnsignedByteType),
  rg16f: makeFormat(THREE.LuminanceAlphaFormat, THREE.HalfFloatType),
  bc1: makeFormat(THREE.RGBA_S3TC_DXT1_Format, THREE.UnsignedByteType),
  bc3: makeFormat(THREE.RGBA_S3TC_DXT5_Format, THREE.UnsignedByteType),
  etc1_rgb: makeFormat(THREE.RGB_ETC1_Format, THREE.UnsignedByteType),
  astc_4x4: makeFormat(THREE.RGBA_ASTC_4x4_Format, THREE.UnsignedByteType)
}

export { textureFormats }
