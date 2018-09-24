var encyclopedia = {};
encyclopedia.fire = {
    active: true,
    earth: "lava",
    air: "energy",
    water: "steam",
    fire: "heat"
};
encyclopedia.earth = {
    active: true,
    fire: "lava",
    air: "dust",
    water: "mud",
    earth: "pressure"
};
encyclopedia.air = {
    active: true,
    fire: "energy",
    earth: "dust",
    water: "rain",
    air: "pressure"
};
encyclopedia.water = {
    active: true,
    fire: "steam",
    earth: "mud",
    air: "rain",
    water: "sea"
};
encyclopedia.lava = {
    active: false
};
encyclopedia.energy = {
    active: false
};

encyclopedia.dust = {
    active: false
};
encyclopedia.steam = {
    active: false
};
encyclopedia.mud = {
    active: false
};
encyclopedia.rain = {
    active: false
};
encyclopedia.pressure = {
    active: false
};
encyclopedia.heat = {
    active: false
};
encyclopedia.sea = {
    active: false
}