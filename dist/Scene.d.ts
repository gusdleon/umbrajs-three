import * as THREE from './ThreeWrapper';
import { PlatformFeatures, Runtime, NativeScene, ConnectionStatus } from '@umbra3d/umbrajs';
import { PublicLink } from './PublicLink';
export interface SceneFactory {
    createScene(link: string | PublicLink): UmbraScene;
    createSceneWithURL(url: string): UmbraScene;
}
declare type UmbraCamera = THREE.Camera & {
    umbraStreamingPosition?: THREE.Vector3;
};
interface SceneStatus {
    connected: boolean;
    sceneInfo?: any;
    numVisible: number;
    numShadowCasters: number;
    numCachedMaterials: number;
    numAssets: number;
}
/**
 * A wrapper type for mesh geometry and its material. Only UmbraScene instantiates the
 * THREE.Mesh objects that are passed to the renderer. UmbraScene also creates the final
 * THREE.Material instance using the textures and transparency flag in 'materialDesc'
 */
export interface MeshDescriptor {
    geometry: any;
    materialDesc: any;
}
declare type DisposeCallback = (m: UmbraScene) => void;
export declare class UmbraScene extends THREE.Object3D {
    quality: number;
    material: THREE.Material;
    wireframe: boolean;
    freeze: boolean;
    qualityFactor: number;
    readonly adjustedQuality: number;
    onConnected: () => void;
    onConnectionError: (error: string) => void;
    onDisconnected: () => void;
    onConnectionChanged: (connected: ConnectionStatus) => void;
    onMeshChanged: () => void;
    readonly isLOD = true;
    readonly autoUpdate = true;
    readonly name = "UmbraScene";
    private renderer;
    private materialPool;
    private cameraToView;
    private viewLastUsed;
    private shaderPatcher;
    private stats;
    private diagnostics;
    private umbra;
    private onDispose;
    private oldState;
    private matrixWorldInverse;
    private projScreenMatrix;
    private cameraWorldPosition;
    private tempVector;
    private dirVector;
    constructor(runtime: Runtime, scene: NativeScene, renderer: THREE.WebGLRenderer, features: PlatformFeatures, onDispose?: DisposeCallback);
    opaqueMaterial: THREE.Material;
    getInfo(): SceneStatus;
    getBounds(): THREE.Box3;
    getCenter(): THREE.Vector3;
    private pruneOldViews;
    private updateStreamingEvents;
    private updateNetworkEvents;
    update: (camera: UmbraCamera) => void;
    dispose(): void;
    private isPBREnabled;
}
export {};
