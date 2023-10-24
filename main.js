
// .length
const cars = ['Ford', 'Dodge', 'Chevy', 'Toyota']

console.log(cars.length);

// .concat
const moreCars = ['Kia', 'Mazda', 'Volks', 'Honda']

const totalCars = cars.concat(moreCars);

console.log(totalCars)


// .indexOf & .lastIndexOf
console.log(totalCars.indexOf('Honda'));

console.log(totalCars.lastIndexOf('Ford'));

// .join
const stringOfCars = totalCars.join()

console.log(stringOfCars)


// .split
const carsFromString = stringOfCars.split(`,`)

console.log(carsFromString)


// .reverse
let carsInReverse = totalCars.reverse();

console.log(carsInReverse);


// .sort
console.log(carsInReverse.sort());

// Pet Half

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']


// .slice
const reptiles = pets.slice(4, 6)

console.log(reptiles);
console.log(pets);


// .splice
const removedReptiles = pets.splice(4, 2, 'hamster')

console.log(removedReptiles);
console.log(pets);


// .pop
let removedPets = pets.pop()

console.log(removedPets);
console.log(pets);


// .push
pets.push(removedPets);

console.log(pets)


// .shift
pets.shift()
console.log(pets);


// .unshift
pets.unshift('turtle')
console.log(pets);

// Numbers forEach Section

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

function addTwo(num, index, arr) {
    return num + 2;
  }
  
  numbers.forEach((num, index, arr) => {
    arr[index] = addTwo(num, index, arr);
  });
  
  console.log(numbers);