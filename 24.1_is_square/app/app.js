'use strict'

/*
Instructions
You are given a function, Square, that takes four parameters, a,
b, c, d, denoting the length of the square edges.
Using prototype properties, add a method to Square named
isSquare that prints true if a Square object has equal edges
and false if they are unequal.
Here is the Square function:
*/


function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;

    Square.prototype.isSquare = function(){
        return this.a === this.b === this.c === this.d
    }

    Square.prototype.changeProperty = function (prop,newVal){
        this[prop] = newVal
    }
}

const square1 = new Square(20, 20, 20, 20)

console.log(square1.hasOwnProperty('isSquare'))
console.log(Square.prototype.hasOwnProperty('isSquare'))


console.log(`square1 ${square1.isSquare ? 'is a square' : 'isn\'t a square'}`)




square1.changeProperty('a', 21)
console.log(`square1 ${square1.isSquare() ? 'is a square' : 'isn\'t a square'}`)
console.log(`square1.a ${square1.a}`)

// square1.Square.prototype.changeProperty('a', 21)
// square1.prototype.changeProperty('a', 21)