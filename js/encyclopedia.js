var encyclopedia = {};
encyclopedia.fire = {
    active: true,
    earth: ["lava"],
    air: ["energy"],
    water: ["steam"],
    fire: ["heat"],
    mud: ["brick"]
};
encyclopedia.earth = {
    active: true,
    fire: ["lava"],
    air: ["dust"],
    water: ["mud"],
    earth: ["land"],
    pressure: ["rock"],
    fungus: ["land"]
};
encyclopedia.air = {
    active: true,
    fire: ["energy"],
    earth: ["dust"],
    water: ["rain"],
    air: ["pressure"],
    pressure: ["wind"],
    energy: ["lightning"]
};
encyclopedia.water = {
    active: true,
    fire: ["steam"],
    earth: ["mud"],
    air: ["rain"],
    water: ["sea"],
    lava: ["obsidian"],
    land: ["lake"]
};
encyclopedia.lava = {
    active: false,
    water: ["obsidian"],
    land: ["volcano"]
};
encyclopedia.energy = {
    active: false,
    wind: ["movement"],
    air: ["lightning"]
};

encyclopedia.dust = {
    active: false
};
encyclopedia.steam = {
    active: false
};
encyclopedia.mud = {
    active: false,
    fire: ["brick"]
};
encyclopedia.rain = {
    active: false
};
encyclopedia.pressure = {
    active: false,
    earth: ["rock"],
    air: ["wind"]
};
encyclopedia.heat = {
    active: false,
    land: ["desert"]
};
encyclopedia.sea = {
    active: false,
    life: ["algae", "bacteria"],
    volcano: ["island"]
};
encyclopedia.obsidian = {
    active: false,
    rock: ['arrowhead']
};
encyclopedia.rock = {
    active: false,
    obsidian: ["arrowhead"],
    life: ["fungus"],
    fungus: ["land"]
};
encyclopedia.arrowhead = {
    active: false
};
encyclopedia.land = {
    active: false,
    water: ["lake"],
    river: ["swamp"],
    algae: ["plants"],
    land: ["mountains"],
    heat: ["desert"],
    lava: ["volcano"],
    volcano: ["island"]
};
encyclopedia.brick = {
    active: false
};
encyclopedia.lake = {
    active: false,
    movement: ["river"],
    life: ["algae", "bacteria"]
};
encyclopedia.wind = {
    active: false,
    wind: ["movement"],
    energy: ["movement"]
};
encyclopedia.movement = {
    active: false,
    lake: ["river"]
};
encyclopedia.river = {
    active: false,
    land: ["swamp"]
};
encyclopedia.swamp = {
    active: false,
    lightning: ["life"],
    life: ["bacteria"]
};
encyclopedia.lightning = {
    active: false,
    swamp: ["life"]
};
encyclopedia.life = {
    active: false,
    rock: ["fungus"],
    lake: ["algae", "bacteria"],
    sea: ["algae", "bacteria"]
};
encyclopedia.fungus = {
    active: false,
    rock: ["land"],
    earth: ["land"]
};
encyclopedia.algae = {
    active: false,
    land: ["plants"]
};
encyclopedia.mountains = {
    active: false,
};
encyclopedia.desert = {
    active: false,
};
encyclopedia.bacteria = {
    active: false,
    bacteria: ["animals"]
};
encyclopedia.animals = {
    active: false
};
encyclopedia.volcano = {
    active: false,
    land: ["island"],
    sea: ["island"]
};
encyclopedia.island = {
    active: false
}
