function add(a, b) {
    return a + b
}

function minus(a, b) {
    return a - b
}

function divide(a, b) {
    return Number((a / b).toFixed(3))
}

function multiply(a, b) {
    return a * b
}

function promptOperation() {
    const operation = prompt("Введіть операцію (add, sub, mult, div):")
    if (operation === "add" || operation === "sub" || operation === "mult" || operation === "div") {
        return operation
    } else {
        return promptOperation()
    }
}

function promptNumber(msg) {
    const res = prompt(msg)
    const maxNumber = Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER))
    if (isNaN(+res) || res === "") {
        return promptNumber("Дозволені тільки числа! Введіть число ще раз:")
    }
    if (+res > Math.abs(maxNumber)) {
        return promptNumber(
            `Діапазон дозволених чисел від ${-maxNumber} до ${maxNumber}. Введіть число ще раз:`
        )
    }
    return +res
}

function calculate() {
    const operation = promptOperation()
    const a = promptNumber("Введіть перше число:")
    const b = promptNumber("Введіть друге число:")

    let result
    let operator

    if (operation === "add") {
        result = add(a, b)
        operator = "+"
    } else if (operation === "sub") {
        result = minus(a, b)
        operator = "-"
    } else if (operation === "mult") {
        result = multiply(a, b)
        operator = "*"
    } else if (operation === "div") {
        result = divide(a, b)
        operator = "/"
    }

    alert(`${a} ${operator} ${b} = ${result}`)
}

const btnEl = document.createElement("button")
btnEl.textContent = "Calculate"
btnEl.onclick = calculate

document.body.append(btnEl)
