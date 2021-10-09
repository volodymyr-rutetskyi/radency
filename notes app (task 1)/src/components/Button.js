export default function (innerText, action, classList) {
    const button = document.createElement('button')
    button.innerText = innerText
    button.addEventListener('click', action)
    button.className = classList
    return button
}


