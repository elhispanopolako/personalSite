const roads = [
    "Casa de Alice-Casa de Bob", "Casa de Alice-Cabaña",
    "Casa de Alice-Oficina de Correos", "Casa de Bob-Ayuntamiento",
    "Casa de Daria-Casa de Ernie", "Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete", "Casa de Grete-Granja",
    "Casa de Grete-Tienda", "Plaza del Mercado-Granja",
    "Plaza del Mercado-Oficina de Correos", "Plaza del Mercado-Tienda",
    "Plaza del Mercado-Ayuntamiento", "Tienda-Ayuntamiento"
];
function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (from in graph) {
            graph[from].push(to);
        } else {
            graph[from] = [to];
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return { place: destination, address: p.address };
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}


function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Terminado en ${turn} turnos`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Movido a ${action.direction}`);
    }
}
function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
}
VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({ place, address });
    }
    return new VillageState("Oficina de Correos", parcels);
};
const mailRoute = [
    "Casa de Alice", "Cabaña", "Casa de Alice", "Casa de Bob",
    "Ayuntamiento", "Casa de Daria", "Casa de Ernie",
    "Casa de Grete", "Tienda", "Casa de Grete", "Granja",
    "Plaza del Mercado", "Oficina de Correos"
];
function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return { direction: memory[0], memory: memory.slice(1) };
}
function findRoute(graph, from, to) {
    let work = [{ at: from, route: [] }];
    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
}
function goalOrientedRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return { direction: route[0], memory: route.slice(1) };
}
let villageStateRandom = VillageState.random()
runRobot(villageStateRandom, randomRobot);
runRobot(villageStateRandom, routeRobot, []);
runRobot(villageStateRandom, goalOrientedRobot, []);

function countSteps(state, robot, memory) {
    for (let steps = 0; ; steps++) {
        if (state.parcels.length == 0) {
            return steps
        }
        let action = robot(state, memory)
        state = state.move(action.direction)
        memory = action.memory
    }
}

function compareRobots(robot1, memory1, robot2, memory2) {
    let count1 = 0, count2 = 0

    for (let i = 0; i < 100; i++) {
        let state = VillageState.random()
        count1 += countSteps(state, robot1, memory1)
        count2 += countSteps(state, robot2, memory2)

    }
    console.log(`Robot1 have a average of ${count1 / 100} steps`)
    console.log(`Robot2 have a average of ${count2 / 100} steps`)
    return [count1, count2]
}

compareRobots(routeRobot, [], goalOrientedRobot, []);

function myRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let routes = parcels.map(parcel => {
            if (parcel.place !== place) {
                return { route: findRoute(roadGraph, place, parcel.place), pickUp: true }
            } else {
                return { route: findRoute(roadGraph, place, parcel.address), pickUp: false }
            }
        })
        function score({ route, pickUp }) {
            return (pickUp ? 0.5 : 0) - route.length
        }
        route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route
    }
    return { direction: route[0], memory: route.slice(1) }
}
compareRobots(myRobot, [], goalOrientedRobot, []);

class PGGroup {
    #members
    constructor(members) {
        this.#members = members
    }
    add(value) {
        if (this.has(value)) {
            return this
        }
        return new PGGroup(this.#members.concat([value]))
    }
    has(value) {
        return this.#members.includes(value)
    }
    delete(value) {
        if (!this.has(value)) {
            return this
        }
        return new PGGroup(this.#members.filter(member => member !== value))
    }
    static empty = new PGGroup([])
}

let a = PGGroup.empty.add("a")
let ab = a.add("b")
let b = ab.delete("a")
console.log(b.has("b"));
console.log(a.has("b"));
console.log(b.has("a"));