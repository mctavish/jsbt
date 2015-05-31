var BT = BT || {};

BT.Weapon = function(parameters) {
    for (var key in parameters) {
        if (parameters.hasOwnProperty(key)) {
            this[key] = parameters[key];
        }
    }
};

BT.Weapon.prototype = {
    constructor: BT.Weapon
};

BT.Weapons = {};
BT.Weapons.Autocannon10 = new BT.Weapon({
    type: 'Autocannon 10',
    damage: 10,
    range: {
        short: 5,
        medium: 10,
        long: 15
    },
    needsAmmo: true
});
BT.Weapons.LargeLaser = new BT.Weapon({
    type: 'Large Laser',
    damage: 8,
    range: {
        short: 5,
        medium: 10,
        long: 15
    },
    needsAmmo: false
});
BT.Weapons.SmallLaser = new BT.Weapon({
    type: 'Small Laser',
    damage: 3,
    range: {
        short: 1,
        medium: 2,
        long: 3
    },
    needsAmmo: false
});
