
function numbersToCheck(numbers) {

    let unDuplicatedArr = []

    for (let i = 0; i < numbers.length; i++) {

        if (unDuplicatedArr.indexOf(numbers[i]) === -1) {
            unDuplicatedArr.push(numbers[i])
        }
    }

    return unDuplicatedArr

}
console.log(numbersToCheck([3, 4, 8, 8, 10, 8, 4, 3, 6, 3]))