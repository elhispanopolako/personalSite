import { generatePeselAfter18, generatePeselFor6YearsOld, generatePeselForBetween10and20YearsOld, generatePeselForBetween7and9YearsOld, generatePeselUnder18 } from "./util/pesel-generator.js"

// Tu będą funkcje które będziemy generować dla strony z generatorami
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




generatedDataBtn.forEach((button) => {
    button.addEventListener('click', () => {
        let text = button.textContent.trim()
        navigator.clipboard.writeText(text)
        createToast(text)

    })
})

function generateDataOnPageEnter() {
    generateBtn.forEach((button) => {
        button.click()
    })
}
function createToast(text) {
    const toastEl = document.createElement('div')
    toastEl.classList.add('toast')
    // toastEl.classList.add(getColor())
    toastEl.innerText = `${text} was copied to clipboard`

    toastCont.appendChild(toastEl)

    setTimeout(() => { toastEl.remove() }, 2000)
}

// Add eventListeners
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


// On page enter
generateDataOnPageEnter()