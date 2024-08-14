function letsPlay() {
    hideElement('home')
    hideElement('finalRes')
    showElement('playGround')
    setValue('life', 5)
    setValue('score', 0)
    startGame()
}
function gameOver() {
    hideElement('playGround')
    showElement('finalRes')
    const score = document.getElementById('score').innerText
    setValue('result-final', score)
    const current = document.getElementById('screen').innerText
    removeBgColor(current)
}
function handleKeyUpEvent(event) {
    const playerKey = event.key
    if (playerKey == 'Escape') {
        gameOver()
    }
    const currentAlphabet = document.getElementById('screen')
    const currentVal = currentAlphabet.innerText;
    const expected = currentVal.toLowerCase()
    if (playerKey == expected) {
        const currentScore = getValue('score')
        const newScore = currentScore + 1
        setValue('score', newScore)
        removeBgColor(expected)
        startGame()
    } else {
        const currentScore = getValue('life')
        const newScore = currentScore - 1
        setValue('life', newScore)
        if (newScore == 0) {
            gameOver()
        }
    }
}
document.addEventListener('keyup', handleKeyUpEvent)

function startGame() {
    // random alphabet generate
    const alphabet = getRandomAlphabet()
    const current = document.getElementById('screen')
    current.innerText = alphabet
    addBgColor(alphabet)
}