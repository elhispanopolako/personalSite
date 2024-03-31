// https://biznes.interia.pl/finanse/news-seria-i-numer-dowodu-osobistego-jakie-informacje-kryja-w-sob,nId,6699449'

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


let randomLetter = () => {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let letterArray = letters.split('')
    return letterArray[Math.floor(Math.random() * letterArray.length)]
}
let randomInt = () => {
    return Math.floor(Math.random() * 10)
}
let randomDowod = () => {
    return [randomLetter(), randomLetter(), randomLetter(), randomInt(), randomInt(), randomInt(), randomInt(), randomInt(), randomInt()]
}

let checkWeights = (dowod, weight) => {
    let result = []
    for (let i = 0; i < dowod.length; i++) {
        let nowInt
        if (i < 3) {
            nowInt = letterMap[dowod[i]]
        } else {
            nowInt = dowod[i]
        }
        result.push(nowInt * weight[i])
    }
    result = result.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    return result

}
export const generateDowod = () => {
    let dowod = randomDowod()
    let result = checkWeights(dowod, weights)
    while (result % 10 !== 0) {
        dowod = randomDowod()
        result = checkWeights(dowod, weights)
    }
    console.log(result)
    return dowod.join('')
}


