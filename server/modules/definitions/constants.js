module.exports = {
	basePolygonDamage: 1,
	basePolygonHealth: 2,

	// SKILL DEFINITIONS
	dfltskl: 9,
	smshskl: 12,

	// NAMES
	statnames: {
	    smasher: {
			RELOAD: 'Engine Acceleration',	
		},
		drone: {
			BULLET_SPEED: 'Drone Speed',
			BULLET_HEALTH: 'Drone Health',
			BULLET_PEN: 'Drone Penetration',
			BULLET_DAMAGE: 'Drone Damage',
			RELOAD: 'Respawn Rate',
		},
		necro: {
			BULLET_SPEED: 'Drone Speed',
			BULLET_HEALTH: 'Drone Health',
			BULLET_PEN: 'Drone Penetration',
			BULLET_DAMAGE: 'Drone Damage',
			RELOAD: 'Max Drone Count',
		},
		swarm: {
			BULLET_SPEED: 'Swarm Speed',
			BULLET_HEALTH: 'Swarm Health',
			BULLET_PEN: 'Swarm Penetration',
			BULLET_DAMAGE: 'Swarm Damage',
		},
		trap: {
			BULLET_SPEED: 'Placement Speed',
			BULLET_HEALTH: 'Trap Health',
			BULLET_PEN: 'Trap Penetration',
			BULLET_DAMAGE: 'Trap Damage',
		},
		generic: {
			BODY_DAMAGE: 'Body Damage',
			MAX_HEALTH: 'Max Health',
			BULLET_SPEED: 'Bullet Speed',
			BULLET_HEALTH: 'Bullet Health',
			BULLET_PEN: 'Bullet Penetration',
			BULLET_DAMAGE: 'Bullet Damage',
			RELOAD: 'Reload',
			MOVE_SPEED: 'Movement Speed',
			SHIELD_REGEN: 'Shield Regeneration',
			SHIELD_CAP: 'Shield Capacity',
		},
		lancer: {
			BULLET_SPEED: 'Lance Range',
			BULLET_HEALTH: 'Lance Longevity',
			BULLET_PEN: 'Lance Sharpness',
			BULLET_DAMAGE: 'Lance Damage',
			RELOAD: 'Lance Density',
		},
		healer: {
			BULLET_PEN: 'Heal Rate',
			BULLET_DAMAGE: 'Heal Amount',
		},
	},
	gunCalcNames: {
	    default: 0,
	    bullet: 1,
	    drone: 2,
	    swarm: 3,
	    fixedReload: 4,
	    thruster: 5,
	    sustained: 6,
	    necro: 7,
	    trap: 8,
	},
	base: {
	    ACCEL: 1.6,
	    SPEED: 5.25,
	    HEALTH: 20,
	    DAMAGE: 3,
	    RESIST: 1,
	    PENETRATION: 1.05,
	    SHIELD: 8,
	    REGEN: 0.025,
	    FOV: 1,
	    DENSITY: 0.5,
	}
};
