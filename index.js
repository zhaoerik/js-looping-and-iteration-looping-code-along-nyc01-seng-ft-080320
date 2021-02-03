// Code your solutions in this file

function writeCards(stringNames, event) {
    for (let i=0; i < stringNames.length; i++) {
        console.log(`Thank you, ${stringNames[i]}, for the wonderful ${event} gift!`);
    }
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}

countDown(10);