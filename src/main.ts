export const loop = () => {
    console.log('Current game tick: ${Game.time}');
    
    for (const creep in Memory.creeps) {
        if (!(creep in Game.creeps)) {
            delete Memory.creeps[creep];
        }
    }

    Game.spawns["Spawn1"].spawnCreep([WORK, WORK, CARRY, MOVE], "Harvester1");

    var myCreep = Game.creeps["Harvester1"];
    roleUpgrader.run(myCreep);
}