const normalmapChunk = `
#ifdef USE_NORMALMAP
#ifdef USE_TANGENT

vec3 tangentToWorld2 = normal;
vec3 tangentToWorld0 = normalize(tangent - tangentToWorld2 * dot(tangentToWorld2, tangent));

#ifdef UMBRA_FLIP_TANGENT
vec3 tangentToWorld1 = normalize(cross(tangentToWorld0, tangentToWorld2));
#else
vec3 tangentToWorld1 = normalize(cross(tangentToWorld2, tangentToWorld0));
#endif

#if defined(UMBRA_TEXTURE_SUPPORT_BC5) || defined(UMBRA_TEXTURE_SUPPORT_ASTC)
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

const metalnessMapChunk = `
float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
vec4 texelMetalness = texture2D( metalnessMap, vUv );
metalnessFactor *= texelMetalness.r;
#endif
`

// The BSDF function (see 'bsdfs.glsl') squares the roughness so we don't need to do it here.
const roughnessMapChunk = `
float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
vec4 texelRoughness = texture2D( roughnessMap, vUv );
float roughness = 1.0 - texelRoughness.g;
roughnessFactor *= roughness;
#endif
`

/**
 * ShaderPatcher is a preprocessor class that replaces the default PBR texture read
 * shader chunks with the correct Umbra versions. Doing it this way instead of completely
 * custom shaders allows the application to use its own materials with Umbrafied models.
 */
class ShaderPatcher {
  flipTangent: boolean
  defines: string

  constructor(formats: string[]) {
    /*
     * World space transform can swap handedness which isn't handled by three.js in tangent space
     * normal maps so we need to be able to flip them ourselves.
     */
    this.flipTangent = false

    // Texture format feature flags
    this.defines = ''

    if (formats.indexOf('bc3') > -1) {
      this.defines += '#define UMBRA_TEXTURE_SUPPORT_BC3\n'
    }
    if (formats.indexOf('bc5') > -1) {
      this.defines += '#define UMBRA_TEXTURE_SUPPORT_BC5\n'
    }
    if (formats.indexOf('astc_4x4') > -1) {
      this.defines += '#define UMBRA_TEXTURE_SUPPORT_ASTC\n'
    }
  }

  process(shader: THREE.Shader, renderer: THREE.WebGLRenderer) {
    let frag = shader.fragmentShader

    if (this.flipTangent) {
      frag = '#define UMBRA_FLIP_TANGENT\n' + frag
    }

    frag = this.defines + frag
    frag = frag.replace('#include <normal_fragment_maps>', normalmapChunk)
    frag = frag.replace('#include <metalnessmap_fragment>', metalnessMapChunk)
    frag = frag.replace('#include <roughnessmap_fragment>', roughnessMapChunk)

    shader.fragmentShader = frag
  }
}

export { ShaderPatcher }
