var BT = BT || {};

BT.Board = function(width, height, data, assets, holderObj) {
    this.width = width;
    this.height = height;
    this.clickableList = [];
    this.clickHexMap = {};
    this.hexList = [];
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var hexData = data[x + y * width];
            var uiObj = assets[hexData.type].clone();
            uiObj.translateX(22.5 * x);
            uiObj.translateY(13 * (2 * y + x % 2));
            var hex = new BT.Hex(uiObj);
            hex.setHighlight(false);
            this.clickableList.push(hex.getHexMesh());
            this.clickHexMap[hex.getHexMesh().uuid] = hex;
            this.hexList[x + y * width] = hex;
            holderObj.add(uiObj);
        }
    }
    // TODO: Tidy up the calculations.
    this.worldWidth = this.width * 22.5;
    this.worldHeight = this.height * 26;
};

BT.Board.prototype = {
    constructor: BT.Board,
    
    getClickables: function() {
        return this.clickableList;
    },
    
    findHexByUuid: function(uuid) {
        return this.clickHexMap[uuid];
    }
};
