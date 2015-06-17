var BT = BT || {};

BT.Board = function(width, height, data, assets, holderObj) {
    this.width = width;
    this.height = height;
    this.clickableList = [];
    this.clickHexMap = {};
    this.hexList = [];
    this.units = {};
    var highlightObj = assets['highlight'];
    var borderObj = assets['border'];
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var hexData = data[x + y * width];
            var uiObj = assets[hexData.type].clone();
            uiObj.translateX(22.5 * x);
            uiObj.translateY(13 * (2 * y + x % 2));
            var hex = new BT.Hex(uiObj, highlightObj);
            this.clickableList.push(hex.getHexMesh());
            this.clickHexMap[hex.getHexMesh().uuid] = hex;
            this.hexList[x + y * width] = hex;
            holderObj.add(uiObj);
            uiObj.add(borderObj.clone());
        }
    }
    // TODO: Tidy up the calculations.
    this.worldWidth = this.width * 22.5;
    this.worldHeight = this.height * 26;
    
    this.holderObj = holderObj;
};

BT.Board.prototype = {
    constructor: BT.Board,

    getClickables: function() {
        return this.clickableList;
    },

    findHexByUuid: function(uuid) {
        return this.clickHexMap[uuid];
    },

    getHex: function(x, y) {
        return this.hexList[x + y * this.width];
    },
    
    addUnit: function(unit, x, y, facing) {
        var hex = this.getHex(x, y);
        this.units[hex.uuid] = unit;
        unit.setHex(hex);
        unit.setFacing(facing);
        this.holderObj.add(unit.getUiObj());
    },
    
    moveUnit: function(unit, hex) {
        this.units[unit.hex.uuid] = null;
        this.units[hex.uuid] = unit;
        unit.setHex(hex);
    },
    
    getUnitAt: function(hex) {
        return this.units[hex.uuid];
    }
};
