/**
 * ShaderPatcher is a preprocessor function that replaces the default PBR texture read
 * shader chunks with the correct Umbra versions. Doing it this way instead of completely
 * custom shaders allows the application to use its own materials with Umbrafied models.
 */

const normalmapShaderChunk = `
#ifdef USE_NORMALMAP
#ifdef USE_TANGENT

vec3 tangentToWorld2 = normal;
vec3 tangentToWorld0 = normalize(tangent - tangentToWorld2 * dot(tangentToWorld2, tangent));
vec3 tangentToWorld1 = normalize(cross(tangentToWorld2, tangentToWorld0));

#if defined(TEXTURE_SUPPORT_BC5)
normal.xy = texture2D(normalMap, vUv).xy * 2.0 - 1.0;
normal.z = sqrt(1.0 - clamp(dot(normal.xy, normal.xy), 0.0, 1.0));
#elif defined(UMBRA_TEXTURE_SUPPORT_BC3)
normal.xy = texture2D(normalMap, vUv).yw * 2.0 - 1.0;
normal.z = sqrt(1.0 - clamp(dot(normal.xy, normal.xy), 0.0, 1.0));
#else
normal.xyz = texture2D(normalMap, vUv).xyz;
normal.xy *= 2.0;
normal.xy -= 1.0;
normal = normalize(normal);
#endif

normal = tangentToWorld0 * normal.x + tangentToWorld1 * normal.y + tangentToWorld2 * normal.z;
normal = normalize(normal);
#endif
#endif
`

const metalnessMapShaderChunk = `
float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
vec4 texelMetalness = texture2D( metalnessMap, vUv );
metalnessFactor *= texelMetalness.r;
#endif
`

// The BSDF function (see 'bsdfs.glsl') squares the roughness so we don't need to do it here.
const roughnessMapShaderChunk = `
float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
vec4 texelRoughness = texture2D( roughnessMap, vUv );
float roughness = 1.0 - texelRoughness.g;
roughnessFactor *= roughness;
#endif
`

function createShaderPatcher (formats, {
  showNormals = false, showRoughness = false
} = {}) {
  let defines = ''

  if (formats.formats.indexOf('bc3') > -1) {
    defines += '#define UMBRA_TEXTURE_SUPPORT_BC3\n'
  }
  if (formats.formats.indexOf('bc5') > -1) {
    defines += '#define UMBRA_TEXTURE_SUPPORT_BC5\n'
  }

  return function (shader, renderer) {
    let frag = shader.fragmentShader
    frag = defines + frag
    frag = frag.replace('#include <normal_fragment_maps>', normalmapShaderChunk)
    frag = frag.replace('#include <metalnessmap_fragment>', metalnessMapShaderChunk)
    frag = frag.replace('#include <roughnessmap_fragment>', roughnessMapShaderChunk)
    if (showNormals) {
      frag = frag.replace('gl_FragColor = vec4( outgoingLight, diffuseColor.a );', 'gl_FragColor = vec4( 0.5 * (vec3(1.0) + normal), diffuseColor.a );')
    }
    if (showRoughness) {
      frag = frag.replace('gl_FragColor = vec4( outgoingLight, diffuseColor.a );', 'gl_FragColor = vec4( vec3(roughnessFactor) , diffuseColor.a );')
    }
    shader.fragmentShader = frag
  }
}

export { createShaderPatcher }
