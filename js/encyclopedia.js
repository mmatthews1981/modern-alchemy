var encyclopedia = {};
encyclopedia.fire = {
    active: true,
    earth: ["lava"],
    air: ["energy"],
    water: ["steam"],
    fire: ["heat"],
    mud: ["brick"],
    sand: ["glass"],
    rock: ["metal"],
    bird: ["phoenix"]
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
    heat: ["humidity"],
    bird: ["duck"]
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
    wind: ["sand"],
    fire: ["metal"]
};
encyclopedia.arrowhead = {
    active: true
};
encyclopedia.land = {
    active: true,
    water: ["lake"],
    river: ["swamp"],
    algae: ["plant"],
    land: ["mountains"],
    heat: ["desert"],
    lava: ["volcano"],
    pinecone: ["pine"]
};
encyclopedia.brick = {
    active: true,
    glass: ["house"]
};
encyclopedia.lake = {
    active: true,
    movement: ["river"],
    life: ["algae", "bacteria"],
    bird: ["duck"]
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
    swamp: ["life"],
    sand: ["glass"]
};
encyclopedia.life = {
    active: true,
    rock: ["fungus"],
    lake: ["algae", "bacteria"],
    sea: ["algae", "bacteria"],
    time: ["evolution", "death"]
};
encyclopedia.fungus = {
    active: true,
    rock: ["land"],
    earth: ["land"]
};
encyclopedia.algae = {
    active: true,
    land: ["plant"]
};
encyclopedia.mountains = {
    active: true,
};
encyclopedia.desert = {
    active: true,
};
encyclopedia.bacteria = {
    active: true,
    bacteria: ["animal"],
    evolution: ["jellyfish","coral"]
};
encyclopedia.animal = {
    active: true,
    heat: ["lizard"],
    rock: ["lizard"],
    plant: ["fungus"],
    sky: ["bird"],
    pinecone: ["squirrel"]
};
encyclopedia.plant = {
  active: true,
    animal:  ["fungus"],
    sky: ["bird"],
    evolution: ["moss"],
    island: ["palmtree"]
};
encyclopedia.volcano = {
    active: true,
    sea: ["island"]
};
encyclopedia.island = {
    active: true,
    plant: ["palmtree"]
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
    fire: ["glass"],
    lightning: ["glass"],
    glass: ["time"]
};
encyclopedia.glass = {
    active: true,
    glass: ["glasses"],
    brick: ["house"],
    sand: ["time"]
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
    active: true,
    animal: ["bird"]
};
encyclopedia.bird = {
    active: true,
    water: ["duck"],
    lake: ["duck"],
    fire: ["phoenix"]
};
encyclopedia.duck = {
    active: true
};
encyclopedia.time = {
    active: true,
    life: ["evolution", "death"],
};
encyclopedia.evolution = {
    active: true,
    plant: ["moss"],
    moss: ["fern"],
    fern: ["seed"],
    seed: ["flower", "pine"],
    bacteria: ["jellyfish", "coral"]
};
encyclopedia.moss = {
    active: true,
    evolution: ["fern"]
};
encyclopedia.fern = {
    active: true,
    evolution: ["seed"]
};
encyclopedia.seed = {
    active: true,
    evolution: ["flower","pine"],
    pine: ["pinecone"]
};
encyclopedia.flower = {
    active: true,
};
encyclopedia.pine = {
    active: true,
    seed: ["pinecone"],
    pine: ["forest"]
};
encyclopedia.pinecone = {
    active: true,
    land: ["pine"],
    animal: ["squirrel"]
};
encyclopedia.squirrel = {
    active: true
};
encyclopedia.jellyfish = {
    active: true
};
encyclopedia.coral = {
    active: true
};
encyclopedia.palmtree = {
    active: true
};
encyclopedia.death = {
    active: true
};
encyclopedia.metal = {
    active: true
};
encyclopedia.forest = {
    active: true
};
encyclopedia.phoenix = {
    active: true
};
