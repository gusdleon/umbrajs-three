import * as THREE from './ThreeWrapper';
import { UmbraInstance } from '@umbra3d/umbrajs';
import { PublicLink } from './PublicLink';
import { UmbraScene, SceneFactory } from './Scene';
import { WebGLRenderer } from 'three';
export declare type UmbraCamera = THREE.Camera & {
    umbraStreamingPosition?: THREE.Vector3;
    umbraQuality?: number;
};
declare class UmbrajsThreeInternal implements SceneFactory {
    memoryLimit: number;
    downloadLimit: number;
    qualityFactor: number;
    onStreamingUpdate: (progress: number) => void;
    onStreamingComplete: () => void;
    umbrajs: UmbraInstance;
    private runtime;
    private features;
    private renderer;
    private updateTask;
    private assetSizes;
    private textureMemoryUsed;
    private meshMemoryUsed;
    private lastQualityLowerFrame;
    private readonly memoryUsed;
    private umbraScenes;
    private oldState;
    private sharedState;
    private tempVector;
    private dirVector;
    private matrixWorldInverse;
    private projScreenMatrix;
    private cameraWorldPosition;
    constructor(umbrajs: UmbraInstance, renderer: WebGLRenderer);
    startEventUpdate(interval: number): void;
    stopEventUpdate(): void;
    private findLights;
    private pruneOldViews;
    private updateViews;
    update(timeBudget?: number): void;
    createScene(link: string | PublicLink): UmbraScene;
    createSceneWithURL(url: string): UmbraScene;
    /**
     * Returns streaming information. We can't tell which files came from the browser cache
     * so we report lower and upper limits of the true download size.
     *
     * The returned object has the following fields:
     *
     *  'maxBytesDownloaded' an upper limit assuming no file was cached,
     *  'minBytesDownloaded' the corresponding lower limit assuming all duplicates came from cache.
     *  'textureMemoryUse' the number of bytes used by texture assets
     *  'meshMemoryUse' the number of bytes used by mesh assets
     *
     */
    getStats(): {
        minBytesDownloaded: number;
        maxBytesDownloaded: number;
    } & {
        textureMemoryUsed: number;
        meshMemoryUsed: number;
    };
    private canFitInMemory;
    private adjustQuality;
    private makeTexture;
    private handlers;
    private updateEvents;
    getStreamingProgress(): number;
    dispose(): void;
}
export declare function initWithThreeJS(renderer: THREE.WebGLRenderer, userConfig: {
    wasmURL?: string;
}): Promise<UmbrajsThreeInternal>;
interface UmbrajsThree extends UmbrajsThreeInternal {
}
export { UmbraScene as Scene, UmbrajsThree };
export { Loader } from './Loader';
