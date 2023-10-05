let makeDecoration = (defs) => new Tile({
    init: tile => {
        for (let [def, amount] of defs) {
            def = ensureIsClass(def);
            let checkRadius = 10 + def.SIZE;
            for (; amount; amount--) {
                let i = 0, position = {};
                do {
                    position.x = tile.x + room.tileWidth * (Math.random() - 0.5);
                    position.y = tile.y + room.tileHeight * (Math.random() - 0.5);
                    if (++i > 200) return util.warn("Could not place a decorative obstacle entity.");
                } while (dirtyCheck(position, checkRadius));
                let o = new Entity(position);
                o.team = TEAM_ROOM;
                o.facing = ran.randomAngle();
                o.define(def);
                o.protect();
                o.life();
            }
        }
    }
});

module.exports = {
    rock: makeDecoration([['rock', 0], ['gravel', 3]]),
    roid: makeDecoration([['rock', 2], ['gravel', 2]])
};