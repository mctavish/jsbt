var BT = BT || {};

// Not really proper - uiObj can be derived from the unitSheet.
// Strongly dislike the presence of the holder.
BT.Unit = function(uiObj, unitSheet) {
    this.uiObj = uiObj;
    this.unitSheet = unitSheet;
    this.hex = null;
    this.facing = 0;
};

BT.Unit.prototype = {
    constructor: BT.Unit,

    setHex: function(hex) {
        this.hex = hex;
        var p = hex.getUiPosition();
        this.uiObj.position.x = p.x;
        this.uiObj.position.y = p.y;
        this.uiObj.position.z = p.z;
    },

    setFacing: function(facing) {
        this.facing = facing % 6;
        this.uiObj.rotation.z = this.facing * Math.PI / 3;
        this.uiObj.updateMatrix();
    },
    
    getHex: function() {
        return this.hex;
    },
    
    getUiObj: function() {
        return this.uiObj;
    },
    
};
