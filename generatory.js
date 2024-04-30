import { generateDowod, generateMDowod } from "./util/dowod-generator.js"
import { generateBIC, generatePolishIBAN, generateRandomIBAN, generateUUID, generateVIN } from "./util/faker-generator.js"
import { generateLandRegister } from "./util/landRegisterGenerator.js"
import { generateNip } from "./util/nip-generator.js"
import { generatePassport } from "./util/passport-generator.js"
import { generatePeselAfter18, generatePeselFor6YearsOld, generatePeselForBetween10and20YearsOld, generatePeselForBetween1and3YearsOld, generatePeselForBetween21and24YearsOld, generatePeselForBetween3and5YearsOld, generatePeselForBetween7and9YearsOld, generatePeselUnder18 } from "./util/pesel-generator.js"
import { generateRegon14, generateRegon9 } from "./util/regon-generator.js"
import { generateWZONNumber } from "./util/wzon-generator.js"

// Tu będą funkcje które będziemy generować dla strony z generatorami
const generatorTitles = document.querySelectorAll('.generatorContainer > h3')
const generatorContainer = document.querySelectorAll('.generatorContainer')
const loader = document.querySelector('.loader')
const searchInput = document.querySelector('#searchInput')
const generatedDataBtn = document.querySelectorAll('.generatedData')
const generateBtn = document.querySelectorAll('.generateBtn')
const toastCont = document.querySelector('.toasts')
const peselUnder18Data = document.querySelector('#peselUnder18 .generatedData .buttonText')
const peselUnder18Btn = document.querySelector('#peselUnder18 .generateBtn')
const peselOver18Data = document.querySelector('#peselOver18 .generatedData .buttonText')
const peselOver18Btn = document.querySelector('#peselOver18 .generateBtn')
const pesel6Data = document.querySelector('#pesel6 .generatedData .buttonText')
const pesel6Btn = document.querySelector('#pesel6 .generateBtn')
const pesel7to9Data = document.querySelector('#pesel7to9 .generatedData .buttonText')
const pesel7to9Btn = document.querySelector('#pesel7to9 .generateBtn')
const pesel10to20Data = document.querySelector('#pesel10to20 .generatedData .buttonText')
const pesel10to20Btn = document.querySelector('#pesel10to20 .generateBtn')
const pesel21to24Data = document.querySelector('#pesel21to24 .generatedData .buttonText')
const pesel21to24Btn = document.querySelector('#pesel21to24 .generateBtn')
const pesel1to3Data = document.querySelector('#pesel1to3 .generatedData .buttonText')
const pesel1to3Btn = document.querySelector('#pesel1to3 .generateBtn')
const pesel3to5Data = document.querySelector('#pesel3to5 .generatedData .buttonText')
const pesel3to5Btn = document.querySelector('#pesel3to5 .generateBtn')
const dowodData = document.querySelector('#dowod .generatedData .buttonText')
const dowodBtn = document.querySelector('#dowod .generateBtn')
const mdowodData = document.querySelector('#mDowod .generatedData .buttonText')
const mdowodBtn = document.querySelector('#mDowod .generateBtn')
const paszportData = document.querySelector('#paszport .generatedData .buttonText')
const paszportBtn = document.querySelector('#paszport .generateBtn')
const nipData = document.querySelector('#nip .generatedData .buttonText')
const nipBtn = document.querySelector('#nip .generateBtn')
const regon9Data = document.querySelector('#regon9 .generatedData .buttonText')
const regon9Btn = document.querySelector('#regon9 .generateBtn')
const regon14Data = document.querySelector('#regon14 .generatedData .buttonText')
const regon14Btn = document.querySelector('#regon14 .generateBtn')
const ibanData = document.querySelector('#iban .generatedData .buttonText')
const ibanBtn = document.querySelector('#iban .generateBtn')
const ibanRandomData = document.querySelector('#ibanRandom .generatedData .buttonText')
const ibanRandomBtn = document.querySelector('#ibanRandom .generateBtn')
const vinData = document.querySelector('#vin .generatedData .buttonText')
const vinBtn = document.querySelector('#vin .generateBtn')
const bicData = document.querySelector('#bic .generatedData .buttonText')
const bicBtn = document.querySelector('#bic .generateBtn')
const wzonData = document.querySelector('#wzon .generatedData .buttonText')
const wzonBtn = document.querySelector('#wzon .generateBtn')
const uuidData = document.querySelector('#uuid .generatedData .buttonText')
const uuidBtn = document.querySelector('#uuid .generateBtn')
const landRegisterData = document.querySelector('#landRegister .generatedData .buttonText')
const landRegisterBtn = document.querySelector('#landRegister .generateBtn')

