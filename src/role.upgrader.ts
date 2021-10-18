// export class roleUpgrader {

//     run: function(creep) {
//         if (creep.store[RESOURCE_ENERGY] == 0) {
//             var source = Game.getObjectById('5bbcacbf9099fc012e636209');
//             creep.moveTo(source);
//             creep.harvest(source);
//         }
//         else {
//             if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
//                 creep.moveTo(creep.room.controller);
//             }
//         }
//     }
// };

// //module.exports = roleUpgrader;