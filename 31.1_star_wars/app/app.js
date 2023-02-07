'use strict'
document.getElementById('btn').addEventListener('click', showStarWarsCharacters)

async function showStarWarsCharacters(){
    const characterInformation = [];

    fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            data.results.forEach((result, index) => {
                if (index < 10) {
                    let character = {
                        name: result.name,
                        height: result.height,
                        hair: result.hair_color,
                        planet: {
                            name: result.homeworld.name,
                            population: result.homeworld.population
                        }
                    };
                    characterInformation.push(character);
                }
            });

            characterInformation.forEach(character => {
                let name = document.createElement('p');
                name.innerText = 'Name: ' + character.name;

                let height = document.createElement('p');
                height.innerText = 'Height: ' + character.height;

                let hair = document.createElement('p');
                hair.innerText = 'Hair Color: ' + character.hair;

                let planet = document.createElement('p');
                planet.innerText = 'Planet: ' + character.planet.name;

                let population = document.createElement('p');
                population.innerText = 'Population: ' + character.planet.population;

                document.body.appendChild(name);
                document.body.appendChild(height);
                document.body.appendChild(hair);
                document.body.appendChild(planet);
                document.body.appendChild(population);
            });
        });
}
