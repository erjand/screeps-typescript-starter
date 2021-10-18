export function run(creep: Creep): void {
    if (creep.store.getFreeCapacity() > 0) {
        const closestSource = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
        if (creep.harvest(closestSource) == ERR_NOT_IN_RANGE) {
            creep.moveTo(closestSource)
        }
    }
    else {
        if (creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.spawns["Spawn1"]);
        }
    }
}