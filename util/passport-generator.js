// https://romek.info/ut/paszport.html
import { randomInt, randomLetter } from "./helper.js";

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

const WEIGHTS = [7, 3, 1, 7, 3, 1, 7, 3];
let randomPassport = () => {
    return [randomLetter(), randomLetter(), randomInt(), randomInt(), randomInt(), randomInt(), randomInt(), randomInt()]
}
let setControlDigit = (passportArr, weightsArr) => {
    let sum = 0
    for (let i = 0; i < passportArr.length; i++) {
        let nowInt = i < 2 ? LETTER_MAP[passportArr[i]] : passportArr[i]
        sum += nowInt * weightsArr[i]
    }
    let controlDigit = sum % 10
    return controlDigit
}

export const generatePassport = () => {
    let passportArr = randomPassport()
    let lastDigit = setControlDigit(passportArr, WEIGHTS)
    passportArr.push(lastDigit)
    return passportArr.join('')
}