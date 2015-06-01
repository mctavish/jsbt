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

// load a resource
loader.load(
	'models/terrain/clear.js',
	function(object) {
		holder.add(object);
	}
);

camera.position.z = 30;
camera.position.y = -20;
camera.lookAt(new THREE.Vector3(0, 0, 0));

var render = function () {
	requestAnimationFrame( render );

	holder.rotation.z += 0.01;

	renderer.render(scene, camera);
};

render();