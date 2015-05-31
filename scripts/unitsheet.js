var BT = BT || {};

BT.UnitSheet = function() {
};

BT.UnitSheet.prototype = {
    constructor: BT.UnitSheet,
    
    type: 'ENF-4R Enforcer',
    tonnage: 50,
    baseToHit: 4,
    movement: {
        walk: 4  // Running is ceil(walk * 1.5)
    },
    weapons: [
        {   location: 'rightArm',
            weapon: BT.Weapons.Autocannon10
        }, {
            location: 'leftArm',
            weapon: BT.Weapons.LargeLaser
        }, {
            location: 'leftTorso',
            weapon: BT.Weapons.SmallLaser
        }
    ],
    ammo: {
        autocannon10: 10
    },
    armour: {
        head: 9,
        centerTorso: 23,
        leftTorso: 17,
        rightTorso: 17,
        leftArm: 14,
        rightArm: 14,
        leftLeg: 20,
        rightLeg: 20
    },
    damageTransfer: {
        leftLeg: 'leftTorso',
        leftArm: 'leftTorso',
        rightLeg: 'rightTorso',
        rightArm: 'rightTorso',
        leftTorso: 'centerTorso',
        rightTorso: 'centerTorso'
        
    }
};
