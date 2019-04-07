
var canvas;
var gl;

var NumVertices  = 36;
                                   // For each face of the cube, make two triangles of three vertices each:
var vertexPositions = [
    vec4( -0.5, 0.5, 0.5, 1 ),
    vec4( -0.5, -0.5, 0.5, 1 ),
    vec4( 0.5, -0.5, 0.5, 1 ),
    vec4( -0.5, 0.5, 0.5, 1 ),
    vec4( 0.5, -0.5, 0.5, 1 ),
    vec4( 0.5, 0.5, 0.5, 1 ),

    vec4( 0.5, 0.5, 0.5, 1 ),
    vec4( 0.5, -0.5, 0.5, 1 ),
    vec4( 0.5, -0.5, -0.5, 1 ),
    vec4( 0.5, 0.5, 0.5, 1 ),
    vec4( 0.5, -0.5, -0.5, 1 ),    
    vec4( 0.5, 0.5, -0.5, 1 ),

    vec4( 0.5, -0.5, 0.5, 1 ),
    vec4( -0.5, -0.5, 0.5, 1 ),
    vec4( -0.5, -0.5, -0.5, 1 ),
    vec4( 0.5, -0.5, 0.5, 1 ),
    vec4( -0.5, -0.5, -0.5, 1 ),
    vec4( 0.5, -0.5, -0.5, 1 ),

    vec4( 0.5, 0.5, -0.5, 1 ),
    vec4( -0.5, 0.5, -0.5, 1 ),
    vec4( -0.5, 0.5, 0.5, 1 ),
    vec4( 0.5, 0.5, -0.5, 1 ),
    vec4( -0.5, 0.5, 0.5, 1 ),
    vec4( 0.5, 0.5, 0.5, 1 ),

    vec4( -0.5, -0.5, -0.5, 1 ),
    vec4( -0.5, 0.5, -0.5, 1 ),
    vec4( 0.5, 0.5, -0.5, 1 ),
    vec4( -0.5, -0.5, -0.5, 1 ),
    vec4( 0.5, 0.5, -0.5, 1 ),
    vec4( 0.5, -0.5, -0.5, 1 ),
    
    vec4( -0.5, 0.5, -0.5, 1 ),
    vec4( -0.5, -0.5, -0.5, 1 ),
    vec4( -0.5, -0.5, 0.5, 1 ),
    vec4( -0.5, 0.5, -0.5, 1 ),
    vec4( -0.5, -0.5, 0.5, 1 ),
    vec4( -0.5, 0.5, 0.5, 1 )
];

var vertexColors = [
    [ 1.0, 0.0, 0.0, 1.0 ], // red
    [ 1.0, 0.0, 0.0, 1.0 ],
    [ 1.0, 0.0, 0.0, 1.0 ],
    [ 1.0, 0.0, 0.0, 1.0 ],
    [ 1.0, 0.0, 0.0, 1.0 ],
    [ 1.0, 0.0, 0.0, 1.0 ],

    [ 1.0, 1.0, 0.0, 1.0 ], // yellow
    [ 1.0, 1.0, 0.0, 1.0 ],
    [ 1.0, 1.0, 0.0, 1.0 ],
    [ 1.0, 1.0, 0.0, 1.0 ],
    [ 1.0, 1.0, 0.0, 1.0 ],
    [ 1.0, 1.0, 0.0, 1.0 ],

    [ 0.0, 1.0, 0.0, 1.0 ], // green
    [ 0.0, 1.0, 0.0, 1.0 ],
    [ 0.0, 1.0, 0.0, 1.0 ],
    [ 0.0, 1.0, 0.0, 1.0 ],
    [ 0.0, 1.0, 0.0, 1.0 ],
    [ 0.0, 1.0, 0.0, 1.0 ],

    [ 0.0, 1.0, 1.0, 1.0 ], // cyan
    [ 0.0, 1.0, 1.0, 1.0 ],
    [ 0.0, 1.0, 1.0, 1.0 ],
    [ 0.0, 1.0, 1.0, 1.0 ],
    [ 0.0, 1.0, 1.0, 1.0 ],
    [ 0.0, 1.0, 1.0, 1.0 ],

    [ 0.0, 0.0, 1.0, 1.0 ], // blue
    [ 0.0, 0.0, 1.0, 1.0 ],
    [ 0.0, 0.0, 1.0, 1.0 ],
    [ 0.0, 0.0, 1.0, 1.0 ],
    [ 0.0, 0.0, 1.0, 1.0 ],
    [ 0.0, 0.0, 1.0, 1.0 ],

    [ 1.0, 0.0, 1.0, 1.0 ], // magenta
    [ 1.0, 0.0, 1.0, 1.0 ],
    [ 1.0, 0.0, 1.0, 1.0 ],
    [ 1.0, 0.0, 1.0, 1.0 ],
    [ 1.0, 0.0, 1.0, 1.0 ],
    [ 1.0, 0.0, 1.0, 1.0 ]
];

var xAxis = 0;
var yAxis = 1;
var zAxis = 2;

var axis = 0;
var theta = [ 0, 0, 0 ];

var thetaLoc;

window.onload = function init()
{
    canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    
    gl.enable(gl.DEPTH_TEST);

    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    
    var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertexColors), gl.STATIC_DRAW );

    var vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );

    var vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertexPositions), gl.STATIC_DRAW );
    

    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    thetaLoc = gl.getUniformLocation(program, "theta"); 
    
    //event listeners for buttons
    
    document.getElementById( "xButton" ).onclick = function () {
        axis = xAxis;
    };
    document.getElementById( "yButton" ).onclick = function () {
        axis = yAxis;
    };
    document.getElementById( "zButton" ).onclick = function () {
        axis = zAxis;
    };
        
    render();
}

function render()
{
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    theta[axis] += 2.0;
    gl.uniform3fv(thetaLoc, theta);

    gl.drawArrays( gl.TRIANGLES, 0, NumVertices );

    requestAnimFrame( render );
}
