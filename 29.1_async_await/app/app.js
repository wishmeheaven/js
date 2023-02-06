'use strict'
/*
Lets change the code below to use async await instead of .then
and .catch
Understanding the code
We are faking an API request to a food recipe database.
We get an array of Ids once consumed.
*/

const getIDs = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([532, 543, 753, 1, 5]);
        }, 1500);
    });

const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
            const recipe = {
                title: "Fresh tomato pasta",
                publisher: "Pinchas Hodadad",
            };
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recipeID);
    });
};

async function displayRecipes() {
    try {
        const IDs = await getIDs();
        console.log(IDs);
        const recipe = await getRecipe(IDs[2]);
        console.log(recipe);
    } catch (error) {
        console.log("It is an error!");
    }
}

displayRecipes();