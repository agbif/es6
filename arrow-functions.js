class Counter {
  constructor () {
      this.count = 1;
  }

  countUp () {
      // Arrow functions automatically avoid most "this" problems
      // var myThis = this;

      setInterval(() => {
          console.log(this.count);

          this.count++;
      }, 1000);
  }
}


// ---------------------------


const myCounter = new Counter();

myCounter.countUp();


// ---------------------------


const foods = [ 'pizza', 'eggs', 'burgers', 'lasagna' ];

const upperFoods = foods.map(function (food) {
    return food.toUpperCase();
});

// Using some of the syntax exceptions can result in shorter code
// WITHOUT sacrificing readability
const arrowUpper = foods.map(food => food.toUpperCase());
