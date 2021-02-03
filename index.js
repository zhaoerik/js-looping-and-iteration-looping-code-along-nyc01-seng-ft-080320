function writeCards(arr, event) {
    let array = []
    for (let i = 0; i  < arr.length; i++) {
        array.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return array
}

function countDown(int) {
    let num = 0
    while (num <= int) {
        console.log(int)
        int--
    }
} 