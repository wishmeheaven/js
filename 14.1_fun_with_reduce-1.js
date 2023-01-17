
// Write the following functions using the reduce built -in function.
// 1. max
const numbers = [234, 1, 3, 57, -11, 14, 27, -523, 1209, 0]
const maxnum = numbers.reduce((max, cur) => {
    return max > cur ? max : cur
})
console.log("maxnum", maxnum)

// 2. the sum of even numbers
const nums = [0,1,2,3,4,5,6,7,8,9,11]
const sumOfEven = nums.reduce((sOe, cur) => {
            return cur % 2 === 0 ? sOe += cur : sOe
})
console.log(sumOfEven)

// 3. average
const numsArr = [1,2,3,5,6,80,90,100,163]
const average = numsArr.reduce((total, cur) => {
        return total += cur      
})/numsArr.length

console.log(average)


