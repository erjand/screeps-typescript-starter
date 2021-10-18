export const loop = () => {
    logGameTick();
    cleanCreepMemory();
    
    if (Object.keys(Game.creeps).length < 1) {
        spawnCreep('Worker1');
    }
};

/**
 * Write game ticks to stdout.
 */
function logGameTick(): void {
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
function spawnCreep(creepName: string) {
    Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, MOVE], creepName);
    const newCreep = Game.creeps[creepName];
    roleUpgrader.run(newCreep);
}