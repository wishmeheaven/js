function countryToLiveIn(language, isIsland, population, country) {


    if (language ==="English" && population < 50000000 && !isIsland) {
        console.log(`You should live in ${country}`);
    } else {
        console.log(`${country} does not meet your criteria`);
    }
}


let wishOfSarah = countryToLiveIn("English", false, 40000000,"England");
console.log(wishOfSarah);

countryToLiveIn("Finnish", true, 10000000, "Finland");
