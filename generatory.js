// Tu będą funkcje które będziemy generować dla strony z generatorami
const generatedDataBtn = document.querySelectorAll('.generatedData')
const toastCont = document.querySelector('.toasts')

generatedDataBtn.forEach((button) => {
    button.addEventListener('click', () => {
        let text = button.textContent
        navigator.clipboard.writeText(text)
        console.log(text)
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