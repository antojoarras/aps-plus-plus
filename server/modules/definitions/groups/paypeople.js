const { combineStats, menu, addAura, makeDeco, LayeredBoss, newWeapon, weaponArray, makeRadialAuto } = require('../facilitators.js');
const { base, gunCalcNames, basePolygonDamage, basePolygonHealth, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');
require('./tanks.js');

// Menus
Class.special = {
    PARENT: "genericTank",
    LABEL: "Special menu",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 1e5,
        DENSITY: 20,
        FOV: 1.25,
    },
    IGNORED_BY_AI: true,
    RESET_CHILDREN: true,
    ACCEPTS_SCORE: true,
    CAN_BE_ON_LEADERBOARD: true,
    CAN_GO_OUTSIDE_ROOM: true,
    DRAW_HEALTH: true,
    ARENA_CLOSER: false,
    SHAPE: [
        [0,1],
        [-.3,.3],
        [-1,0],
        [-.3,-.3],
        [0,-1],
        [.3,-.3],
        [1,0],
        [.3,.3],
        [0,1],
    ],
    GUNS: [
        {
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: "Bullet"
            }
        }
    ]
}
Class.subspecial = {
  PARENT: "genericTank",
  LABEL: "Special menu",
  BODY: {
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 1e5,
    DENSITY: 20,
    FOV: 1.25,
  },
  IGNORED_BY_AI: true,
  RESET_CHILDREN: true,
  ACCEPTS_SCORE: true,
  CAN_BE_ON_LEADERBOARD: true,
  CAN_GO_OUTSIDE_ROOM: true,
  DRAW_HEALTH: true,
  ARENA_CLOSER: false,
  SHAPE: [
    [0,1],
    [-.3,.3],
    [-1,0],
    [-.3,-.3],
    [0,-1],
    [.3,-.3],
    [1,0],
    [.3,.3],
    [0,1],
  ],
  GUNS: [
    {
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: "Bullet"
      }
    }
  ]
}
Class.special.UPGRADES_TIER_0 = [
  ["subspecial","subspecial"],
]
