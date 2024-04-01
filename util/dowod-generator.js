const LETTER_MAP = {
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
};

const WEIGHTS = [7, 3, 1, 9, 7, 3, 1, 7, 3];

const randomLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letterArray = letters.split('');
    return letterArray[Math.floor(Math.random() * letterArray.length)];
};

const randomInt = () => {
    return Math.floor(Math.random() * 10);
};

const randomDowod = () => {
    return [
        randomLetter(),
        randomLetter(),
        randomLetter(),
        randomInt(),
        randomInt(),
        randomInt(),
        randomInt(),
        randomInt(),
        randomInt()
    ];
};

const checkWeights = (dowod, weight) => {
    let result = 0;
    for (let i = 0; i < dowod.length; i++) {
        const nowInt = i < 3 ? LETTER_MAP[dowod[i]] : dowod[i];
        result += nowInt * weight[i];
    }
    return result;
};

export const generateDowod = () => {
    let dowod = randomDowod();
    let result = checkWeights(dowod, WEIGHTS);
    while (result % 10 !== 0) {
        dowod = randomDowod();
        result = checkWeights(dowod, WEIGHTS);
    }
    console.log(result);
    return dowod.join('');
};

