// Mock module for Three.js WebGPU and TSL imports
// This file provides empty exports to satisfy imports from three-globe

export const WebGPURenderer = class {};
export const StorageInstancedBufferAttribute = class {};

// TSL module mock
export const MeshStandardNodeMaterial = class {};
export const NodeMaterial = class {};
export const color = () => {};
export const normalMap = () => {};
export const instance = () => {};
export const attribute = () => {};
export const texture = () => {};
export const uv = () => {};
export const positionLocal = () => {};
export const modelViewProjection = () => {};
export const float = () => {};
export const vec2 = () => {};
export const vec3 = () => {};
export const vec4 = () => {};
export const uniform = () => {};

// Export a default empty object to catch all other potential imports
export default {};
