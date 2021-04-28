
/* punto 1 */

let films = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
console.log(films[1]);

/* punto 2 */

const arrayToUpperCase = function (array, index) {
    allFilms[index] = array[index].toUpperCase();
};

console.log(films);
let allFilms = [];
arrayToUpperCase(films, 0);
arrayToUpperCase(films, 1);
arrayToUpperCase(films, 2);
arrayToUpperCase(films, 3);
arrayToUpperCase(films, 4);
console.log(allFilms);

/* punto 3 */

let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]



const addArray = function (array, index) {
    films.push(array[index]);
}
addArray(cartoons, 0);
addArray(cartoons, 1);
addArray(cartoons, 2);
addArray(cartoons, 3);
addArray(cartoons, 4);
console.log(films);

/* punto 4 */
cartoons.pop();
films.pop() * 5;
addArray(cartoons, 0);
addArray(cartoons, 1);
addArray(cartoons, 2);
addArray(cartoons, 3);
console.log(films);

/* punto 5 */

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]; 

const compararArray = function (array1, array2) {
   console.log(array1.length === array2.length && array1.join() === array2.join());
}

compararArray(asiaScores, euroScores);