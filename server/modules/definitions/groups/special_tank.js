const {
  combineStats,
  menu,
  addAura,
  makeDeco,
  LayeredBoss,
  newWeapon,
  weaponArray,
  makeRadialAuto,
} = require("../facilitators.js");
const {
  base,
  gunCalcNames,
  basePolygonDamage,
  basePolygonHealth,
  dfltskl,
  statnames,
} = require("../constants.js");
const g = require("../gunvals.js");
require("./tanks.js");

// Menus
Class.special = {
  PARENT: "genericTank",
  LABEL: "Special_tank",
  BODY: {
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10e5,
    DENSITY: 20,
    FOV: 1.25,
  },
  SKILL_CAP: Array(10).fill(dfltskl),
  IGNORED_BY_AI: true,
  RESET_CHILDREN: true,
  ACCEPTS_SCORE: true,
  CAN_BE_ON_LEADERBOARD: true,
  CAN_GO_OUTSIDE_ROOM: false,
  DRAW_HEALTH: true,
  ARENA_CLOSER: true,
  GUNS: [
    {
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: "bullet",
      },
    },
  ],
};

Class.special.UPGRADES_TIER_0 = [];
