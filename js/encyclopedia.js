var encyclopedia = {};
encyclopedia.fire = {
    active: true,
    earth: "lava",
    air: "energy",
    water: "steam",
    fire: "heat",
    mud: "brick"
};
encyclopedia.earth = {
    active: true,
    fire: "lava",
    air: "dust",
    water: "mud",
    earth: "land",
    pressure: "rock"
};
encyclopedia.air = {
    active: true,
    fire: "energy",
    earth: "dust",
    water: "rain",
    air: "pressure",
    pressure: "wind",
    energy: "lightning"
};
encyclopedia.water = {
    active: true,
    fire: "steam",
    earth: "mud",
    air: "rain",
    water: "sea",
    lava: "obsidian",
    land: "lake"
};
encyclopedia.lava = {
    active: false,
    water: "obsidian"
};
encyclopedia.energy = {
    active: false,
    wind: "movement",
    air: "lightning"
};

encyclopedia.dust = {
    active: false
};
encyclopedia.steam = {
    active: false
};
encyclopedia.mud = {
    active: false,
    fire: "brick"
};
encyclopedia.rain = {
    active: false
};
encyclopedia.pressure = {
    active: false,
    earth: "rock",
    air: "wind"
};
encyclopedia.heat = {
    active: false
};
encyclopedia.sea = {
    active: false
};
encyclopedia.obsidian = {
    active: false,
    rock: 'arrowhead'
};
encyclopedia.rock = {
    active: false,
    obsidian: "arrowhead"
};
encyclopedia.arrowhead = {
    active: false
};
encyclopedia.land = {
    active: false,
    water: "lake",
    river: "swamp"
};
encyclopedia.brick = {
    active: false
};
encyclopedia.lake = {
    active: false,
    movement: "river"
};
encyclopedia.wind = {
    active: false,
    wind: "movement",
    energy: "movement"
};
encyclopedia.movement = {
    active: false,
    lake: "river"
};
encyclopedia.river = {
    active: false,
    land: "swamp"
};
encyclopedia.swamp = {
    active: false,
    lightning: "life"
};
encyclopedia.lightning = {
    active: false,
    swamp: "life"
};
encyclopedia.life = {
    active: false
};