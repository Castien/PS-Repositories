// array literal
const movies = ["Caddyshack", "Interstellar", "Scarface"];

// overwrite a value
movies[1] = "Batman";

console.log(movies.length);
console.log(movies);

//
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

let yourMovies = ["Caddyshack", "Interstellar", "Scarface"];

let myMovies = ["Batman", "The Count of Monte Cristo", "Shrek"];

// concat
const ourMovies = yourMovies.concat(myMovies, movies);

// make a copy of the array
const copyOfMovies = movies.concat();

// push a new value to the array

copyOfMovies.push("Batman 2");
console.log(copyOfMovies);

// removing the last element in the array
const lastEle = copyOfMovies.pop();

console.log(copyOfMovies);

console.log(`The movie ${lastEle} was removed.`);

const moviesNames = copyOfMovies.join(", ");

console.log(moviesNames);

movies.push("Trading Places", "Antitrust");

// adds element to the front of the array
movies.unshift("Star Wars");

console.log("========================");
console.log(movies);

const lastMovie = movies.pop();
console.log(lastMovie);

console.log(movies);

const nextMovie = movies.shift();
console.log(nextMovie);

console.log(movies);
console.log("========================");

let movies2 = ["Caddyshack", "Interstellar", "Scarface", "Trading Places"];
console.log(movies2);

// splice(start, deleteCount, newItems)
let removedMovies = movies2.splice(3, 1, "Spaceballs", "Alien");

console.log(movies2);

console.log(removedMovies);

// removing 3 element from the array
removedMovies = movies2.splice(0, 3);

console.log(movies2);
console.log(removedMovies);

movies2.splice(1, 0, "The Sting");
console.log(movies2);
console.log("========================");

let movies3 = ["Caddyshack", "Interstellar", "Scarface", "Trading Places"];
console.log(movies3);

// makes copy of values inside a section
const middleMovies = movies3.slice(1, 3);
console.log(middleMovies);

console.log(movies3);

console.log(movies3[movies3.length - 1]);

console.log(movies3.at(-1));

let movies4 = ["Caddyshack", "Interstellar", "Scarface", "Trading Places"];

console.log(movies4.reverse());

console.log("========================");

// 2d arrays || nested arrays

const breakoutRooms = [
    ["ana", "mike"], // 0
    ["josh", "maria"], // 1
    ['mark', 'elon'],
];

// x|o|x
// x|x|o
// x|o|o
const board = [
    ['x', 'o', 'x'], // row 1
    ['x', 'x', 'o'], // row 2
    ['x', 'o', 'o'] // row 3
];

// breakoutRooms[row][column]
console.log(breakoutRooms[2][1]);

console.log("========================");
let numArray = [
    [1, 2, 3],
	[4, 5, 6],
	[
        [7, 8, 9],
		[10, 11, 12],
		[13, 14, 15]
	],
];
console.log( numArray);

const twoDArray = numArray.flat(2);

console.log(twoDArray);

console.log( numArray);

let numArray2 = [4, 8, 1, 0, -14, 22, 77, 1388, 20];

//console.log(numArray2.sort()); // sort on the first unit
//console.log(numArray2.sort( (a, b) => a - b) ); // passing a sorting function

const sortedArray = numArray2.toSorted((a, b) => a - b);
console.log(sortedArray);

console.log(numArray2);

console.log("========================");
let movies5 = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

const batmanMovie = movies5.indexOf('Batman');
console.log(batmanMovie);

const removedMovie = movies5.splice(batmanMovie, 1);

console.log(movies5);

// forEach
movies5.forEach(movie => console.log(movie));

// for (let movie = 0; movie < movies5.length; movie++) {
//     console.log(movies5[movie]);
// }


let movies6 = [ 'Spaceballs', 'The Sting', 'Alien' ];

const arrayCopy5 = [...movies6, 'Batman']
console.log(arrayCopy5);

console.log(movies6 === arrayCopy5);

console.log(movies6);