function searchGenerators() {
    let searchString = searchInput.value.toUpperCase().trim()
    let textValue
    console.log(generatorTitles.length)
    for (let i = 0; i < generatorTitles.length; i++) {
        textValue = generatorTitles[i].textContent.toUpperCase()
        if (textValue.indexOf(searchString) > -1) {
            generatorContainer[i].style.display = ""
        } else {
            generatorContainer[i].style.display = "none"
        }

    }

}
function hideLoader() {
    loader.style.display = 'none'
}

function changeFontSize() {
    generatedDataBtn.forEach((button) => {
        let btnText = button.textContent.trim()
        if (btnText.length > 25) {
            button.style.fontSize = "1.3rem"
        }
    })
    setTimeout(hideLoader, 1000)
}

function generateDataOnPageEnter() {
    generateBtn.forEach((button) => {
        button.click()
    })
}
function createToast(text) {
    const toastEl = document.createElement('div')
    toastEl.classList.add('toast')
    toastEl.innerText = `${text} was copied to clipboard`

    toastCont.appendChild(toastEl)

    setTimeout(() => { toastEl.remove() }, 2000)
}

// Add eventListeners
searchInput.addEventListener('keyup', searchGenerators)

generatedDataBtn.forEach((button) => {
    button.addEventListener('click', () => {
        let text = button.textContent.trim()
        navigator.clipboard.writeText(text)
        createToast(text)

    })
})
peselUnder18Btn.addEventListener('click', () => {
    let pesel = generatePeselUnder18()
    peselUnder18Data.textContent = pesel
})

peselOver18Btn.addEventListener('click', () => {
    let pesel = generatePeselAfter18()
    peselOver18Data.textContent = pesel
})
pesel6Btn.addEventListener('click', () => {
    let pesel = generatePeselFor6YearsOld()
    pesel6Data.textContent = pesel
})
pesel7to9Btn.addEventListener('click', () => {
    let pesel = generatePeselForBetween7and9YearsOld()
    pesel7to9Data.textContent = pesel
})
pesel10to20Btn.addEventListener('click', () => {
    let pesel = generatePeselForBetween10and20YearsOld()
    pesel10to20Data.textContent = pesel
})
pesel21to24Btn.addEventListener('click', () => {
    let pesel = generatePeselForBetween21and24YearsOld()
    pesel21to24Data.textContent = pesel
})
pesel1to3Btn.addEventListener('click', () => {
    let pesel = generatePeselForBetween1and3YearsOld()
    pesel1to3Data.textContent = pesel
})
pesel3to5Btn.addEventListener('click', () => {
    let pesel = generatePeselForBetween3and5YearsOld()
    pesel3to5Data.textContent = pesel
})
dowodBtn.addEventListener('click', () => {
    let dowod = generateDowod()
    dowodData.textContent = dowod
})
mdowodBtn.addEventListener('click', () => {
    let mdowod = generateMDowod()
    mdowodData.textContent = mdowod
})
paszportBtn.addEventListener('click', () => {
    let paszport = generatePassport()
    paszportData.textContent = paszport
})
nipBtn.addEventListener('click', () => {
    let nip = generateNip()
    nipData.textContent = nip
})
regon9Btn.addEventListener('click', () => {
    let regon9 = generateRegon9()
    regon9Data.textContent = regon9
})
regon14Btn.addEventListener('click', () => {
    let regon14 = generateRegon14()
    regon14Data.textContent = regon14
})
ibanBtn.addEventListener('click', () => {
    let iban = generatePolishIBAN()
    ibanData.textContent = iban
})
ibanRandomBtn.addEventListener('click', () => {
    let ibanRandom = generateRandomIBAN()
    switch (true) {
        case (ibanRandom.length > 25):
            ibanRandomData.style.fontSize = "1.2rem"
            break;
        default:
            ibanRandomData.style.fontSize = "1.4rem"
    }
    ibanRandomData.textContent = ibanRandom
})
vinBtn.addEventListener('click', () => {
    let vin = generateVIN()
    vinData.textContent = vin
})
bicBtn.addEventListener('click', () => {
    let bic = generateBIC()
    bicData.textContent = bic
})
wzonBtn.addEventListener('click', () => {
    let wzon = generateWZONNumber()
    wzonData.textContent = wzon
})
uuidBtn.addEventListener('click', () => {
    let uuid = generateUUID()
    uuidData.style.fontSize = "1.05rem"
    uuidData.textContent = uuid
})
landRegisterBtn.addEventListener('click', () => {
    let landRegister = generateLandRegister()
    landRegisterData.textContent = landRegister
})
// On page enter
generateDataOnPageEnter()
changeFontSize()

