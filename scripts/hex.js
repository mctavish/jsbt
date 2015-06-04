var BT = BT || {};

/* This implementation is deeply tied to the UI and the THREE.js object.
 * Concerning in the long run, but enough to get a prototype off the ground.
 */
BT.Hex = function(uiObj) {
    this.uiObj = uiObj;
    this.uiHighlight = this.uiObj.getObjectByName("Hex Border");
    this.highlight = true;
};

BT.Hex.prototype = {
    constructor: BT.Hex,
    
    setHighlight: function(highlight) {
        this.highlight = highlight;
        this.uiHighlight.visible = highlight;
    },
    
    getHighlight: function() {
        return this.highlight;
    },

    getHexMesh: function() {
        return this.uiObj.getObjectByName("Hex Surface");
    }
};