export const loop = () => {
    logGameTick();
    cleanCreepMemory();
    spawnCreep();
    
    const myCreep = Game.creeps['Harvester1'];
    roleUpgrader.run(myCreep);
};

/**
 * Write game ticks to stdout.
 */
function logGameTick() {
    console.log('Current game tick: ${Game.time}');
}

/**
 * Remove creeps from Memory which are no longer in the Game.
 */
function cleanCreepMemory() {
    for (const creep in Memory.creeps) {
        if (!(creep in Game.creeps)) {
            delete Memory.creeps[creep];
        }
    }
}

/**
 * Spawn a starting creep.
 */
function spawnCreep() {
    Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, MOVE], 'Harvester1');
}