const display = document.querySelector('.display')
const history = document.querySelector('.history')
const histcont = document.querySelector('.his-cont')
let evalued = false

histcont.innerHTML = display.value
function cal(inp) {
    if (evalued) {
        display.value = ' '
        evalued = false
    }
    display.value += inp

}

function clearval() {
    display.value = ''
}

function evalfunc() {
    try {
        let data = display.value;
        display.value = eval(display.value)
        const newele = document.createElement('h2')
        newele.classList.add('hist-cont')
        newele.innerHTML = data + "=" + display.value
        history.appendChild(newele)
        evalued = true
    }
    catch (err) {
        const newele = document.createElement('h2')
        newele.classList.add('hist-cont')
        newele.innerHTML = "Please Enter valid input"
        history.appendChild(newele)
    }
}

function deletefunc() {
    display.value = display.value.slice(0, -1)
}