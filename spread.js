const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['puppy', 'kitten', 'bunny'];
const marsupials = ['joey', 'koala', 'wallaby'];



// spread out "mammals" inside this new array
const mammalsCopy = [...mammals];


// create one giant mega array by spreading out the smaller ones inside
const animals = [...reptiles, ...mammals, ...marsupials];

console.log('');
console.log('Combine arrays:');
console.log( animals );


// you can use spread to "push" to the end
const animalsWithHumans = [...animals, 'human'];

console.log('');
console.log('"push" to the end of arrays:');
console.log( animalsWithHumans );


const reptilesWithDinos = ['dinosaur', ...reptiles];

console.log('');
console.log('"push" to the beginning of arrays:');
console.log( reptilesWithDinos );
