// TODO: There's an issue with paths wrt texture images.

var BT = BT || {};

BT.UIStates = Object.freeze({
    PENDING_SELECTION: 0,
    PENDING_MOVEMENT: 1,
});

BT.Pallet = {
    'blue': new THREE.Color(0, 0, 1),
}

// TODO: Take a dom element as an input parameter and put the renderer in it.
BT.UI = function() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x6688ff, 1);
    document.getElementById('board').appendChild(this.renderer.domElement);

    this.holder = new THREE.Group();
    this.scene.add(this.holder);

    this.light = new THREE.DirectionalLight(0xffffff, 0.8);
    this.light.position.set(3, -1, 2);
    this.scene.add(this.light);

    this.loader = new THREE.ObjectLoader();
    this.assets = {};
    var assetList = {
        'clear': 'models/terrain/clear.js',
        'lightforest': 'models/terrain/lightforest.js',
        'heavyforest': 'models/terrain/heavyforest.js',
        'highlight': 'models/highlight.js',
        'border': 'models/border.js',
        'enf-4r': 'models/units/enf-4r.js'  // Horrible but gets the point across.
    };
    // TODO: Find a way to bundle this into the loader.
    this.assetsToLoad = 0;
    var self = this;

    for (var assetId in assetList) {
        this.assetsToLoad++;
        if (assetList.hasOwnProperty(assetId)) {
            (function(assetId) {
                self.loader.load(
                    assetList[assetId],
                    function(object) {
                        self.assets[assetId] = object;
                        self.assetsToLoad--;
                        if (self.assetsToLoad === 0) {
                            self.buildBoard();
                        }
                    }
                );
            })(assetId);
        } else {
            console.log("Doesn't have own property", assetId);
        }
    }

    this.board = null;

    this.camera.position.z = 220;
    this.camera.position.y = -40;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.windowResize = new THREEx.WindowResize(this.renderer, this.camera);

    this.state = BT.UIStates.PENDING_SELECTION;
    this.selectedUnit = null;
};

BT.UI.prototype = {
    constructor: BT.UI,

    clickHandler: function(e) {
        // Assumption:  Board has been loaded.
        e = e || window.event;
    
        var target = e.target || e.srcElement,
            rect = target.getBoundingClientRect(),
            mouse = new THREE.Vector2((e.clientX - rect.left) / rect.width * 2 - 1,
                                      -((e.clientY - rect.top) / rect.height * 2 - 1));
    
        // FIXME: It appears that rotations don't work right at all.
        var raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, this.camera);
        var intersects = raycaster.intersectObjects(this.board.getClickables());
        var hex = null;
        if (intersects[0]) {
            if (intersects[0].object && intersects[0].object.uuid) {
                hex = this.board.findHexByUuid(intersects[0].object.uuid);
            }
        }
        if (hex) {
            if (this.state == BT.UIStates.PENDING_SELECTION) {
                var unit = null;
                unit = this.board.getUnitAt(hex);
                if (unit) {
                    this.state = BT.UIStates.PENDING_MOVEMENT;
                    this.selectedUnit = unit;
                    hex.setHighlight(BT.Pallet.blue);
                }
            } else if (this.state == BT.UIStates.PENDING_MOVEMENT) {
                this.selectedUnit.getHex().setHighlight(null);
                hex.setHighlight(BT.Pallet.blue);
                this.board.moveUnit(this.selectedUnit, hex);
            }
        }
    },
    
    buildBoard: function() {
        this.board = new BT.Board(BT.boardData.width, BT.boardData.height, BT.boardData.data, this.assets, this.holder);
        this.holder.translateX(-this.board.worldWidth / 2);
        this.holder.translateY(-this.board.worldHeight / 2);
        var mech = new BT.Unit(this.assets['enf-4r'].clone(), new BT.UnitSheet());
        this.board.addUnit(mech, 5, 5, 3);
        var self = this;
        document.getElementById('board').addEventListener("click", function() {return self.clickHandler();}, false);
    },

    updateUI: function() {
        //this.holder.rotation.z += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
};
