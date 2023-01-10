

let brazil = 214.3
let argentina = 45.81
let peru = 33.7
let venezuela = 28.2

let populations = [brazil, argentina, peru, venezuela]

function populationsPercentages(populations){
    let percentages = []

    for (let i = 0 ; i < populations.length ; i++ ) {
        percentages.push((populations[i] / 7900 * 100).toFixed(2))
    }

    return percentages
}

console.log(populationsPercentages(populations))