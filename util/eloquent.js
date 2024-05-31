// Triangles
function triangles() {
    let hashIcon = '#'
    let trianglesLength = 7
    let tree = ''
    for (let i = 0; i < trianglesLength; i++) {
        console.log(tree = tree + hashIcon)
    }
}

// FizzBuzz
function fizzBuzz() {
    let number = 1
    let actualNumber = ''
    while (number < 100) {
        switch (true) {
            case number % 5 == 0 && number % 3 == 0:
                actualNumber = 'FizzBuzz'
                break
            case number % 5 == 0:
                actualNumber = 'Buzz'
                break
            case number % 3 == 0:
                actualNumber = 'Fizz'
                break
            default:
                actualNumber = number
        }
        console.log(actualNumber)
        number++
    }
}

// cheesBoard
function cheesBoard() {
    let size = 8
    let result = ''
    for (let col = 0; col < size; col++) {
        if (col % 2 == 0) {
            result = ' '
        } else {
            result = '#'
        }
        for (let row = 0; row < size; row++) {
            if (result[result.length - 1] == '#') {
                result = result + ' '
            } else {
                result = result + '#'
            }
        }
        console.log(result)
    }
}
// Funciones recursivas
function encontrarSolucion(objetivo) {
    function encontrar(actual, historial) {
        if (actual === objetivo) {
            return historial;
        } else if (actual > objetivo) {
            return null;
        } else {
            return encontrar(actual + 5, `(${historial} + 5)`) ??
                encontrar(actual * 3, `(${historial} * 3)`);
        }
    }
    return encontrar(1, "1");
}

console.log(encontrarSolucion(24));

//Minimo 
function min(x, y) {
    return Math.min(x, y)
}
console.log(min(0, 10));
console.log(min(0, -10));
// Recursion
function isEven(number) {
    return number % 2 == 0 ? true : false
}
function isEven2(number) {
    if (number == 0) {
        return true
    } else if (number == 1) {
        return false
    } else if (number < 0) {
        return isEven2(number + 2)
    } else {
        return isEven2(number - 2)
    }
}
// Contando frijoles

function countChar(string, char) {
    let res = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char) {
            res++
        }
    }
    return res
}
let countBs = (string) => {
    return countChar(string, 'B')
}
console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));

// Chapter 4. Objetos y arrays
import JOURNAL from "./eloquent-journal"
let journal = [];

function addEntry(events, squirrel) {
    journal.push({ events, squirrel });
}
addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], true);

function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
            (n01 + n11) * (n00 + n10));
}

console.log(phi([76, 9, 4, 1]));

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL))

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}
console.log(journalEvents(JOURNAL));

for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}