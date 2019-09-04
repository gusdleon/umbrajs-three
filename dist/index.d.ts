import * as THREE from './ThreeWrapper';
import { Model } from './Model';
export declare function initWithThreeJS(renderer: THREE.WebGLRenderer, userConfig: {
    wasmURL?: string;
}): Promise<{
    createModel: (cloudArgs: {
        url: string;
    } | ({
        token: string;
        projectID: string;
        modelID: string;
    } & {
        apiURL?: string;
    }) | ({
        token: string;
        project: string;
        model: string;
    } & {
        apiURL?: string;
    })) => Promise<Model>;
    getStats: () => {
        maxBytesDownloaded: any;
        minBytesDownloaded: any;
    };
    update: (timeBudget?: number) => void;
    dispose: () => void;
    lib: import("@umbra3d/umbrajs").UmbraInstance;
    runtime: import("@umbra3d/umbrajs").Runtime;
}>;
export { Model };
