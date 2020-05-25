/**
 * The purpose of this file is to re-export only the necessary Three.js modules
 * so that WebPack three-shaking has a better chance of working on the final bundle.
 */
export { Object3D, Group, Mesh, Camera, DirectionalLight, Scene } from 'three';
export { Loader, LoadingManager } from 'three';
export { WebGLRenderer, Material, MeshBasicMaterial, MeshPhysicalMaterial, TangentSpaceNormalMap, } from 'three';
export { Matrix4, Vector3, Box3, Sphere } from 'three';
export { CompressedTexture, DataTexture, BufferGeometry, TypedArray, Float32BufferAttribute, } from 'three';
export { LinearFilter, LinearEncoding, sRGBEncoding, TextureDataType } from 'three';
export { RGBFormat, RGBAFormat, LuminanceAlphaFormat, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT5_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGB_PVRTC_4BPPV1_Format, } from 'three';
export { UnsignedByteType, UnsignedShort565Type, HalfFloatType } from 'three';
