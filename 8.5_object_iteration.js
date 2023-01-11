
function createNewObj(anObj) {
    let newObj = {};
    for (let key in anObj) {
        newObj[anObj[key]] = key;
    }
    return newObj;
}

let anObj ={
    name: "Obi One",
    lastName: "Kenobi",
    profession: "Jedi Master"
}

const aCopyObj = createNewObj(anObj)
console.log(aCopyObj)