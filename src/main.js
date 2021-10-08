var roleHarvester = require('role.harvester')
var roleUpgrader = require('role.upgrader');

module.exports.loop = function () {
    console.log('Game Tick', Game.time);
    
    for (var c in Memory.creeps) {
        if (!Game.creeps[c]) {
            delete Memory.creeps[c];
        }
    }

    Game.spawns["Spawn1"].spawnCreep([WORK, WORK, CARRY, MOVE], "Harvester1");

    var myCreep = Game.creeps["Harvester1"];
    roleUpgrader.run(myCreep);
}