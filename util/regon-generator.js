import { randomInt } from "./helper.js"

const regon9Weights = [8, 9, 2, 3, 4, 5, 6, 7]
const regon14Weights = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8]

export const generateRegon9 = () => {
    let baseRegon = new Array(8).fill(1).map((num) => num * randomInt())
    let sum = 0
    for (let i = 0; i < baseRegon.length; i++) {
        sum += baseRegon[i] * regon9Weights[i]
    }
    let controlWeight = sum % 11 == 10 ? 0 : sum % 11
    baseRegon.push(controlWeight)

    return baseRegon.join('')
}

export const generateRegon14 = () => {
    let baseRegon = new Array(13).fill(1).map((num) => num * randomInt())
    let sum = 0
    for (let i = 0; i < baseRegon.length; i++) {
        sum += baseRegon[i] * regon14Weights[i]
    }
    let controlWeight = sum % 11 == 10 ? 0 : sum % 11
    baseRegon.push(controlWeight)

    return baseRegon.join('')
}