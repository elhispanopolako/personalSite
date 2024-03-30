const rand = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
};

export const getMonthOffsetForPesel = (century) => {
    switch (century) {
        case 18:
            return 80;
        case 19:
            return 0;
        case 20:
            return 20;
        case 21:
            return 40;
        case 22:
            return 60;
    }
};

export const daysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
};

export const last2Digits = (number) => {
    var n = Math.floor(number % 100);
    return ('00' + n.toString(10)).slice(-2);
};

export const computePeselControlDigit = (rawPesel) => {
    var peselDigits = rawPesel.split('').map(function (d) {
        return +d;
    });
    var weigths = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

    var sum1 = 0,
        i;
    for (i = 0; i < weigths.length; i += 1) {
        sum1 += weigths[i] * peselDigits[i];
    }

    sum1 = (10 - (sum1 % 10)) % 10;
    return sum1;
};

export const generatePeselUnder18 = () => {
    var today = new Date();
    var birthYear = rand(today.getFullYear() - 18, today.getFullYear());

    var century = Math.floor(birthYear / 100);
    var monthOffset = getMonthOffsetForPesel(century);

    var birthMonth = rand(1, 13);
    var birthDay = rand(1, daysInMonth(birthYear, birthMonth) + 1);
    var peselMonth = birthMonth + monthOffset;

    var fourRandomDigits = ('0000' + rand(0, 10000).toString(10)).slice(-4);

    var rawPesel =
        last2Digits(birthYear) +
        last2Digits(peselMonth) +
        last2Digits(birthDay) +
        fourRandomDigits;

    var controlDigit = computePeselControlDigit(rawPesel);
    return rawPesel + controlDigit;
};

export const generatePeselAfter18 = () => {
    var today = new Date();
    var birthYear = rand(today.getFullYear() - 99, today.getFullYear() - 19);

    var century = Math.floor(birthYear / 100);
    var monthOffset = getMonthOffsetForPesel(century);

    var birthMonth = rand(1, 13);
    var birthDay = rand(1, daysInMonth(birthYear, birthMonth) + 1);
    var peselMonth = birthMonth + monthOffset;

    var fourRandomDigits = ('0000' + rand(0, 10000).toString(10)).slice(-4);

    var rawPesel =
        last2Digits(birthYear) +
        last2Digits(peselMonth) +
        last2Digits(birthDay) +
        fourRandomDigits;

    var controlDigit = computePeselControlDigit(rawPesel);
    return rawPesel + controlDigit;
};

export const generatePeselFor6YearsOld = () => {
    var today = new Date();
    var birthYear = today.getFullYear() - 6;

    var century = Math.floor(birthYear / 100);
    var monthOffset = getMonthOffsetForPesel(century);

    var birthMonth = rand(1, 13);
    var birthDay = rand(1, daysInMonth(birthYear, birthMonth) + 1);
    var peselMonth = birthMonth + monthOffset;

    var fourRandomDigits = ('0000' + rand(0, 10000).toString(10)).slice(-4);

    var rawPesel =
        last2Digits(birthYear) +
        last2Digits(peselMonth) +
        last2Digits(birthDay) +
        fourRandomDigits;

    var controlDigit = computePeselControlDigit(rawPesel);
    var PESEL = rawPesel + controlDigit;
    return PESEL;
};
export const generatePeselForBetween7and9YearsOld = () => {
    var today = new Date();
    var birthYear = rand(today.getFullYear() - 9, today.getFullYear() - 7);

    var century = Math.floor(birthYear / 100);
    var monthOffset = getMonthOffsetForPesel(century);

    var birthMonth = rand(1, 13);
    var birthDay = rand(1, daysInMonth(birthYear, birthMonth) + 1);
    var peselMonth = birthMonth + monthOffset;

    var fourRandomDigits = ('0000' + rand(0, 10000).toString(10)).slice(-4);

    var rawPesel =
        last2Digits(birthYear) +
        last2Digits(peselMonth) +
        last2Digits(birthDay) +
        fourRandomDigits;

    var controlDigit = computePeselControlDigit(rawPesel);
    var PESEL = rawPesel + controlDigit;
    return PESEL;
};
export const generatePeselForBetween10and20YearsOld = () => {
    var today = new Date();
    var birthYear = rand(today.getFullYear() - 20, today.getFullYear() - 10);

    var century = Math.floor(birthYear / 100);
    var monthOffset = getMonthOffsetForPesel(century);

    var birthMonth = rand(1, 13);
    var birthDay = rand(1, daysInMonth(birthYear, birthMonth) + 1);
    var peselMonth = birthMonth + monthOffset;

    var fourRandomDigits = ('0000' + rand(0, 10000).toString(10)).slice(-4);

    var rawPesel =
        last2Digits(birthYear) +
        last2Digits(peselMonth) +
        last2Digits(birthDay) +
        fourRandomDigits;

    var controlDigit = computePeselControlDigit(rawPesel);
    var PESEL = rawPesel + controlDigit;
    return PESEL;
};
export const generatePeselForBetween21and24YearsOld = () => {
    var today = new Date();
    var birthYear = rand(today.getFullYear() - 24, today.getFullYear() - 21);

    var century = Math.floor(birthYear / 100);
    var monthOffset = getMonthOffsetForPesel(century);

    var birthMonth = rand(1, 13);
    var birthDay = rand(1, daysInMonth(birthYear, birthMonth) + 1);
    var peselMonth = birthMonth + monthOffset;

    var fourRandomDigits = ('0000' + rand(0, 10000).toString(10)).slice(-4);

    var rawPesel =
        last2Digits(birthYear) +
        last2Digits(peselMonth) +
        last2Digits(birthDay) +
        fourRandomDigits;

    var controlDigit = computePeselControlDigit(rawPesel);
    var PESEL = rawPesel + controlDigit;
    return PESEL;
};
export const generatePeselForBetween1and3YearsOld = () => {
    var today = new Date();
    var birthYear = rand(today.getFullYear() - 3, today.getFullYear() - 1);

    var century = Math.floor(birthYear / 100);
    var monthOffset = getMonthOffsetForPesel(century);

    var birthMonth = rand(1, 13);
    var birthDay = rand(1, daysInMonth(birthYear, birthMonth) + 1);
    var peselMonth = birthMonth + monthOffset;

    var fourRandomDigits = ('0000' + rand(0, 10000).toString(10)).slice(-4);

    var rawPesel =
        last2Digits(birthYear) +
        last2Digits(peselMonth) +
        last2Digits(birthDay) +
        fourRandomDigits;

    var controlDigit = computePeselControlDigit(rawPesel);
    var PESEL = rawPesel + controlDigit;
    return PESEL;
};
export const generatePeselForBetween3and5YearsOld = () => {
    var today = new Date();
    var birthYear = rand(today.getFullYear() - 5, today.getFullYear() - 3);

    var century = Math.floor(birthYear / 100);
    var monthOffset = getMonthOffsetForPesel(century);

    var birthMonth = rand(1, 13);
    var birthDay = rand(1, daysInMonth(birthYear, birthMonth) + 1);
    var peselMonth = birthMonth + monthOffset;

    var fourRandomDigits = ('0000' + rand(0, 10000).toString(10)).slice(-4);

    var rawPesel =
        last2Digits(birthYear) +
        last2Digits(peselMonth) +
        last2Digits(birthDay) +
        fourRandomDigits;

    var controlDigit = computePeselControlDigit(rawPesel);
    var PESEL = rawPesel + controlDigit;
    return PESEL;
};
