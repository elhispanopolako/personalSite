import { randomInt } from "./helper.js";

// https://ksiegowosc.infor.pl/podatki/urzad-skarbowy/nip/5660919,numer-identyfikacji-podatkowej.html#ile-cyfr-ma-nip
const rand = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
};

export const generateNip = () => {
    let taxOfficeId = randomInt().toString() + randomInt().toString() + randomInt().toString();
    let rest = ('000000' + rand(0, 1000000).toString()).slice(-6);
    let rawNip = taxOfficeId + rest;

    let weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    let sum = 0, i;

    for (i = 0; i < weights.length; i++) {
        sum += weights[i] * (+rawNip.charAt(i));
    }

    sum = sum % 11;
    if (sum === 10) {
        return generateNip();
    }
    return rawNip + sum.toString(10);
};