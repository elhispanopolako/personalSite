import { generatePeselUnder18 } from "./util/pesel-generator.js"

// Tu będą funkcje które będziemy generować dla strony z generatorami
const generatedDataBtn = document.querySelectorAll('.generatedData')
const toastCont = document.querySelector('.toasts')
const peselUnder18Data = document.querySelector('#peselUnder18 .generatedData .buttonText')
const peselUnder18Btn = document.querySelector('#peselUnder18 .generateBtn')

generatedDataBtn.forEach((button) => {
    button.addEventListener('click', () => {
        let text = button.textContent.trim()
        navigator.clipboard.writeText(text)
        createToast(text)

    })
})

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
