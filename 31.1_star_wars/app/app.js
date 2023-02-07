'use strict'
document.getElementById('btn').addEventListener('click', showStarWarsCharacters)
async function showStarWarsCharacters() {
    const characterInformation = [];

    const data = await fetch("https://swapi.dev/api/people")
        .then((response) => response.json())
        .catch((error) => console.error("Error fetching data:", error));

    for (const result of data.results) {
        let character = {
            name: result.name,
            height: result.height,
            hair: result.hair_color,
            planet: {
                name: "",
                population: "",
            },
        };

        const planetData = await fetch(result.homeworld)
            .then((response) => response.json())
            .catch((error) => console.error("Error fetching planet data:", error));

        character.planet.name = planetData.name;
        character.planet.population = planetData.population;
        characterInformation.push(character);
    }

    const displayContainer = document.createElement("div");
    displayContainer.setAttribute("id", "display-container");
    document.body.appendChild(displayContainer);

    for (const character of characterInformation) {
        const name = document.createElement("p");
        name.innerText = `Name: ${character.name}`;

        const height = document.createElement("p");
        height.innerText = `Height: ${character.height}`;

        const hair = document.createElement("p");
        hair.innerText = `Hair Color: ${character.hair}`;

        const planet = document.createElement("p");
        planet.innerText = `Planet: ${character.planet.name}`;

        const population = document.createElement("p");
        population.innerText = `Population: ${character.planet.population}`;

        displayContainer.appendChild(name);
        displayContainer.appendChild(height);
        displayContainer.appendChild(hair);
        displayContainer.appendChild(planet);
        displayContainer.appendChild(population);
    }
}