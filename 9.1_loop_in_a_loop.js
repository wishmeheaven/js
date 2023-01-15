const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for (row of listOfNeighbours){ 

    for (let countries of row) {
        console.log("neighbour: ", countries)
    }

   
}