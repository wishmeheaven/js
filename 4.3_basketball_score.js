const scoresAvg = (a, b, c) => { return ((a + b + c) / 3) };

let teamJohnLast3GamesAvg = Math.floor(scoresAvg(116, 120, 103));
let teamMikeLast3GamesAvg = Math.floor(scoresAvg(116, 94, 123));

// function declareWinner(team1, team2) {

//     if (team1 > team2) {
//         console.log(`John's team has an higher (${team1} pts.) average than Mike's (${team2} pts.) team`);
//     } else if (team1 < team2) {
//         console.log(`Mike's team has an higher (${team2} pts.) average than John's (${team1} pts.) team`);
//     } else {
//         console.log(`Both teams have the same average (${team2} pts.)`);
//     }

// } 

let teamMaryLast3GamesAvg = Math.floor(scoresAvg(97, 134, 200));


function declareWinner(team1, team2, team3) {

    if (team1 > team2 && team1 > team3) {
        return console.log(`John's team has an higher (${team1} pts.) average than Mike's (${team2} pts.) team and Mary's (${team3} pts.)`);
    } else if (team2 > team1 && team2 > team3) {
        return console.log(`Mike's team has an higher (${team2} pts.) average than John's (${team1} pts.) team and Mary's (${team3} pts.`);
    } else if (team3 > team1 && team3 > team2) {
        return console.log(`Mary's team has an higher (${team3} pts.) average than John's (${team1} pts.) team and Mike's (${team2} pts.`);
    } else {
        return console.log(`All teams have the same average (${team3} pts.)`);
    }
}


console.log(declareWinner(teamJohnLast3GamesAvg, teamMikeLast3GamesAvg, teamMaryLast3GamesAvg));


