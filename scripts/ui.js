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
    e = e || window.event;

    var target = e.target || e.srcElement,
        rect = target.getBoundingClientRect(),
        mouse = new THREE.Vector2((e.clientX - rect.left) / rect.width * 2 - 1,
                                  (e.clientY - rect.top) / rect.height * 2 - 1);

    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(hexMeshList);
    console.log(intersects[0]);
    if (intersects[0]) {
        console.log(intersects[0].uuid);
        if (intersects[0].object && intersects[0].object.uuid) {
            var hex = hexMap[intersects[0].object.uuid];
            console.log(hex);
            hex.setHighlight(!hex.getHighlight());
        }
    }
}

document.getElementById('board').addEventListener("click", clickHandler, false);

// load a resource
loader.load(
	'models/terrain/clear.js',
	function(object) {
        var hex = new BT.Hex(object.clone());
        hex.setHighlight(false);
        hexMeshList.push(hex.getHexMesh());
        hexMap[hex.getHexMesh().uuid] = hex;
        holder.add(hex.uiObj);
        holder.add(object.clone().translateY(26));
        holder.add(object.clone().translateY(-26));
        holder.add(object.clone().translateX(22.5).translateY(13));
        holder.add(object.clone().translateX(-22.5).translateY(13));
        holder.add(object.clone().translateX(22.5).translateY(-13));
        holder.add(object.clone().translateX(-22.5).translateY(-13));
	}
);

camera.position.z = 60;
camera.position.y = -40;
camera.lookAt(new THREE.Vector3(0, 0, 0));

var render = function () {
	requestAnimationFrame( render );

	holder.rotation.z += 0.01;

	renderer.render(scene, camera);
};

render();