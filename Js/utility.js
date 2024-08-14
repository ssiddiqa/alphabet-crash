

function hideElement(elementId) {
    const val = document.getElementById(elementId)
    val.classList.add('hidden')
}
function showElement(elementId) {
    const val = document.getElementById(elementId)
    val.classList.remove('hidden')
}