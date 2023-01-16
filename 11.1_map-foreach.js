const movies = ["Looper","Oldboy","Awakening Life","Once Upon A Time In America"]
    

function usingForEach(arr){
    
    let objArr = []
    arr.forEach(function(el,idx){
       objArr.push({"id": idx, "title": el})
    })
    return objArr
}

console.log("using forEach: ",usingForEach(movies))

function usingMap(arr){
    let id = 0;
    return arr.map(function(el){
        return {
            "id": id++, "title": el
        }
    })
}

console.log("using map: ", usingMap(movies))
