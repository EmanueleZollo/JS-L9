// Funzione n.1 - estrazione casuale numero 1-76 con numeri che non si ripetono e che vengono stampati in una riga sotto
let randomNumber = [];
const numberPocket = function () {
    for (let i = 1; i < 77; i++) {
        randomNumber.push(i);
    }
}

numberPocket();



// const generator = document.querySelector("button")
// generator.onclick = randomNumberGenerator;

