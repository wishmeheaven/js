/*
Instructions
You are given a function, Pokeman, that takes three
parameters, pokemonName, pokemonType, an array of
different pokemon attack methods, pokemonAttackList.
1. Create three instances of the Pokemon and save them in
    a variable.
2. Using prototype properties, add the following methods:
● A method called callPokemon will print the following:
“I choose you, <pokemon name>
    ● • A method called attack that takes one parameter,
    an attack number, that will print the specific attack
    method from the pokemonAttackList array as the
    following: “<pokemon name> used <attack method>”
        Call each pokemon with the 2 methods you created.
        Here is the Pokemon function:
}
*/     

function Pokemon(pokemonName, pokemonType,
    pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
 }

    const pikachu = new Pokemon(name = "Pikachu", type = "Electric", attackList = ["Thunderbolt", "Quick Attack", "Iron Tail"])
    const charizard = new Pokemon(name = "Charizard", type = "Fire/Flying", attackList = ["Flame Thrower", "Dragon Claw", "Wing Attack"])
    const squirtle = new Pokemon(name = "Squirtle", type = "Water", attackList = ["Water Gun", "Bubble Beam", "Withdraw"])

    Pokemon.prototype.summon = function(){
        console.log(`I choose you, ${this.name}`)
    }

    Pokemon.prototype.attackMethod = function(number){
        console.log(`${this.name} used ${this.attackList[number]}`)
    }

    pikachu.summon()
    pikachu.attackMethod(Math.floor(Math.random()*3))
    charizard.summon()
    charizard.attackMethod(Math.floor(Math.random()*3))
    squirtle.summon()
    squirtle.attackMethod(Math.floor(Math.random()*3))


