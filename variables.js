const foods = [ 'pizza', 'eggs', 'burgers', 'lasagna' ];


// DOESN'T WORK ------------------------------
// "const" prevents re-assignments
// foods = [];
// -------------------------------------------


// WORKS -------------------------------------
// "const" doesn't prevent changing the array directly
foods.push( 'brownies' );
// -------------------------------------------


const theUser = {
  name: 'Nazir',
  age: 30,
  hometown: 'Carolina, Puerto Rico'
};


// DOESN'T WORK ------------------------------
// theUser = {};


theUser.name = 'Nizar';
theUser.age++;
theUser.hometown = 'San Juan, Puerto Rico';



const fallingSpeed = 30;


let name = "Ironhacker";

if (true) {
  const name = "Ted";
  console.log("Name inside of if statement: " + name);
}

console.log("Name outside of if statement: " + name);

name = 'Something Else';


// Name inside of if statement: Ted
// Name outside of if statement: Ironhacker




function hello(){
  var name = "Ironhacker";
  console.log("Hello " + name);
}

hello();

// console.log(name);



// for (var i = 0; i <= 10; i += 1) {
//   let name = 'Ironhacker';
//   console.log('During loop ' + i);
// }

// DOESN'T WORK -------------------------------------------
// "let" makes the variable for inside the for loop's block
// console.log(name);
// --------------------------------------------------------


// WORKS --------------------------------------------------
// "var" makes the "i" variable available outside the block
// console.log('After loop ' + i);
// --------------------------------------------------------



// same loop as before but with "let"
for (let i = 0; i <= 10; i += 1) {
  console.log('During loop ' + i);
}


// DOESN'T WORK -------------------------------------------
// "let" makes the "i" variable available only INSIDE the block
// console.log('After loop ' + i);
// --------------------------------------------------------
