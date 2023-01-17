/*a.Array of words*/

const foods = ["falafel", "sabich", "hummus",
    "pizza with extra pineapple"
];

/*
a1.Sort the array of strings from descending to ascending
order and - (a2.) sort from ascending to descending order.
*/
function sortFoods(arr){
    let decsSort = arr.slice().sort((a, b) => {
        if(a < b){
            return 1;
        } else if(a > b){
            return -1;
        } else {
            return 0;
        }
    })
    console.log("decs", decsSort);
    
    let acsSort = arr.slice().sort((a, b) => {
        if(a > b){
            return 1;
        } else if(a < b){
            return -1;
        } else {
            return 0;
        }
    })
    console.log("acs",acsSort);

}
sortFoods(foods);

/*
b.Let's sort an array of words that includes a word with an
uppercase 
*/

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "sandwich",
    "agvania",
    "avocao",
    "Anona",
    "pizza with extra pineapple",
];

/*
b.1.Sort the array of strings from descending to ascending
order.
b.2.Sort the array of strings from ascending to descending
order.
*/

function sortWithUpper(arr){
    const capitalArr = []
    const newArr = []
    arr.forEach(function(el){
        newArr.push(el.toLowerCase())
        if (el.charCodeAt(0) > 64 && el.charCodeAt(0) < 91){
                capitalArr.push(el)
            }
    })

    const ascSort = newArr.slice().sort((a, b) => {
        if (a > b){
            return 1
        } else if (b > a){
            return -1
        } else return 0
    })

    for(let cap of capitalArr){
        for(let el of ascSort){
            if(cap.toLowerCase() === el){
                // console.log(cap)
                ascSort.splice(ascSort.indexOf(el),1,cap)
                }
         }
    }
    console.log("ascending w/ capitals", ascSort)

    const descSort = newArr.slice().sort((a, b) => {
        if (a > b){
            return -1
        } else if (b > a){
            return 1
        } else return 0
    })

    for (let cap of capitalArr) {
        for (let el of descSort) {
            if (cap.toLowerCase() === el) {
                // console.log(cap)
                descSort.splice(descSort.indexOf(el), 1, cap)
            }
        }
    }
    console.log("descending w/ capitals", descSort)
}

sortWithUpper(foodsWithUpperCase)

/*
c.Longest word
c.1.Sort the array of strings from the longest word to the
shortest word only using the sort function
*/
 
const words = [
    "apple",
    "supercalifragilisticexpialidocious",
    "hi",
    "zoo" ];

console.log(words.sort((a,b) => (a.length < b.length ? 1 : -1)))


