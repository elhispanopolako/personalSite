// https://ksiegowosc.infor.pl/podatki/urzad-skarbowy/nip/5660919,numer-identyfikacji-podatkowej.html#ile-cyfr-ma-nip
const rand = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
};

export const generateNip = () => {
    var taxOfficeId = rand(1, 10).toString(10) + rand(1, 10).toString(10) + rand(1, 10).toString(10);
    var rest = ('000000' + rand(0, 1000000).toString(10)).slice(-6);
    var rawNip = taxOfficeId + rest;

    var weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    var sum = 0, i;

    for (i = 0; i < weights.length; i += 1) {
        sum += weights[i] * (+rawNip.charAt(i));
    }

    sum = sum % 11;
    if (sum === 10) {
        return generateNip();
    }
    return rawNip + sum.toString(10);
};