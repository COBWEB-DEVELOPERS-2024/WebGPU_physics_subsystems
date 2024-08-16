const vertexShader = /* wgsl */`
    @vertex
    fn vertexMain(input: VertexInput) -> VertexOutput  {
        let i = f32(input.instance);
        let cell = vec2f(i % grid.x, floor(i / grid.x));
        let cellOffset = cell / grid * 2;
        let state = f32(cellState[input.instance]); // New line!
        let gridPos = (input.pos*state + 1) / grid - 1 + cellOffset;
        var output: VertexOutput;    
        output.pos = vec4f(gridPos, 0, 1);
        output.cell = cell; // New line!
        return output;
    }

    `

export {vertexShader};