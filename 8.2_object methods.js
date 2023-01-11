
let myCountry = {

    country : "Italy",
    capital : "Rome",
    language : "Italian",
    population : 58.85,
    Neighbors: ["France", "Switzerland", "Austria", "Slovenia"],
    describe : function(){
        console.log(`${this.country} is a country in south of Europe,
        which surrounded by ${[this.Neighbors]}.
        Not all of its ${this.population} Millions people speak ${this.language},
        But it is the formal language above many dialects.
        The capital, ${this.capital}, many landmarks and ruins and and ancient times.
        ${this.country} ${this.isIsland ? "is an" : "isn't an"} island.
        But most of it (the "boot" part) does indeed a peninsula ("half-island"),
        By being surrounded with ocean in 3 directions).`)
    },
    checkLand : function(){
        return this.Neighbors.length > 0 ? false : true
    },
    isIsland : this.checkLand
}

let italy = myCountry

italy.describe()


