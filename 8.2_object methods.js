
let myCountry = {

    country : "Italy",
    capital : "Rome",
    language : "Italian",
    population : 58.85,
    Neighbors: ["France", "Switzerland", "Austria", "Slovenia"],
    describe(){
        const {country, capital, language, population, Neighbors, isIsland} = this;
        return `${country} is a country in south of Europe,
        which surrounded by the countries ${[Neighbors]}.
        Not all of its ${population} Millions people speak ${language},
        But it is the formal language amongst many other dialects.
        ${capital}, its capital, has many ancient landmarks and ruins.
        ${country} ${isIsland ? "is an" : "isn't an"} island, but most of it (the "boot" part) is a peninsula ("half-island"), by being surrounded with ocean in three directions).`
    },
    checkLand() {
        return this.neighbors.length > 0 ? false : true
    },
    isIsland : this.checkLand
    
}

let italy = myCountry

console.log(italy.describe())


