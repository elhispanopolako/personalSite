// https://biznes.interia.pl/finanse/news-seria-i-numer-dowodu-osobistego-jakie-informacje-kryja-w-sob,nId,6699449
let letterMap = {
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15,
    'G': 16,
    'H': 17,
    'I': 18,
    'J': 19,
    'K': 20,
    'L': 21,
    'M': 22,
    'N': 23,
    'O': 24,
    'P': 25,
    'Q': 26,
    'R': 27,
    'S': 28,
    'T': 29,
    'U': 30,
    'V': 31,
    'W': 32,
    'X': 33,
    'Y': 34,
    'Z': 35
}
let weights = [7, 3, 1, 9, 7, 3, 1, 7, 3]


let test = [35, 35, 12, 1, 0, 8, 2, 0, 1]

let result = []
for (let i = 0; i < test.length; i++) {
    console.log(weights[i], test[i])
    result.push(test[i] * weights[i])
}
console.log(result)
console.log(result.reduce((acc, curr) => {
    return acc + curr
}, 0))