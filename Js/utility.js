

function hideElement(elementId) {
    const val = document.getElementById(elementId)
    val.classList.add('hidden')
}
function showElement(elementId) {
    const val = document.getElementById(elementId)
    val.classList.remove('hidden')
}

function getValue(elementId) {
    const element = document.getElementById(elementId)
    const text = element.innerText
    const score = parseInt(text)
    return score
}

function setValue(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}

function getRandomAlphabet() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const rand = alphabet.split('')
    const randNum = Math.random() * 25
    const index = Math.round(randNum);
    const resValue = rand[index]
    return resValue
}

function addBgColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
function removeBgColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}