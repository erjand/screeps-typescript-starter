import { run as harvesterRun } from "./job.harvester";

export const loop = () => {
    logGameTick();
    cleanCreepMemory();
    
    Game.spawns["Spawn1"].spawnCreep([WORK, WORK, CARRY, MOVE], "Harvester1");
    const newCreep = Game.creeps["Harvester1"];
    harvesterRun(newCreep);



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