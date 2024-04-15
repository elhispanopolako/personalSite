import { randomInt, randomLetter } from "./helper.js"

/*
Format numeru decyzji:
AA/BBBBBB/CCCC/D
Gdzie:
AA – dwucyfrowe oznaczenie TERYT województwa;
BBBBBB - sześciocyfrowe oznaczenie kolejnych decyzji we WZOoN;
CCCC – czterocyfrowe oznaczenia roku;
D = 1, 2, 31, 32, 41, 42 jako oznaczenie instancji, w której zapadła decyzja (1 – I instancja, 2 -II instancja, 31 – sąd I instancja, 32 – sąd II instancja, 41 – w trybie nadzoru I instancja, 42 – w trybie nadzoru II instancja)
*/
let terytCode = ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32']
let year = new Date().getFullYear()
let instance = [1, 2, 31, 32, 41, 42]

export const generateWZONNumber = () => {
    let randomTeryt = Math.floor(Math.random() * terytCode.length - 1) + 1
    let randomInstance = Math.floor(Math.random() * instance.length - 1) + 1
    let randomSixNumbers = new Array(6).fill(1).map((num) => num * randomInt()).join('')
    return `${terytCode[randomTeryt]}/${randomSixNumbers}/${year}/${instance[randomInstance]}`
}