


let numSiblings = Number(prompt("How many siblings do you have?"));
// console.log("numSiblings", numSiblings);

if (numSiblings === 1) {
    console.log("1 sibling!");
} else if (numSiblings > 1) {
    console.log(`More than 1 sibling... (${numSiblings} actually)`);
} else {
    console.log("No siblings");
}

// numSiblings !== 1 because those variables aren't the same type
//(string vs number) so we should use the === operator to assure that 
// the variables that we are interesting to work with are the same type.




