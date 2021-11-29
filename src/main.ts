export const loop = () => {
    logGameTick();
    cleanCreepMemory();
    
    // Creep AI to be added here.

};

/**
 * Write game ticks to stdout.
 */
function logGameTick(): void {
    console.log("Current game tick: ${Game.time}");
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