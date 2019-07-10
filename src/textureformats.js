import * as THREE from 'three'

function makeFormat (format, type) {
  return { format: format, type: type }
}

const textureFormats = {
  rgb24: makeFormat(THREE.RGBFormat, THREE.UnsignedByte),
  rgba32: makeFormat(THREE.RGBAFormat, THREE.UnsignedByte),
  bc1: makeFormat(THREE.RGBA_S3TC_DXT1_Format, THREE.UnsignedByte),
  bc3: makeFormat(THREE.RGBA_S3TC_DXT5_Format, THREE.UnsignedByte),
  etc1_rgb: makeFormat(THREE.RGB_ETC1_Format, THREE.UnsignedByte),
  astc_4x4: makeFormat(THREE.RGBA_ASTC_4x4_Format, THREE.UnsignedByte)
}

export { textureFormats }
