const shaderDS = /* wgsl */`
    struct VertexInput { // input data of the vertex shader
        @location(0) pos: vec2f,
        @builtin(instance_index) instance: u32,
    };
    struct VertexOutput { // output data of the vertex shader
        @builtin(position) pos: vec4f,
        @location(0) cell: vec2f, 
    };
    @group(0) @binding(0) var<uniform> grid: vec2f;
    @group(0) @binding(1) var<storage> cellState: array<u32>;
     
`
export {shaderDS}
