export const randomLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letterArray = letters.split('');
    return letterArray[Math.floor(Math.random() * letterArray.length)];
};

export const randomInt = () => {
    return Math.floor(Math.random() * 10);
};