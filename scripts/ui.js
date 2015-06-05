/* Nasty global namespace stuff */

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x6688ff, 1);
document.getElementById('board').appendChild( renderer.domElement );

var holder = new THREE.Group();
scene.add(holder);

var light = new THREE.DirectionalLight(0xffffff, 0.8);
light.position.set(3, -1, 2);
scene.add(light);

// instantiate a loader
var loader = new THREE.ObjectLoader();

var hexMeshList = [];
var hexMap = {};

function clickHandler(e) {
    // Assumption:  Board has been loaded.
    e = e || window.event;

    var target = e.target || e.srcElement,
        rect = target.getBoundingClientRect(),
        mouse = new THREE.Vector2((e.clientX - rect.left) / rect.width * 2 - 1,
                                  -((e.clientY - rect.top) / rect.height * 2 - 1));

    // FIXME: It appears that rotations don't work right at all.
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(board.clickableList);
    if (intersects[0]) {
        if (intersects[0].object && intersects[0].object.uuid) {
            var hex = board.findHexByUuid(intersects[0].object.uuid);
            hex.setHighlight(!hex.getHighlight());
        }
    }
}

var assets = {};
var assetList = {
    'clear': 'models/terrain/clear.js',
    'lightforest': 'models/terrain/lightforest.js'
};
var assetsToLoad = 0;

for (var assetId in assetList) {
    assetsToLoad++;
    if (assetList.hasOwnProperty(assetId)) {
        (function(assetId) {
            loader.load(
                assetList[assetId],
                function(object) {
                    console.log("Before adding", assetId, assets);
                    assets[assetId] = object;
                    console.log("After adding", assetId, assets);
                    assetsToLoad--;
                    if (assetsToLoad === 0) {
                        buildBoard();
                    }
                }
            );
        })(assetId);
    } else {
        console.log("Doesn't have own property", assetId);
    }
}

var board;
var buildBoard = function () {
    console.log(assets);
    // TODO: Move the board data into a loaded file.
    board = new BT.Board(5, 5, [
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'lightforest'},
        {'type': 'lightforest'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'},
        {'type': 'clear'}
    ], assets, holder);
    holder.translateX(-board.worldWidth / 2);
    holder.translateY(-board.worldHeight / 2);
    document.getElementById('board').addEventListener("click", clickHandler, false);
};

camera.position.z = 60;
camera.position.y = -40;
camera.lookAt(new THREE.Vector3(0, 0, 0));

var windowResize = new THREEx.WindowResize(renderer, camera);

var render = function () {
	requestAnimationFrame( render );

	//holder.rotation.z += 0.01;

	renderer.render(scene, camera);
};

render();