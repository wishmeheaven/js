const food = ["Noodle", "Pasta", "Ice-cream",
    "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
    "Olives", "Hamburgers"]

function similarityTracker(arr1, arr2){
    let newArr = []
    for (let simi of food) {
        for (let larry of food1){

            if (simi==larry ) {
                newArr.push(larry)
            }   
        }
    }
        return newArr   
}

console.log(similarityTracker(food,food1))