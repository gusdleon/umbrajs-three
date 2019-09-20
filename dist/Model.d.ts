import * as THREE from './ThreeWrapper';
import { PlatformFeatures, Runtime, Scene } from '@umbra3d/umbrajs';
declare type UmbraCamera = THREE.Camera & {
    umbraStreamingPosition?: THREE.Vector3;
};
interface ModelStats {
    connected: boolean;
    sceneInfo?: any;
    numVisible: number;
    numShadowCasters: number;
    numCachedMaterials: number;
    numAssets: number;
}
/**
 * A wrapper type for mesh geometry and its material. Only the ModelObject instantiates the
 * THREE.Mesh objects that are passed to the renderer. ModelObject also creates the final
 * THREE.Material instance using the textures and transparency flag in 'materialDesc'
 */
export interface MeshDescriptor {
    geometry: any;
    materialDesc: any;
}
export declare class Model extends THREE.Object3D {
    quality: number;
    opaqueMaterial: THREE.MeshBasicMaterial;
    wireframe: boolean;
    freeze: boolean;
    readonly isLOD = true;
    readonly autoUpdate = true;
    readonly name = "UmbraModel";
    private renderer;
    private materialPool;
    private cameraToView;
    private viewLastUsed;
    private shaderPatcher;
    private stats;
    private umbra;
    private matrixWorldInverse;
    private projScreenMatrix;
    private cameraWorldPosition;
    private tempVector;
    private dirVector;
    constructor(runtime: Runtime, scene: Scene, renderer: THREE.WebGLRenderer, features: PlatformFeatures);
    getInfo(): ModelStats;
    getBounds(): THREE.Box3;
    getCenter(): THREE.Vector3;
    private pruneOldViews;
    update: (camera: UmbraCamera) => void;
    dispose(): void;
}
export {};
