/**
 * ShaderPatcher is a preprocessor class that replaces the default PBR texture read
 * shader chunks with the correct Umbra versions. Doing it this way instead of completely
 * custom shaders allows the application to use its own materials with Umbrafied models.
 */
declare class ShaderPatcher {
    flipTangent: boolean;
    defines: string;
    constructor(formats: string[]);
    process(shader: THREE.Shader, renderer: THREE.WebGLRenderer): void;
}
export { ShaderPatcher };
