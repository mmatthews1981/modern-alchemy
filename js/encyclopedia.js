var encyclopedia = {};
encyclopedia.fire = {
    active: true,
    earth: ["lava"],
    air: ["energy"],
    water: ["steam"],
    fire: ["heat"],
    mud: ["brick"],
    sand: ["glass"]
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
    energy: ["lightning"],
    steam: ["cloud"],
    cloud: ["sky"]
};
encyclopedia.water = {
    active: true,
    fire: ["steam"],
    earth: ["mud"],
    air: ["rain"],
    water: ["sea"],
    lava: ["obsidian"],
    land: ["lake"],
    heat: ["humidity"]
};
encyclopedia.lava = {
    active: true,
    water: ["obsidian"],
    land: ["volcano"]
};
encyclopedia.energy = {
    active: true,
    wind: ["movement"],
    air: ["lightning"]
};

encyclopedia.dust = {
    active: true
};
encyclopedia.steam = {
    active: true,
    air: ["cloud"]
};
encyclopedia.mud = {
    active: true,
    fire: ["brick"]
};
encyclopedia.rain = {
    active: true
};
encyclopedia.pressure = {
    active: true,
    earth: ["rock"],
    air: ["wind"]
};
encyclopedia.heat = {
    active: true,
    land: ["desert"],
    animal: ["lizard"],
    water: ["humidity"]
};
encyclopedia.sea = {
    active: true,
    life: ["algae", "bacteria"],
    volcano: ["island"]
};
encyclopedia.obsidian = {
    active: true,
    rock: ['arrowhead']
};
encyclopedia.rock = {
    active: true,
    obsidian: ["arrowhead"],
    life: ["fungus"],
    fungus: ["land"],
    animal: ["lizard"],
    wind: ["sand"]
};
encyclopedia.arrowhead = {
    active: true
};
encyclopedia.land = {
    active: true,
    water: ["lake"],
    river: ["swamp"],
    algae: ["plants"],
    land: ["mountains"],
    heat: ["desert"],
    lava: ["volcano"],
    volcano: ["island"]
};
encyclopedia.brick = {
    active: true,
    glass: ["house"]
};
encyclopedia.lake = {
    active: true,
    movement: ["river"],
    life: ["algae", "bacteria"]
};
encyclopedia.wind = {
    active: true,
    wind: ["movement"],
    energy: ["movement"],
    rock: ["sand"]
};
encyclopedia.movement = {
    active: true,
    lake: ["river"]
};
encyclopedia.river = {
    active: true,
    land: ["swamp"]
};
encyclopedia.swamp = {
    active: true,
    lightning: ["life"],
    life: ["bacteria"]
};
encyclopedia.lightning = {
    active: true,
    swamp: ["life"]
};
encyclopedia.life = {
    active: true,
    rock: ["fungus"],
    lake: ["algae", "bacteria"],
    sea: ["algae", "bacteria"]
};
encyclopedia.fungus = {
    active: true,
    rock: ["land"],
    earth: ["land"]
};
encyclopedia.algae = {
    active: true,
    land: ["plants"]
};
encyclopedia.mountains = {
    active: true,
};
encyclopedia.desert = {
    active: true,
};
encyclopedia.bacteria = {
    active: true,
    bacteria: ["animal"]
};
encyclopedia.animal = {
    active: true,
    heat: ["lizard"],
    rock: ["lizard"]
};
encyclopedia.volcano = {
    active: true,
    land: ["island"],
    sea: ["island"]
};
encyclopedia.island = {
    active: true
};
encyclopedia.lizard = {
    active: true,
    humidity: ["florida"]
};
encyclopedia.humidity = {
    active: true,
    lizard: ["florida"]
};
encyclopedia.florida = {
    active: true
};
encyclopedia.sand = {
    active: true,
    fire: ["glass"]
};
encyclopedia.glass = {
    active: true,
    glass: ["glasses"],
    brick: ["house"]
};
encyclopedia.glasses = {
    active: true
};
encyclopedia.house = {
    active: true
};
encyclopedia.cloud = {
    active: true,
    cloud: ["sky"],
    air: ["sky"]
};
encyclopedia.sky = {
    active: true
}
