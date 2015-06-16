var BT = BT || {};

// Not really proper - uiObj can be derived from the unitSheet.
// Strongly dislike the presence of the holder.
BT.Unit = function(uiObj, unitSheet, hex, holder) {
    this.uiObj = uiObj;
    this.unitSheet = unitSheet;
    this.hex = hex;
    var p = hex.getUiPosition();
    this.uiObj.position.x = p.x;
    this.uiObj.position.y = p.y;
    this.uiObj.position.z = p.z;
    this.facing = 0;
    holder.add(uiObj);
};

BT.Unit.prototype = {
    constructor: BT.Unit,

    setFacing: function(facing) {
        this.facing = facing % 6;
        this.uiObj.rotation.z = this.facing * Math.PI / 3;
        this.uiObj.updateMatrix();
    }
};
