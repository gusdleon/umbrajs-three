import * as THREE from './ThreeWrapper';
import { SceneFactory } from './Scene';
export declare class Loader extends THREE.Loader {
    private Umbra;
    constructor(Umbra: SceneFactory, manager?: THREE.LoadingManager);
    load(url: string, onLoad: any, onProgress: any, onError: any): void;
}
